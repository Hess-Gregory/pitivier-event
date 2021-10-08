import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Row,
  Container,
  FormGroup,
  Label
} from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { loadTableActions, submitFormActions } from 'stores';
import { DefaultInput, DefaultSubmit, TextEditor } from 'components';

const Location = (props) => {
  const { data4, theme, getAll4 } = props;
  React.useLayoutEffect(() => { getAll4('/location/location') }, [getAll4]);


  const title = DefaultInput({
    default: data4 ? data4[0].title : '',
    type: "text",
    required: true,
    name:"title",
    placeholder:"Titre",
    autoComplete:"title",
    errorMessage: "Titre non valable",
  });


  const content = TextEditor({
    default: data4 ? data4[0].content : '',
  });

  const handleSubmit = (event) => {
    let id = data4 ? data4[0].id : '';

    const body = {
        title      :title.value,
        content   :content.value,
        id: id
        
    }

    Promise.resolve( props.update(`/location/location/${id}`, body) )
      .then(save => save.status && props.getAll4('/location/location'))
      .catch(err => console.log(err))
  }
    return (
  <div className="animated fadeIn">
    <Row>
      <Col>
        <Card className={ 'card-' + theme }>
          <CardHeader>
            <h5>
              <i className="fa fa-info"></i> Page "Location"
            </h5>
          </CardHeader>
            <AvForm id="addCarousel" method="post" onValidSubmit={handleSubmit}>
          <CardBody>
              <Card>
                <CardHeader>
                  <div className="section-title">
                    <h2>Section "Location" </h2>
                  </div>
                </CardHeader>
              <CardBody className="contact-card-body">
                <Container>
                  <Row className="align-items-center">
                    <Col lg="6" md="12" sm="12">
                      <div className="contact-details">
                        <div className="contact-info">
                          <FormGroup>
                              <Label><h4>Titre :</h4></Label>
                              <div className="controls">
                                  { title.input }
                              </div>
                          </FormGroup>
                          <FormGroup>
                              <Label><h4>Description :</h4></Label>
                              <div className="controls">
                                  { content.input }
                              </div>
                          </FormGroup>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </CardBody>
            </Card>            
            <CardFooter className="contact-card-footer">
              <DefaultSubmit submitText="Valider" />
            </CardFooter>
          </CardBody>
            </AvForm>
        </Card>
      </Col>
    </Row>
  </div>
    );
  }

const mapStateToProps = state => {
 
  return {
    data4: state.loadTable4.data4,
    theme: state.theme.theme
  }
}

const mapDispatchToProps = {
  getAll4: loadTableActions.getAll4,
  update: submitFormActions.update
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)
