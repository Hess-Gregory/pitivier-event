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
import { textLimit } from 'helpers';
import { DefaultTable } from 'components';
const columns = [
  {
   name: 'No',
   selector: 'index',
   sortable: true,
   width: '100px'
  },
  {
    name: 'Salle',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Adresse',
    selector: 'address',
    sortable: true
  },
  {
    name: 'Tel',
    selector: 'phone',
    sortable: true
  },
  {
    name: 'Email',
    selector: 'mail',
    sortable: true
  },
  {
    name: 'Site Internet',
    selector: 'website',
    sortable: true
  },
  {
    name: 'Infos',
    sortable: true,
    cell: row => <div className="fh5co-lead" dangerouslySetInnerHTML={{ __html: textLimit(row.info) }} />
  },
]


class Salle extends React.Component {
  

  componentDidMount() {
      this.props.getAll('/location/salleitem');
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
                <i className="fa fa-user"></i> Liste des salles
                </h5>
              </CardHeader>
              <CardBody>
                <DefaultTable
                  columns={ columns }
                  actionButton={ true }
                  data={ data }
                  loading={ data.loading }
                  context="salle"
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

export default connect(mapStateToProps, mapDispatchToProps)(Salle)
