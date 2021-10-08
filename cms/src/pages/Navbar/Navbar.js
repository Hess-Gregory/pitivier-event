import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from 'reactstrap';
import { connect } from 'react-redux';
import { loadTableActions } from 'stores';
import Add from './Add';
import Delete from './Delete';
import Edit from './Edit';
import Detail from './Detail';
import { DefaultTable } from 'components';
import { dateToString } from 'helpers';
const columns = [
  {
   name: 'No',
   selector: 'index',
   sortable: true,
   width: '100px'
  },
  {
    name: 'Nom',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'URL',
    selector: 'path',
    sortable: true
  },
  {
    name: 'Nom du composant',
    selector: 'component_name',
    sortable: true
  },
  {
    name: 'Fichier',
    selector: 'component_import',
    sortable: true
  },
  {
    name: 'Exact',
    selector: 'exact',
    sortable: true,
    format: row => row.exact.toString()
  },
  {
    name: 'Date de création',
    selector: 'created_at',
    sortable: true,
    format: row => dateToString(row.createdAt)
  },
]





class Navbar extends React.Component {
  



  componentDidMount() {
      this.props.getAll(['/navbar']);
  }

  render(){
    
    const { data, theme } = this.props;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card className={ 'card-' + theme }>
              <CardHeader>
                <h5>
                <i className="fa fa-user"></i> Navigation
                </h5>
              </CardHeader>
              <CardBody>
                <DefaultTable
                  columns={ columns }
                  actionButton={ true }
                  data={ data }
                  loading={ data.loading }
                  context="Navigation"
                  filteredColumns={["name", "path", "component_name", "component_import"]}
                  actionContent={["add", "delete", "detail", "edit"]}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Add />
        <Detail />
        <Delete />
        <Edit />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.loadTable,
    theme: state.theme.theme
  }
}

const mapDispatchToProps = {
  getAll: loadTableActions.getAll
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
