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
// import Delete from './Delete';
// import Edit from './Edit';
import Detail from './Detail';
import { imageUrl } from 'helpers';
import ModalImage from "react-modal-image";

const columns = [
  {
    name: 'No',
    selector: 'index',
    sortable: true, 
   width: '60px'
  },
  {
    name: 'image',
    grow: 0,
    cell: row => row.image && <ModalImage
                  small={imageUrl.gallery + row.image}
                  large={imageUrl.gallery + row.image}
                  className="image-thumbnail"
                />,
    width: '140px'
  },
  {
    name: 'Dans la gallerie',
    sortable: true,
    selector: 'Galleries.name',
    cell: row =>  {
        if( row.Galleries && row.Galleries !== null){
          const name = row.Galleries.map(function(objet){
            const gallerie_name = objet.name;
            return gallerie_name
          })
            return <div className="fh5co-lead" > {name.join(' - ')} </div>;
        }
        else{
            return <div className="fh5co-lead" > Aucune gallerie lié à ce média</div>;
        }
    },
  },
  {
    name: 'Alt', 
    sortable: true,
    selector: 'alt',
    cell: row => <div className="fh5co-lead" >{row.alt}</div>
  },
//   {
//     name: 'Visible sur le site',
//     sortable: true,
//     selector: 'visible',
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

class Medias extends React.Component {

  componentDidMount() {
    this.props.getAll('/media')
  }

  render(){ 
    const { data, theme } = this.props;
// console.log('columns:', columns)
// console.log('data:', data)
// console.log('this.props:', this.props)
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card className={ 'card-' + theme }>
              <CardHeader>
                <h5>
                <i className="fa fa-rss"></i> Liste des médias
                </h5>
              </CardHeader>
              <CardBody>
                <DefaultTable 
                  columns={ columns }
                  actionButton={ true }
                  data={ data }
                  loading={ data.loading }
                  context="Medias"
                  filteredColumns={["alt" ]}
                  actionContent={["add", "delete" ,"detail", "edit"]}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

       <Add />
      {/*   <Delete />*/}
        <Detail />
     {/* <Edit />*/}
        
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

export default connect(mapStateToProps, mapDispatchToProps)(Medias)
