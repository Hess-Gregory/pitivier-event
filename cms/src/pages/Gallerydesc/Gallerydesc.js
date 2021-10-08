import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  FormGroup,
  Label,
  Spinner
} from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { loadTableActions, submitFormActions } from 'stores';
import { DefaultInput, DefaultSubmit, TextEditor } from 'components';


const Gallerydesc = (props) => {

  const { data, theme, getAll } = props;

  React.useLayoutEffect(() => { getAll('/gallerydesc') }, [getAll]);


  const titledesc = DefaultInput({
    default: data ? data[0].titledesc : '',
    type: "text",
    required: false,
    name:"titledesc",
    placeholder:"Titre",
    autoComplete:"titledesc",
    errorMessage: "Titre Invalable",
  });

  const introdesc = TextEditor({
    default: data ? data[0].introdesc : '',
  });

  const handleSubmit = (event) => {
    let id = data ? data[0].id : '';

    const body = {
      titledesc: titledesc.value,
      introdesc: introdesc.value,
      id: id
    }
    Promise.resolve( props.update(`/gallerydesc/${id}`, body) )
      .then(update => update.status && props.getAll('/gallerydesc'))
      .catch(err => console.log(err))
  }
    return (
      data ?
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card className={ 'card-' + theme }>
              <CardHeader>
                <h5>
                <i className="fa fa-info"></i> Nos Médias (Description)
                </h5>
              </CardHeader>
              <CardBody>
              <AvForm id="addCarousel" method="post" onValidSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Titre</Label>
                  <div className="controls">
                      { titledesc.input }
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label>Introduction</Label>
                  <div className="controls">
                      { introdesc.input }
                  </div>
                </FormGroup>
                <br />
                <DefaultSubmit submitText="Valider" />
              </AvForm>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      :
      <div>
        <center><Spinner color="primary" style={{ width: '3rem', height: '3rem' }}  /></center>
      </div>
    );
  }

const mapStateToProps = state => {
  return {
    data: state.loadTable.data,
    theme: state.theme.theme
  }
}

const mapDispatchToProps = {
  getAll: loadTableActions.getAll,
  update: submitFormActions.update
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallerydesc)
