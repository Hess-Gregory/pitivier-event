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
   name: 'ID',
   selector: 'index',
   sortable: true, 
   width: '60px'
  },
  {
    name: 'Photo',
    grow: 0,
    cell: row => row.image && <ModalImage
                  small={imageUrl.team + row.image}
                  large={imageUrl.team + row.image}
                  className="image-thumbnail"
                />,
    width: '140px'
  },
  {
    name: 'Nom',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Fonction',
    selector: 'position',
    sortable: true,
  },
  {
    name: 'Description',
    cell: row => <div className="fh5co-lead" dangerouslySetInnerHTML={{ __html: textLimit(row.quote) }} />
  },
  {
    name: 'Date de Création',
    selector: 'created_at',
    format: row => dateToString(row.createdAt)
  },
]

class Team extends React.Component {

  componentDidMount() {
    this.props.getAll('/team')
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
                <i className="fa fa-film"></i> L'équipe
                </h5>
              </CardHeader>
              <CardBody>
                <DefaultTable 
                  columns={ columns }
                  actionButton={ true }
                  data={ data }
                  loading={ data.loading }
                  context="coéquipier"
                  filteredColumns={["name"]}
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

export default connect(mapStateToProps, mapDispatchToProps)(Team)
