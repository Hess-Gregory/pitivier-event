import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Row,
  FormGroup,
  Container,
  Label,
  Spinner
} from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { loadTableActions, submitFormActions } from 'stores';
import { DefaultInput, DefaultSubmit, FileInput } from 'components';
import { toastr } from 'react-redux-toastr';
import { imageUrl } from 'helpers';

const Servicedesc = (props) => {
  const { data, theme, getAll } = props;
  React.useLayoutEffect(() => { getAll('/servicedesc') }, [getAll]);


  let image = FileInput({
    default: data && imageUrl.servicedesc + data[0].image,
    maxSize: "5MB",
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "150",
    maxWidth: "4200",
    minHeight: "150",
    maxHeight: "4200",
  });
  const titledesc = DefaultInput({
    default: data ? data[0].titledesc : '',
    type: "text",
    required: false,
    name:"titledesc",
    placeholder:"Titre",
    autoComplete:"titledesc",
    errorMessage: "Titre Invalable",
  });
  const introdesc = DefaultInput({
    default: data ? data[0].introdesc : '',
    type: "text",
    required: false,
    name:"introdesc",
    placeholder:"Sous-titre",
    autoComplete:"introdesc",
    errorMessage: "Sous-titre Invalable",
  });


  const handleSubmit = (event) => {
    let errContext = '';
    const pondError = 8;
    if ( (image.upload && image.value === undefined) || (image.pond && image.pond.status === pondError) ) {
      errContext = 'Image de la description'
    }
    
    if (errContext !== '') {
      toastr.error('', errContext+' est obligatoire')
      return;
    }

    let id = data ? data[0].id : '';
    const body = new FormData()
      image.value !== undefined && body.append('image', image.value[0]) // first image only
      body.append('titledesc', titledesc.value)
      body.append('introdesc', introdesc.value)
    
    Promise.resolve( props.update(`/servicedesc/${id}`, body, true) )
      .then(update => update.status && props.getAll('/servicedesc'))
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
                <i className="fa fa-info"></i> Nos services (Description)
                </h5>
              </CardHeader>
              <AvForm id="addCarousel" method="post" onValidSubmit={handleSubmit}>
                <CardBody>
                  <Card>
                    <CardHeader>
                      <div className="section-title">
                        <h2>Section "Service" </h2>
                      </div>
                    </CardHeader>
                    <CardBody className="contact-card-body">
                      <Container>
                        <Row>
                          <Col lg="6" md="12" sm="12">
                            <div className="about-content">
                              <div className="about-content-text">
                                <FormGroup>
                                    <Label><h4>Titre :</h4></Label>
                                    <div className="controls">
                                        { titledesc.input }
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <Label><h4>Sous-titre :</h4></Label>
                                    <div className="controls">
                                        { introdesc.input }
                                    </div>
                                </FormGroup>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </CardBody>
                  </Card>
                  <Card>
                  <CardHeader>
                    <div className="section-title">
                      <h2>Image Parallax Scrolling </h2>
                    </div>
                  </CardHeader>
                  <CardBody className="contact-card-body">
                    <Container>
                      <Row>
                        <Col lg="12">
                          <div className="about-content">
                            <div className="about-content-text">
                              <FormGroup>
                                <div className="controls">
                                    { image.input }
                                  <small className="help-block form-text text-muted">Type autorisé :" jpg, jpeg, png" ; max : 5 Mo ; dimension: min 150px max 4200px</small>
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

export default connect(mapStateToProps, mapDispatchToProps)(Servicedesc)
