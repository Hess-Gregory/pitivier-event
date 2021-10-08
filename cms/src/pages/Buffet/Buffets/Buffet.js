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
import Add from './Add';
import Delete from './Delete';
import Edit from './Edit';
import Detail from './Detail';
import { textLimit } from 'helpers';
const columns = [
  {
   name: 'No',
   selector: 'index',
   sortable: true, 
   width: '60px'
  },
  // {
  //   name: 'image',
  //   grow: 0,
  //   cell: row => (row.image !== 'undefined')? row.image && <ModalImage
  //                 small={imageUrl.Buffet + row.image}
  //                 large={imageUrl.Buffet + row.image}
  //                 className="image-thumbnail"
  //               />:'',
  //   width: '140px'
  // },
  {
    name: 'Dans la carte',
    sortable: true,
    selector: 'buffet.title',
    cell: row =>  {
        if( row.buffet && row.buffet !== null){
            return <div className="fh5co-lead" > {row.buffet.title}</div>;
        }
        else{
            return <div className="fh5co-lead" > Aucune carte</div>;
        }
    },
  },
  {
    name: 'Nom', 
    sortable: true,
    selector: 'name',
    //cell: row => <div className="fh5co-lead" dangerouslySetInnerHTML={{ __html: textLimit(row.name) }} />
    cell: row => <div className="fh5co-lead" >{row.name}</div>
  },
  {
    name: 'Description',
    sortable: true,
    selector: 'text',
    cell: row => <div className="fh5co-lead" dangerouslySetInnerHTML={{ __html: textLimit(row.text) }} />
  },
  {
    name: 'Prix',
    sortable: true,
    selector: 'price',
    cell: row => <div className="fh5co-lead" > {row.price}</div>
  },
  {
    name: 'Par',
    cell: row => <div className="fh5co-lead" > {row.unite}</div>
  },
  {
    name: 'Visible sur le site',
    sortable: true,
    selector: 'visible',
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

class Buffet extends React.Component {

  componentDidMount() {
    this.props.getAll('/buffet')
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
                <i className="fa fa-rss"></i> Liste des Buffets
                </h5>
              </CardHeader>
              <CardBody>
                <DefaultTable 
                  columns={ columns }
                  actionButton={ true }
                  data={ data }
                  loading={ data.loading }
                  context="Buffet"
                  filteredColumns={["name" ]}
                  actionContent={["add", "delete" ,"detail", "edit"]}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Add />
        <Delete />
        <Detail />
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

export default connect(mapStateToProps, mapDispatchToProps)(Buffet)
