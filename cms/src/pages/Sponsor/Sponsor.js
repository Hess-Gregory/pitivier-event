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
import { textLimit, imageUrl } from 'helpers';
import ModalImage from "react-modal-image";

const columns = [
  {
   name: 'No',
   selector: 'index',
   sortable: true, 
   width: '60px'
  },
  {
    name: 'Titre',
    cell: row => textLimit(row.title)
  },
  {
    name: 'image',
    grow: 0,
    cell: row => row.image && <ModalImage
                  small={imageUrl.sponsor + row.image}
                  large={imageUrl.sponsor + row.image}
                  className="image-thumbnail"
                />,
    width: '140px'
  },
  {
    name: 'Alt',
    cell: row => <div className="fh5co-lead" dangerouslySetInnerHTML={{ __html: textLimit(row.alt) }} />
  },
  {
    name: 'URL',
    cell: row => textLimit(row.url)
  }
]

class Sponsor extends React.Component {

  componentDidMount() {
    this.props.getAll('/sponsor')
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
                <i className="fa fa-user"></i> Sponsor
                </h5>
              </CardHeader>
              <CardBody>
                <DefaultTable 
                  columns={ columns }
                  actionButton={ true }
                  data={ data }
                  loading={ data.loading }
                  context="Sponsor"
                  filteredColumns={["title", "url"]}
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

export default connect(mapStateToProps, mapDispatchToProps)(Sponsor)
