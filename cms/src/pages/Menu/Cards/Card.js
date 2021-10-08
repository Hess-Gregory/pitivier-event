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
import { textLimit } from 'helpers';

const columns = [
  {
   name: 'No',
   selector: 'index',
   sortable: true, 
   width: '100px'
  },
  {
    name: 'Titre de la carte',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'icon',
    selector: 'icon',
    sortable: true,
    format: row => <h3><i className={row.icon}></i></h3>
  },
  {
    name: 'Description',
    selector: 'description',
    cell: row => <div className="fh5co-lead" dangerouslySetInnerHTML={{ __html: textLimit(row.description) }} />
  },
  {
    name: 'Visible sur le site',
    sortable: true,
    cell: row => {
      if(row.visible){
          return <div className="fh5co-lead" > Visible</div>;
      }
      else{
          return <div className="fh5co-lead" > Caché</div>;
      }
  }
}
]

class Cards extends React.Component {

  componentDidMount() {
    this.props.getAll('/card')
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
                <i className="fa fa-check"></i> Cartes des menus
                </h5>
              </CardHeader>
              <CardBody>
                <DefaultTable 
                  columns={ columns }
                  actionButton={ true }
                  data={ data }
                  loading={ data.loading }
                  context="une carte"
                  filteredColumns={["title"]}
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

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
