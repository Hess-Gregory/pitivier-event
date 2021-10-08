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
  Label,
  Spinner
} from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { loadTableActions, submitFormActions } from 'stores';
import { DefaultInput, DefaultSubmit, FileInput, TextEditor } from 'components';
import { toastr } from 'react-redux-toastr';
import { imageUrl } from 'helpers';

const About = (props) => {
  const { data, theme, getAll } = props;
  React.useLayoutEffect(() => { getAll('/about') }, [getAll]);


  let image1 = FileInput({
    default: data && imageUrl.about + data[0].image1,
    maxSize: "5MB",
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "150",
    maxWidth: "4200",
    minHeight: "150",
    maxHeight: "4200",
  });
  let image2 = FileInput({
    default: data && imageUrl.about + data[0].image2,
    maxSize: "5MB",
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "150",
    maxWidth: "4200",
    minHeight: "150",
    maxHeight: "4200",
  });
  let image3 = FileInput({
    default: data && imageUrl.about + data[0].image3,
    maxSize: "5MB",
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "150",
    maxWidth: "4200",
    minHeight: "150",
    maxHeight: "4200",
  });
  let image4 = FileInput({
    default: data && imageUrl.about + data[0].image4,
    maxSize: "5MB",
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "150",
    maxWidth: "4200",
    minHeight: "150",
    maxHeight: "4200",
  });

  const title = DefaultInput({
    default: data ? data[0].title : '',
    type: "text",
    required: true,
    name:"title",
    placeholder:"Titre",
    autoComplete:"title",
    errorMessage: "Titre non valable",
  });

  const subtitle = DefaultInput({
    default: data ? data[0].subtitle : '',
    type: "text",
    required: true,
    name:"subtitle",
    placeholder:"Sous titre",
    autoComplete:"subtitle",
    errorMessage: "Sous-titre non valable",
  });

  const desc = TextEditor({
    default: data ? data[0].desc : '',
  });

  const handleSubmit = (event) => {
    let errContext = '';
    const pondError = 8;
    if ( (image1.upload && image1.value === undefined) || (image1.pond && image1.pond.status === pondError) ) {
      errContext = 'Image de la description'
    }
    else if ((image4.upload && image4.value === undefined) || (image4.pond && image4.pond.status === pondError)) {
      errContext = 'Image pour le fond d\'écran'
    }
    else if (title.value === '') {
      errContext = 'Le titre'
    }else if (subtitle.value === '') {
      errContext = 'Le sous-titre'
    } else if (desc.value === '' || desc.value === '<p><br></p>') {
      errContext = 'Le texte "à propos"'
    }

    if (errContext !== '') {
      toastr.error('', errContext+' est obligatoire')
      return;
    }

    let id = data ? data[0].id : '';
    const body = new FormData()
    //image.value !== undefined && body.append('image', image.value[0]) // first image only
      image1.value !== undefined && body.append('image1', image1.value[0]) // first image only
      image2.value !== undefined && body.append('image2', image2.value[0]) // first image only
      image3.value !== undefined && body.append('image3', image3.value[0]) // first image only
      image4.value !== undefined && body.append('image4', image4.value[0]) // first image only
      body.append('title', title.value)
      body.append('subtitle', subtitle.value)
      body.append('desc', desc.value)

    Promise.resolve( props.update(`/about/${id}`, body, true /* third param for status form data */) )
      .then(save => save.status && props.getAll('/about'))
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
              <i className="fa fa-info"></i> Page "A Propos"
            </h5>
          </CardHeader>
            <AvForm id="addCarousel" method="post" onValidSubmit={handleSubmit}>
          <CardBody>
              <Card>
                <CardHeader>
                  <div className="section-title">
                    <h2>Section "Contact" </h2>
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
                                  { title.input }
                              </div>
                          </FormGroup>
                          <FormGroup>
                              <Label><h4>Sous-titre :</h4></Label>
                              <div className="controls">
                                  { subtitle.input }
                              </div>
                          </FormGroup>
                          <FormGroup>
                              <Label><h4>Description :</h4></Label>
                              <div className="controls">
                                  { desc.input }
                              </div>
                          </FormGroup>
                        </div>
                      </div>
                    </Col>
                    <Col lg="6" md="12" sm="12">
                      <div className="about-image-box">
                        <Row>
                          <Col md="12">
                            <div className="about-img">
                              <FormGroup>
                                <Label><h5>Image</h5></Label>
                                  <div className="controls about-img-1">
                                      { image1.input }
                                    <small className="help-block form-text text-muted">Type autorisé :" jpg, jpeg, png" ; max : 5 Mo ; dimension: min 150px max 4200px</small>
                                  </div>
                              </FormGroup>  
                            </div>
                          </Col>
                          <Col md="6">
                            <div className="about-img">
                              <FormGroup>
                                <Label><h5>Image</h5></Label>
                                  <div className="controls about-img-2">
                                      { image2.input }
                                    <small className="help-block form-text text-muted">Type autorisé :" jpg, jpeg, png" ; max : 5 Mo ; dimension: min 150px max 4200px</small>
                                  </div>
                              </FormGroup>
                            </div>
                          </Col>
                          <Col md="6">
                            <div className="about-img">
                              <FormGroup>
                                <Label><h5>Image</h5></Label>
                                  <div className="controls about-img-2">
                                      { image3.input }
                                    <small className="help-block form-text text-muted">Type autorisé :" jpg, jpeg, png" ; max : 5 Mo ; dimension: min 150px max 4200px</small>
                                  </div>
                              </FormGroup>
                            </div>
                          </Col>
                        </Row>
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
                                { image4.input }
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

export default connect(mapStateToProps, mapDispatchToProps)(About)
