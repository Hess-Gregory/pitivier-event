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
import { dateToString, textLimit } from 'helpers';

const columns = [
  {
   name: 'No',
   selector: 'index',
   sortable: true, 
   width: '100px'
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'icon',
    selector: 'icon',
    sortable: true,
    format: row => <h3><span className={row.icon}></span></h3>
  },
  {
    name: 'url',
    selector: 'url',
    cell: row => textLimit(row.url)
  },
  {
    name: 'Date Created',
    selector: 'created_at',
    sortable: true,
    format: row => dateToString(row.createdAt)
  },
]

class Socmed extends React.Component {

  componentDidMount() {
    this.props.getAll('/socmed')
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
                <i className="fa fa-share-alt"></i> Social Media
                </h5>
              </CardHeader>
              <CardBody>
                <DefaultTable 
                  columns={ columns }
                  actionButton={ true }
                  data={ data }
                  loading={ data.loading }
                  context="Social Media"
                  filteredColumns={["name", "url"]}
                  actionContent={["add", "delete", "detail", "edit"]}
                  responsive={false}
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

export default connect(mapStateToProps, mapDispatchToProps)(Socmed)
