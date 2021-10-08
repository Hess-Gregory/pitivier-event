import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Row,
  FormGroup,
  Label,
  Spinner,
  Container
} from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { loadTableActions, submitFormActions } from 'stores';
import { DefaultInput, DefaultSubmit } from 'components';
import Icofont from 'react-icofont';

const Contact = (props) => {
  const { data, theme, getAll } = props;
  React.useLayoutEffect(() => { getAll('/contact') }, [getAll]);

  const title1 = DefaultInput({
    default: data ? data[0].title1 : '',
    type: "text",
    required: true,
    name:"title1",
    placeholder:"Titre",
    autoComplete:"title1",
    errorMessage: "Format titre invalable",
  });
  const title2 = DefaultInput({
    default: data ? data[0].title2 : '',
    type: "text",
    required: true,
    name:"title2",
    placeholder:"Titre",
    autoComplete:"title2",
    errorMessage: "Format titre invalable",
  });
  const subtitle1 = DefaultInput({
    default: data ? data[0].subtitle1 : '',
    type: "text",
    required: true,
    name:"subtitle1",
    placeholder:"Sous-titre",
    autoComplete:"subtitle1",
    errorMessage: "Format sous-titre invalable",
  });
  const subtitle2 = DefaultInput({
    default: data ? data[0].subtitle2 : '',
    type: "text",
    required: true,
    name:"subtitle2",
    placeholder:"Sous-titre",
    autoComplete:"subtitle2",
    errorMessage: "Format sous-titre invalable",
  });
  const intro = DefaultInput({
    default: data ? data[0].intro : '',
    type: "text",
    required: true,
    name:"intro",
    placeholder:"Introduction",
    autoComplete:"intro",
    errorMessage: "Format de l'introduction invalable",
  });
  const name = DefaultInput({
    default: data ? data[0].name : '',
    type: "text",
    required: true,
    name:"name",
    placeholder:"Nom de votre société",
    autoComplete:"name",
    errorMessage: "Format de votre nom de société invalable",
  });
  const mail1 = DefaultInput({
    default: data ? data[0].mail1 : '',
    type: "email",
    required: true,
    name:"mail1",
    placeholder:"E-mail principal",
    autoComplete:"mail1",
    errorMessage: "Format de l'email invalable",
  });
  const mail2 = DefaultInput({
    default: data ? data[0].mail2 : '',
    type: "email",
    required: true,
    name:"mail2",
    placeholder:"E-mail secondaire",
    autoComplete:"mail2",
    errorMessage: "Format de l'email invalable",
  });
  const address = DefaultInput({
    default: data ? data[0].address : '',
    type: "textarea",
    required: true,
    name:"address",
    placeholder:"Address",
    autoComplete:"address",
    errorMessage: "Format de l'adresse invalable",
  });
  const phone1 = DefaultInput({
    default: data ? data[0].phone1 : '',
    type: "text",
    required: true,
    name:"phone1",
    placeholder:"Numéro de téléphone principal",
    autoComplete:"phone1",
    errorMessage: "Format du Numéro de téléphone invalable",
  });
  const phone2 = DefaultInput({
    default: data ? data[0].phone2 : '',
    type: "text",
    required: true,
    name:"phone2",
    placeholder:"Numéro de téléphone secondaire",
    autoComplete:"phone2",
    errorMessage: "Format du Numéro de téléphone invalable",
  });
  const hourlyday = DefaultInput({
    default: data ? data[0].hourlyday : '',
    type: "text",
    required: true,
    name:"hourlyday",
    placeholder:"Jours d'ouverture",
    autoComplete:"hourlyday",
    errorMessage: "Format des Jours d'ouverture invalable",
  });
  const hourlytime = DefaultInput({
    default: data ? data[0].hourlytime : '',
    type: "text",
    required: true,
    name:"hourlytime",
    placeholder:"Horaire",
    autoComplete:"hourlytime",
    errorMessage: "Format horaire invalable",
  });
  const hourlytext = DefaultInput({
    default: data ? data[0].hourlytext : '',
    type: "text",
    required: true,
    name:"hourlytext",
    placeholder:"Autres informations des ouvertures",
    autoComplete:"hourlytext",
    errorMessage: "Format des informations invalable",
  });
  const videotitle = DefaultInput({
    default: data ? data[0].videotitle : '',
    type: "text",
    required: true,
    name:"videotitle",
    placeholder:"Titre de la vidéo",
    autoComplete:"videotitle",
    errorMessage: "Format du titre invalable",
  });
  const videourl = DefaultInput({
    default: data ? data[0].videourl : '',
    type: "text",
    required: true,
    name:"videourl",
    placeholder:"URL de la vidéo de présentation",
    autoComplete:"videourl",
    errorMessage: "Format de l'URL invalable",
  });

  const addressTitle = DefaultInput({
    default: data ? data[0].addressTitle : '',
    type: "text",
    name:"addressTitle",
    placeholder:"Adresse : ",
    autoComplete:"addressTitle",
    errorMessage: " invalable",
  });
  const phoneTitle = DefaultInput({
    default: data ? data[0].phoneTitle : '',
    type: "text",
    name:"phoneTitle",
    placeholder:"Titre de 'telephone'",
    autoComplete:"phoneTitle",
    errorMessage: "invalable",
  });

  const mailTitle = DefaultInput({
    default: data ? data[0].mailTitle : '',
    type: "text",
    name:"mailTitle",
    placeholder:"Titre des emails",
    autoComplete:"mailTitle",
    errorMessage: "invalable",
  });

  const hourlyTitle = DefaultInput({
    default: data ? data[0].hourlyTitle : '',
    type: "text",
    name:"hourlyTitle",
    placeholder:"Titre des emails",
    autoComplete:"hourlyTitle",
    errorMessage: "invalable",
  });
        
  // nameForm        : "Your Full Name",
  // mailForm        : "Your mail",
  // sujetForm       : "Your Subject",
  // messageForm     : "Your message",
  // boutonForm      : "Send Message",
  // boutonnavbar      : "Call To Reservation"

  const nameForm = DefaultInput({
    default: data ? data[0].nameForm : '',
    type: "text",
    name:"nameForm",
    placeholder:"URL de la vidéo de présentation",
    autoComplete:"nameForm",
    errorMessage: "Format de l'URL invalable",
  });
  const mailForm = DefaultInput({
    default: data ? data[0].mailForm : '',
    type: "text",
    name:"mailForm",
    placeholder:"URL de la vidéo de présentation",
    autoComplete:"mailForm",
    errorMessage: "Format de l'URL invalable",
  });
  const sujetForm = DefaultInput({
    default: data ? data[0].sujetForm : '',
    type: "text",
    name:"sujetForm",
    placeholder:"URL de la vidéo de présentation",
    autoComplete:"sujetForm",
    errorMessage: "Format de l'URL invalable",
  });
  const messageForm = DefaultInput({
    default: data ? data[0].messageForm : '',
    type: "text",
    name:"messageForm",
    placeholder:"URL de la vidéo de présentation",
    autoComplete:"messageForm",
    errorMessage: "Format de l'URL invalable",
  });
  const boutonForm = DefaultInput({
    default: data ? data[0].boutonForm : '',
    type: "text",
    name:"boutonForm",
    placeholder:"URL de la vidéo de présentation",
    autoComplete:"boutonForm",
    errorMessage: "Format de l'URL invalable",
  });
  const boutonnavbar = DefaultInput({
    default: data ? data[0].boutonnavbar : '',
    type: "text",
    name:"boutonnavbar",
    placeholder:"URL de la vidéo de présentation",
    autoComplete:"boutonnavbar",
    errorMessage: "Format de l'URL invalable",
  });

  const handleSubmit = (event) => {
    let id = data ? data[0].id : '';

    const body = {
        title1      :title1.value,
        subtitle1   :subtitle1.value,
        title2      :title2.value,
        subtitle2   :subtitle2.value,
        intro       :intro.value,
        name        :name.value,
        mail1       :mail1.value,
        mail2       :mail2.value,
        address     :address.value,
        phone1      :phone1.value,
        phone2      :phone2.value,
        hourlyday   :hourlyday.value,
        hourlytime  :hourlytime.value,
        hourlytext  :hourlytext.value,
        videotitle  :videotitle.value,
        videourl    :videourl.value,
        addressTitle: addressTitle.value,
        phoneTitle:  phoneTitle.value,
        hourlyTitle  :hourlyTitle.value,
        mailTitle  : mailTitle.value,
        id: id,
      nameForm        : nameForm.value,
      mailForm        : mailForm.value,
      sujetForm       : sujetForm.value,
      messageForm     : messageForm.value,
      boutonForm      : boutonForm.value,
      boutonnavbar      : boutonnavbar.value
        
    }

    Promise.resolve( props.update(`/contact/${id}`, body) )
      .then(update => update.status && props.getAll('/contact'))
      .catch(err => console.log(err))
  }
    return (
      data ?
      <div className="animated fadeIn">
        <style dangerouslySetInnerHTML={{__html: `
        #phoneTitle, #addressTitle, #mailTitle, #phoneTitle, #hourlyTitle, #nameForm, #mailForm, #sujetForm, #messageForm, #boutonForm, #boutonnavbar {
                color: #2c2c34 !important;
                background-color: rgba(255, 255, 255, 0.75) !important;
                border-color: #2c2c34 !important; 
                font-weight: bold !important; 
                font-size: 1.2em;
        `}} />
        <Row>
          <Col>
            <Card className={ 'card-' + theme }>
                <AvForm id="addContact" method="post" onValidSubmit={handleSubmit}>
              <CardHeader>
                <h5>
                <i className="fa fa-phone"></i> Coordonnées
                </h5>
              </CardHeader>
              <CardBody>
                <Card>
                  <CardHeader>
                    <div className="section-title">
                      <h2>Page "Contact" : </h2>
                    </div>
                  </CardHeader>
                  <CardBody className="contact-card-body">
                    <Container>
                      <Row className="align-items-center">
                        <Col lg="4">
                          <div className="contact-information">
                            <Row className="row">
                              <Col lg="12" md="12" sm="12">
                                <div className="contact-details">
                                  <div className="contact-icon">	<Icofont icon="phone"/>
                                  </div>
                                  <div className="contact-info">
                                      <FormGroup>
                                          <div className="controls">
                                              { phoneTitle.input }
                                          </div>
                                      </FormGroup>
                                      <FormGroup>
                                          <div className="controls">
                                              { phone1.input }
                                          </div>
                                      </FormGroup>
                                      <FormGroup>
                                          <div className="controls">
                                              { phone2.input }
                                          </div>
                                      </FormGroup>
                                  </div>
                                </div>
                              </Col>
                              <Col lg="12" md="12" sm="12">
                                <div className="contact-details">
                                  <div className="contact-icon">	<Icofont icon="location-pin"/>
                                  </div>
                                  <div className="contact-info">
                                    <FormGroup>
                                        <div className="controls">
                                            { addressTitle.input }
                                        </div>
                                    </FormGroup>
                                      <FormGroup>
                                          <div className="controls">
                                              { address.input }
                                          </div>
                                      </FormGroup>
                                  </div>
                                </div>
                              </Col>
                              <Col lg="12" md="12" sm="12">
                                <div className="contact-details">
                                  <div className="contact-icon"><Icofont icon="envelope"/>
                                  </div>
                                  <div className="contact-info">
                                      <FormGroup>
                                          <div className="controls">
                                              { mailTitle.input }
                                          </div>
                                      </FormGroup>
                                      <FormGroup>
                                          <div className="controls">
                                              { mail1.input }
                                          </div>
                                          <div className="controls">
                                              { mail2.input }
                                          </div>
                                      </FormGroup>
                                  </div>
                                </div>
                              </Col>
                              <Col lg="12" md="12" sm="12">
                                <div className="contact-details">
                                  <div className="contact-icon">	<Icofont icon="wall-clock"/>
                                  </div>
                                  <div className="contact-info">
                                      <FormGroup>
                                          <div className="controls">
                                              { hourlyTitle.input }
                                          </div>
                                      </FormGroup>
                                      <FormGroup>
                                          <div className="controls">
                                              { hourlyday.input }
                                          </div>
                                          <div className="controls">
                                              { hourlytime.input }
                                          </div>
                                          <div className="controls">
                                              { hourlytext.input }
                                          </div>
                                      </FormGroup>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col lg="8">
                          <div className="contact-information">
                            <Row className="row">
                              <Col lg="12" md="12" sm="12">
                                <div className="contact-details">
                                  <div className="contact-info">
                                    <FormGroup>
                                      <Label><h6>Nom de votre société :</h6></Label>
                                        <div className="controls">
                                            <h5>{ title2.input }</h5>
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                      <Label><h6>Titre : </h6></Label>
                                        <div className="controls">
                                            <h2>{ subtitle2.input }</h2>
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                      <Label><h6>Introduction :</h6></Label>
                                        <div className="controls">
                                            { intro.input }
                                        </div>
                                    </FormGroup>
                                  </div>
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
                      <h2>Page "A Propos" et "Home" : </h2>
                    </div>
                  </CardHeader>
                  <CardBody className="contact-card-body">
                    <Container>
                      <Row className="d-flex align-items-center">
                        <Col lg="6" md="4">
                          <div className="video-box">  
                          <div className="video-btn popup-youtube">
                            <img src={require('./../../assets/img/play-button-light.svg')} alt="play button icon" />
                          </div>            
                          <br />                                 
                            <FormGroup>
                              <Label>Titre pour la vidéo :</Label>
                                <div className="controls">
                                  <h3> { videotitle.input }</h3>
                                </div>
                            </FormGroup>      
                            <FormGroup>
                              <Label>URL de la vidéo : </Label>
                                <div className="controls">
                                    { videourl.input }
                                </div>
                            </FormGroup>  
                          </div>
                        </Col>
                        <Col lg="5" md="8">
                          <div className="store-location-opening-hours-box">
                            <div className="contact-opening-hours-title">
                              <FormGroup>
                                  <div className="controls">
                                      { title1.input }
                                  </div>
                              </FormGroup>
                              <FormGroup>
                                  <div className="controls">
                                      { subtitle1.input }
                                  </div>
                              </FormGroup>
                            </div>
                            <Row>
                              <Col md="12">
                                <div className="single-store-location">
                                  <FormGroup>
                                      <div className="controls">
                                          { mail1.input }
                                      </div>
                                  </FormGroup>
                                  <FormGroup>
                                      <div className="controls">
                                          { phone1.input }
                                      </div>
                                  </FormGroup>
                                  <FormGroup>
                                      <div className="controls">
                                          { address.input }
                                      </div>
                                  </FormGroup>
                                </div>
                                <div className="opening-hours-box">
                                  <FormGroup>
                                    <div className="controls">
                                        { hourlyday.input }
                                    </div>
                                    <div className="controls">
                                        { hourlytime.input }
                                    </div>
                                    <div className="controls">
                                        { hourlytext.input }
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
                      <h2>Page "Contact" - formulaire de contact : </h2>
                    </div>
                  </CardHeader>
                  <CardBody className="contact-card-body">
                    <Container>
                      <Row className="align-items-center">
                        <Col lg="12">
                          <div className="contact-information">
                            <Row className="row">
                              <Col lg="12" md="12" sm="12">
                                <div className="contact-details">
                                  <div className="contact-info">
                                    <FormGroup>
                                      <Label><h6>Champ Nom :</h6></Label>
                                        <div className="controls">
                                            { nameForm.input }
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                      <Label><h6>Champ email : </h6></Label>
                                        <div className="controls">
                                            { mailForm.input }
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                      <Label><h6>Champ sujet :</h6></Label>
                                        <div className="controls">
                                            { sujetForm.input }
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                      <Label><h6>Champ message : </h6></Label>
                                        <div className="controls">
                                            { messageForm.input }
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                      <Label><h6>Bouton "envoyer" :</h6></Label>
                                        <div className="controls">
                                            { boutonForm.input }
                                        </div>
                                    </FormGroup>
                                  </div>
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
                      <h2>Bouton appel "Réservation" - Barre de menu : </h2>
                    </div>
                  </CardHeader>
                  <CardBody className="contact-card-body">
                    <Container>
                      <Row className="align-items-center">
                        <Col lg="12">
                          <div className="contact-information">
                            <Row className="row">
                              <Col lg="12" md="12" sm="12">
                                <div className="contact-details">
                                  <div className="contact-info">
                                    <FormGroup>
                                      <Label><h6>Nom du bouton :</h6></Label>
                                        <div className="controls">
                                            { boutonnavbar.input }
                                        </div>
                                    </FormGroup>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        </Row>
                    </Container>
                  </CardBody>
                </Card>
              </CardBody>
              <CardFooter className="contact-card-footer">
                  <DefaultSubmit submitText="Valider" />
              </CardFooter>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
