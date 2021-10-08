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
import { dateToString, textLimit, imageUrl } from 'helpers';
import ModalImage from "react-modal-image";

const columns = [
  {
   name: 'No',
   selector: 'index',
   sortable: true, 
   width: '60px'
  },
  {
   name: 'Page',
   selector: 'page',
   sortable: true
  },
  {
    name: 'image',
    grow: 0,
    cell: row => row.page && row.image && <ModalImage
                  small={imageUrl.header + row.image}
                  large={imageUrl.header + row.image}
                  // small={imageUrl.[row.page] + row.image}
                  // large={imageUrl.[row.page] + row.image}
                  className="image-thumbnail" 
                />,
    width: '140px'
  },
  {
   name: 'image(Description)',
   selector: 'alt',
   sortable: true
  },
  {
    name: 'Titre de la page',
    cell: row => textLimit(row.tagline)
  },
  {
    name: 'Description',
    cell: row => <div className="fh5co-lead" dangerouslySetInnerHTML={{ __html: textLimit(row.tagdesc) }} />
  },
  {
   name: 'Bouton 1',
   selector: 'btn1name',
   sortable: true
  },
  {
   name: 'Bouton 2',
   selector: 'btn2name',
   sortable: true
  },
  {
   name: 'Bouton 1 (URL)',
   selector: 'btn1url',
   sortable: true
  },
  {
   name: 'Bouton 2 (URL)',
   selector: 'btn2url',
   sortable: true
  },
  {
    name: 'Date Updated',
    selector: 'updated_at',
    format: row => dateToString(row.updatedAt)
  },
]

class Header extends React.Component {

  componentDidMount() {
    this.props.getAll('/header')
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
                <i className="fa fa-header"></i> En-téte de page
                </h5>
              </CardHeader>
              <CardBody>
                <DefaultTable 
                  columns={ columns }
                  actionButton={ true }
                  data={ data }
                  loading={ data.loading }
                  context="Header"
                  filteredColumns={["page", "tagline", "tagdesc"]}
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
