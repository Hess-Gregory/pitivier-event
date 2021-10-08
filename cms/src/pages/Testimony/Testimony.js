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
    name: 'avatar',
    grow: 0,
    cell: row => row.avatar && <ModalImage
                  small={imageUrl.testimony + row.avatar}
                  large={imageUrl.testimony + row.avatar}
                  className="image-thumbnail"
                />,
    width: '140px'
  },
  {
   name: 'Client',
   selector: 'username',
   sortable: true
  },
  {
    name: 'Témoignage',
    cell: row => textLimit(row.comment)
  },
  {
    name: 'Ajouté le',
    selector: 'created_at',
    format: row => dateToString(row.createdAt)
  },
]

class Testimony extends React.Component {

  componentDidMount() {
    this.props.getAll('/testimony')
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
                <i className="fa fa-comments-o"></i> Les commentaires
                </h5>
              </CardHeader>
              <CardBody>
                <DefaultTable 
                  columns={ columns }
                  actionButton={ true }
                  data={ data }
                  loading={ data.loading }
                  context="témoignage"
                  filteredColumns={["username"]}
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

export default connect(mapStateToProps, mapDispatchToProps)(Testimony)
