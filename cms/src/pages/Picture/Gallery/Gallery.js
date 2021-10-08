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

const columns = [
  {
   name: 'No',
   selector: 'index',
   sortable: true, 
   width: '100px'
  },
  {
    name: 'Nom de la galerie',
    selector: 'name',
    sortable: true,
  },
//   {
//     name: 'Visible sur le site',
//     sortable: true,
//     cell: row => {
//       if(row.visible){
//           return <div className="fh5co-lead" > Visible</div>;
//       }
//       else{
//           return <div className="fh5co-lead" > Caché</div>;
//       }
//   }
// }
]

class Gallery extends React.Component {

  componentDidMount() {
    this.props.getAll('/gallery')
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
                <i className="fa fa-check"></i> Galleries des médias
                </h5>
              </CardHeader>
              <CardBody>
                <DefaultTable 
                  columns={ columns }
                  actionButton={ true }
                  data={ data }
                  loading={ data.loading }
                  context="Gallerie"
                  filteredColumns={["name"]}
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

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
