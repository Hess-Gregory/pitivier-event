import React from 'react';
import { 
  Card, 
  CardBody, 
  CardHeader, 
  Col, 
  Row
} from 'reactstrap'; 
import { connect } from 'react-redux';
import { DefaultTable } from 'components';
import { loadTableActions } from 'stores';
import Detail from './Detail';
import {  dateToString, textLimit } from 'helpers';

const columns = [
  {
   name: 'No',
   selector: 'index',
   sortable: true, 
   width: '60px'
  },
  {
    name: 'Type',
    // sortable: true,
   selector: 'type' ,
    cell: row => textLimit(row.type)
  },
  {
    name: 'Model',
    // sortable: true, 
   selector: 'model',
    cell: row => textLimit(row.model)
  },
  {
    name: 'Id du model',
   selector: 'id_model',
    cell: row => textLimit(row.id_model)
  },
  {
    name: 'Data',
    selector: 'data',
    cell: row => textLimit(row.data)
  },
  // {
  //   name: 'Par',
  //   cell: row => textLimit(row.by)
  // },
  // {
  //   name: 'Role',
  //   cell: row => textLimit(row.role)
  // },
  {
    name: 'Date',
    sortable: true, 
    selector: 'createdAt',
    format: row => dateToString(row.createdAt, true)
    // format: row => dateHourToString(row.createdAt)
  },
]

class Audit extends React.Component {

  componentDidMount() {
    this.props.getAll('/audit')
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
                <i className="fa fa-rss"></i> Audit
                </h5>
              </CardHeader>
              <CardBody>
                <DefaultTable 
                  columns={ columns }
                  actionButton={ true }
                  data={ data }
                  loading={ data.loading }
                  context="Audit"
                  filteredColumns={[ 'createdAt']}
                  actionContent={["detail"]}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Detail />
        
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

export default connect(mapStateToProps, mapDispatchToProps)(Audit)
