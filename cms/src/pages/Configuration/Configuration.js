import React, { useState }  from 'react';
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
  Spinner,
  Collapse, 
  Button
} from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { loadTableActions, submitFormActions } from 'stores';
import { DefaultInput, DefaultSubmit, FileInput } from 'components';
import { toastr } from 'react-redux-toastr';
import { imageUrl } from 'helpers';

const Configuration = (props) => {




  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const toggle1 = () => setIsOpen1(!isOpen1);
  const toggle2 = () => setIsOpen2(!isOpen2);
  const toggle3 = () => setIsOpen3(!isOpen3);
  const toggle5 = () => setIsOpen5(!isOpen5);


  const { data, theme, getAll } = props;
  React.useLayoutEffect(() => { getAll('/configuration') }, [getAll]);

  const title = DefaultInput({
    default: data ? data[0].title : '',
    type: "text",
    required: true,
    name:"title",
    placeholder:"Nom du site internet",
    autoComplete:"title",
    errorMessage: "Nom du site internet non valable",
  });
  const slogan = DefaultInput({
    default: data ? data[0].slogan : '',
    type: "text",
    required: true,
    name:"slogan",
    placeholder:"Slogan du site internet",
    autoComplete:"slogan",
    errorMessage: "Slogan non valable",
  });
  const domain = DefaultInput({
    default: data ? data[0].domain : '',
    type: "text",
    required: true,
    name:"domain",
    placeholder:"Nom de domaine, ex : www.mywebsite.com ou mywebsite.com",
    autoComplete:"domain",
    errorMessage: "Nom de domaine non valable",
  });
  const desc = DefaultInput({
    default: data ? data[0].desc : '',
    type: "text",
    required: true,
    name:"desc",
    placeholder:"Description du site internet",
    autoComplete:"desc",
    errorMessage: "Description non valable",
  });
  const keyword = DefaultInput({
    default: data ? data[0].keyword : '',
    type: "text",
    required: true,
    name:"keyword",
    placeholder:'Mot clé separé d\'une virgule, exemple :"mot clé, mot clé 2, mot clé 3"',
    autoComplete:"keyword",
    errorMessage: "Mot clé non valable",
  });

  const image = FileInput({
    default: data && imageUrl.configuration + data[0].image,
    maxSize: "5MB",
    name:"image",
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "150",
    maxWidth: "4200",
    minHeight: "150",
    maxHeight: "4200",
  });
  const logo1 = FileInput({
    default: data && imageUrl.configuration + data[0].logo1,
    maxSize: "2MB",
    name:"logo1",
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "30",
    maxWidth: "1820",
    minHeight: "30",
    maxHeight: "1820",
  });
  const logo2 = FileInput({
    default: data && imageUrl.configuration + data[0].logo2,
    maxSize: "2MB",
    name:"logo2",
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "30",
    maxWidth: "1820",
    minHeight: "30",
    maxHeight: "1820",
  });
  const logo3 = FileInput({
    default: data && imageUrl.configuration + data[0].logo3,
    maxSize: "2MB",
    name:"logo3",
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "30",
    maxWidth: "1820",
    minHeight: "30",
    maxHeight: "1820",
  });
  const favicon = FileInput({
    default: data && imageUrl.configuration + data[0].favicon,
    maxSize: "1MB",
    name:"favicon",
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "30",
    maxWidth: "1820",
    minHeight: "30",
    maxHeight: "1820",
  });

  const gps_lat = DefaultInput({
    default: data ? data[0].gps_lat : '',
    type: "text",
    name:"gps_lat",
    placeholder:"Coordonnées GPS: latitude",
    autoComplete:"gps_lat",
    errorMessage: "Latitude non valable",
  });
  const gps_lng = DefaultInput({
    default: data ? data[0].gps_lng : '',
    type: "text",
    name:"gps_lng",
    placeholder:"Coordonnées GPS: longitude",
    autoComplete:"gps_lng",
    errorMessage: "Longitude non valable",
  });
  const gps_zoom = DefaultInput({
    default: data ? data[0].gps_zoom : '',
    type: "number",
    name:"gps_zoom",
    placeholder:"Coordonnées GPS: zoom sur la carte",
    autoComplete:"gps_zoom",
    errorMessage: "Valeur du zoom non valable",
  });
  const gps_text = DefaultInput({
    default: data ? data[0].gps_text : '',
    type: "text",
    name:"gps_text",
    placeholder:"Coordonnées GPS: Texte",
    autoComplete:"gps_text",
    errorMessage: "Longitude non valable",
  });
  const googlemap_API_KEY = DefaultInput({
    default: data ? data[0].googlemap_API_KEY : '',
    type: "text",
    name:"googlemap_API_KEY",
    placeholder:"Google Map: YOUR_API_KEY",
    autoComplete:"googlemap_API_KEY",
    errorMessage: "GoogleMap API_KEY non valable",
  });
  const google_gtag_id = DefaultInput({
    default: data ? data[0].google_gtag_id : '',
    type: "text",
    name:"google_gtag_id",
    placeholder:"Google Analytics: Code de suivi, ex: UA_12345678_9",
    autoComplete:"google_gtag_id",
    errorMessage: "Code de suivi non valable",
  });
  const google_trackingID = DefaultInput({
    default: data ? data[0].google_trackingID : '',
    type: "text",
    name:"google_trackingID",
    placeholder:"Google Analytics: ID de mesure, ex: G-XXXXXXXXXX",
    autoComplete:"google_trackingID",
    errorMessage: "ID de mesure non valable",
  });
  const google_captcha_sitekey = DefaultInput({
    default: data ? data[0].google_captcha_sitekey : '',
    type: "text",
    name:"google_captcha_sitekey",
    placeholder:"Google reCaptcha : Site Key",
    autoComplete:"google_captcha_sitekey",
    errorMessage: "Site Key non valable",
  });
  const google_captcha_secretkey = DefaultInput({
    default: data ? data[0].google_captcha_secretkey : '',
    type: "text",
    name:"google_captcha_secretkey",
    placeholder:"Google reCaptcha : Secret Key",
    autoComplete:"google_captcha_secretkey",
    errorMessage: "Secret Key non valable",
  });
  const mail_host = DefaultInput({
    default: data ? data[0].mail_host : '',
    type: "text",
    name:"mail_host",
    placeholder:"Hebergement de messagerie (host) - (obligatoire pour l'envoie des formulaires de contact)",
    autoComplete:"mail_host",
    errorMessage: "Hebergement de messagerie non valable",
  });
  const mail_imap = DefaultInput({
    default: data ? data[0].mail_imap : '',
    type: "number",
    name:"mail_imap",
    placeholder:"Port IMAP",
    autoComplete:"mail_imap",
    min :"100" ,
    max : "999",
    errorMessage: "Port IMAP non valable",
  });
  const mail_pop3 = DefaultInput({
    default: data ? data[0].mail_pop3 : '',
    type: "number",
    name:"mail_pop3",
    placeholder:"Port POP3",
    autoComplete:"mail_pop3",
    errorMessage: "Port POP3 non valable",
  });
  const mail_smtp = DefaultInput({
    default: data ? data[0].mail_smtp : '',
    type: "number",
    name:"mail_smtp",
    placeholder:"Port SMTP (obligatoire pour l'envoie des formulaires de contact)",
    autoComplete:"mail_smtp",
    errorMessage: "Port SMTP non valable",
  });
  const mail_username = DefaultInput({
    default: data ? data[0].mail_username : '',
    type: "mail",
    name:"mail_username",
    placeholder:"Nom d'utilisateur de messagerie : (contact@yourwebsite.com)",
    autoComplete:"mail_username",
    errorMessage: "Nom d'utilisateur non valable",
  });
 
  const mail_password = DefaultInput({
    default: data ? data[0].mail_password : '',
    type: "text",
    name:"mail_password",
    placeholder:"Mot de passe de messagerie",
    autoComplete:"mail_password",
    errorMessage: "Mot de passe non valable",
    id: "myInput"
  });

  const mail_reply = DefaultInput({
    default: data ? data[0].mail_reply : '',
    type: "mail",
    name:"mail_reply",
    placeholder:"Adresse mail auquel vous souhaitez recevoir les mails provenant des utilisateurs",
    autoComplete:"mail_reply",
    errorMessage: "Adresse mail non valable",
  });
  const mail_displayname = DefaultInput({
    default: data ? data[0].mail_displayname : '',
    type: "text",
    name:"mail_displayname",
    placeholder:"Nom visible sur les mail reçu, ex : 'Info monsite.com'",
    autoComplete:"mail_displayname",
    errorMessage: "Nom non valable",
  });
  const facebook_appID = DefaultInput({
    default: data ? data[0].facebook_appID : '',
    type: "number",
    name:"facebook_appID",
    placeholder:"Facebook : Identifiant de l’application (id App)",
    autoComplete:"facebook_appID",
    errorMessage: "ID App non valable",
  });
  const facebook_appSecret = DefaultInput({
    default: data ? data[0].facebook_appSecret : '',
    type: "text",
    name:"facebook_appSecret",
    placeholder:"Facebook : Clé secrète",
    autoComplete:"facebook_appSecret",
    errorMessage: "Clé secrète non valable",
  });
  const facebook_pageID = DefaultInput({
    default: data ? data[0].facebook_pageID : '',
    type: "number",
    name:"facebook_pageID",
    placeholder:"Facebook : ID de la page",
    autoComplete:"facebook_pageID",
    errorMessage: "Page ID non valable",
  });



  const handleSubmit = (event) => {
    let errContext = '';

    if (image.upload && image.value === undefined) {
      errContext = 'L\'image'
    }
    else if (favicon.upload && favicon.value === undefined) {
      errContext = 'Le Facicon'
    }
    else if (logo1.upload && logo1.value === undefined) {
      errContext = 'Le logo 1'
    }
    else if (logo2.upload && logo2.value === undefined)  {
      errContext = 'Le logo 2'
    }
    else if (logo3.upload && logo3.value === undefined){
      errContext = 'Le logo 3'
    }
    else if (title.value === '') {
      errContext = 'Le nom du site internet'
    }else if (domain.value === '') {
      errContext = 'Le domaine du site'
    }

    if (errContext !== '') {
      toastr.error('', errContext+' est obligatoire')
      return;
    }
    let id = data ? data[0].id : '';

    const body = new FormData()

      image.value !== undefined   &&  image.value[0].name !== data[0].image         && body.append('image', image.value[0])
      favicon.value !== undefined &&  favicon.value[0].name !== data[0].favicon     && body.append('favicon', favicon.value[0])
      logo1.value !== undefined   &&  logo1.value[0].name !== data[0].logo1         && body.append('logo1', logo1.value[0])
      logo2.value !== undefined   &&  logo2.value[0].name !== data[0].logo2         && body.append('logo2', logo2.value[0])
      logo3.value !== undefined   &&  logo3.value[0].name !== data[0].logo3         && body.append('logo3', logo3.value[0])
      body.append('title', title.value)
      body.append('slogan', slogan.value)
      body.append('domain', domain.value)
      body.append('desc', desc.value)
      body.append('keyword', keyword.value)
      body.append('gps_lat', gps_lat.value)
      body.append('gps_lng', gps_lng.value)
      body.append('gps_zoom', gps_zoom.value)
      body.append('gps_text', gps_text.value)
      body.append('googlemap_API_KEY', googlemap_API_KEY.value)
      body.append('google_gtag_id', google_gtag_id.value)
      body.append('google_trackingID', google_trackingID.value)
      body.append('google_captcha_sitekey', google_captcha_sitekey.value)
      body.append('google_captcha_secretkey', google_captcha_secretkey.value)
      body.append('mail_host', mail_host.value)
      body.append('mail_imap', mail_imap.value)
      body.append('mail_pop3', mail_pop3.value)
      body.append('mail_smtp', mail_smtp.value)
      body.append('mail_username', mail_username.value)
      body.append('mail_password', mail_password.value)
      body.append('mail_reply', mail_reply.value)
      body.append('mail_displayname', mail_displayname.value)
      body.append('facebook_appID', facebook_appID.value)
      body.append('facebook_pageID', facebook_pageID.value)
      body.append('facebook_appSecret', facebook_appSecret.value)
      for (var pair of body.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }

    Promise.resolve(  
      props.update(`/configuration/${id}`, body, true )
      )
      .then(save => save.status && props.getAll('/configuration'))
      .catch(err => console.log(err))
  }
    return (
      data ?
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card className={ 'card-' + theme }>
                <AvForm id="addConfig" method="post" onValidSubmit={handleSubmit}>

                  <CardHeader>

                    <h5>
                      <i className="fa fa-cogs"></i> Configuration du site internet
                    </h5>

                  </CardHeader>

                  <CardBody>

                    <Card>

                      <CardHeader>

                        <div className="section-title">
                          <h2>Information Basic:</h2>
                        </div>

                      </CardHeader>

                      <CardBody className="contact-card-body">

                        <Container>
                          <Row>
                            <Col lg="12" md="12" sm="12">
                              <div className="about-content">
                                <div className="about-content-text">
                                  <Col lg="12" md="12" sm="12">
                                    <Row>
                                      <Col md="6">  
                                        <FormGroup>
                                            <Label><h6>URL (domain) :</h6></Label>
                                            <div className="controls">
                                                { domain.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                      <Col md="6"> 
                                        <FormGroup>
                                            <Label><h6>Nom du site internet :</h6></Label>
                                            <div className="controls">
                                                { title.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </Col>  
                                  <FormGroup>
                                      <Label><h6>Slogan :</h6></Label>
                                      <div className="controls">
                                          { slogan.input }
                                      </div>
                                  </FormGroup>
                                  <FormGroup>
                                      <Label><h6>Courte description (pour moteur Google) :</h6></Label>
                                      <div className="controls">
                                          { desc.input }
                                      </div>
                                  </FormGroup>
                                  <FormGroup>
                                      <Label><h6>Les mots clés (pour moteur Google)  :</h6></Label>
                                      <div className="controls">
                                          { keyword.input }
                                          <small className="help-block form-text text-primary" >Veuillez utiliser des mots clés pertinents et qui sont réellement présents sur la page d'accueil</small>
                                      </div>
                                  </FormGroup>
                                  <Col lg="12" md="12" sm="12">
                                    <div className="about-image-box">
                                      <Row>
                                        <Col md="12">
                                          <div className="about-img">
                                            <FormGroup className="text-center">
                                              <Label><h6>Image (visible sur google)</h6></Label>
                                              <div className="controls about-img-1">
                                                  { image.input }
                                                <small className="help-block form-text text-center text-warning">Type autorisé :" jpg, jpeg, png" ; max : 5 Mo ; dimension: min 150px max 4200px</small>
                                              </div>
                                            </FormGroup>
                                          </div>
                                        </Col>
                                      </Row>
                                      <Row>
                                      <Col md="3"> 
                                        <div className="about-img">
                                          <FormGroup className="text-center">
                                            <Label><h6>Favicon (icone pour l'onglet de navigateur)</h6></Label>
                                              <div className="controls about-img-1">
                                                  { favicon.input }
                                                <small className="help-block form-text text-center text-warning">Type autorisé :".png" ; max : 1 Mo ; dimension: min 5px max 100px</small>
                                              </div>
                                          </FormGroup> 
                                        </div>
                                      </Col>
                                        <Col md="3">  
                                          <div className="about-img">
                                              <FormGroup className="text-center">
                                                <Label><h6>Logo principale</h6></Label>
                                                <div className="controls about-img-1">
                                                    { logo1.input }
                                                  <small className="help-block form-text text-center text-warning">Type autorisé :".png" ; max : 2 Mo ; dimension: min 30px max 1820px</small>
                                                </div>
                                              </FormGroup> 
                                          </div>
                                        </Col>
                                        <Col md="3">
                                          <div className="about-img"> 
                                            <FormGroup className="text-center">
                                              <Label><h6>Logo secondaire</h6></Label>
                                                <div className="controls about-img-1">
                                                    { logo2.input }
                                                  <small className="help-block form-text text-center text-warning">Type autorisé :".png" ; max : 2 Mo ; dimension: min 30px max 1820px</small>
                                                </div>
                                            </FormGroup> 
                                          </div>
                                        </Col>
                                        <Col md="3">
                                          <div className="about-img">
                                            <FormGroup className="text-center">
                                              <Label><h6>Logo monochrome</h6></Label>
                                                <div className="controls about-img-1">
                                                    { logo3.input }
                                                  <small className="help-block form-text text-center text-warning">Type autorisé :".png" ; max : 2 Mo ; dimension: min 30px max 1820px</small>
                                                </div>
                                            </FormGroup>  
                                          </div>
                                        </Col>
                                      </Row>
                                    </div>
                                  </Col>  
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Container>

                      </CardBody>

                      <CardFooter className="contact-card-footer">
    
                        <DefaultSubmit submitText="Valider" />
    
                      </CardFooter>
                      
                    </Card> 

                    <Card>

                      <CardHeader>

                        <div className="section-title">
                          <h2>Google Analytics:</h2>
                        </div>
                        <Button color="warning" onClick={toggle1} style={{ marginBottom: '1rem' }}>Comment obtenir vos ID's pour Google Analystics ?</Button>
                                   
                      </CardHeader>

                      <CardBody className="contact-card-body">

                        <Container>
                          <Row>
                            <Col lg="12" md="12" sm="12">
                              <div className="about-content">
                                <div className="about-content-text">
                                  <Col lg="12" md="12" sm="12">
                                    <Row>
                                      <Col md="6">  
                                        <FormGroup>
                                            <Label><h6>gtag_id :</h6></Label>
                                            <div className="controls">
                                                { google_gtag_id.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                      <Col md="6"> 
                                        <FormGroup>
                                            <Label><h6>trackingID :</h6></Label>
                                            <div className="controls">
                                                { google_trackingID.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                    <Row>
                                    <Collapse isOpen={isOpen1}>
                                      <Card>
                                        <CardBody className="contact-card-body">
                                            <div className="fusion-text fusion-text-1">
                                            <h2 >Qu'est-ce que l'ID de suivi de Google Analytics</h2>
                                            <p className="intercom-align-left">L'ID de suivi est une chaîne qui ressemble à UA-00000000-0. Cet ID peut s'insérer dans votre site web pour monitoriser toute l'activité depuis le tableau de bord de Google Analytics
                                            . L'intégration ne prend pas plus de 30 secondes et n'exige aucune connaissance en programmation.</p>
                                            <h2>Comment voir votre ID de suivi de Google Analytics</h2>

                                              <ol>
                                                <li>Pour voir votre ID:</li>
                                                <li>Connectez-vous sur <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" >Google Analytics</a></li>
                                                <li>Dépliez l'onglet <strong>Toutes les données du site</strong>. Dans cette fenêtre vous verrez votre ID.;</li>
                                                <div className="intercom-container intercom-align-center"><img src="https://genially-5bbaa8e85593.intercom-attachments-1.com/i/o/168082962/41c6c1110a404892ecb14061/G1_FR.png" alt=""/></div>
                                                <li>Pour copier votre ID vous devez:</li>
                                                <li>Cliquez sur <strong>Administration.</strong></li>
                                                <li>Dans la nouvelle fenêtre, cliquez sur <strong>Configuration du compte.</strong></li>
                                                <div className="intercom-container intercom-align-center"><img src="https://genially-5bbaa8e85593.intercom-attachments-1.com/i/o/168082967/6d86679d62256ec4d3c9ca11/G2_FR.png" alt=""/></div>
                                                <li>Vous pourrez <strong>copier ici votre ID de suivi</strong> et administrer plus de données.</li>
                                              </ol>
                                            </div>
                                        </CardBody>
                                      </Card>
                                    </Collapse>
                                    </Row>
                                  </Col>  
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Container>

                      </CardBody>

                      <CardFooter className="contact-card-footer">
    
                        <DefaultSubmit submitText="Valider" />
    
                      </CardFooter>
                      
                    </Card>

                    <Card>

                      <CardHeader>

                        <div className="section-title">
                          <h2>Google ReCaptcha V2:</h2>
                        </div>
                        <Button color="warning" onClick={toggle2} style={{ marginBottom: '1rem' }}>Comment obtenir les clés ReCaptcha ?</Button>
                                   
                      </CardHeader>

                      <CardBody className="contact-card-body">

                        <Container>
                          <Row>
                            <Col lg="12" md="12" sm="12">
                              <div className="about-content">
                                <div className="about-content-text">
                                  <Col lg="12" md="12" sm="12">
                                    <Row>
                                      <Col md="6">  
                                        <FormGroup>
                                            <Label><h6>Site key :</h6></Label>
                                            <div className="controls">
                                                { google_captcha_sitekey.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                      <Col md="6"> 
                                        <FormGroup>
                                            <Label><h6>Secret key :</h6></Label>
                                            <div className="controls">
                                                { google_captcha_secretkey.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                      </Row>
                                      <Row>
                                      <Collapse isOpen={isOpen2}>
                                        <Card>
                                          <CardBody className="contact-card-body">
                                              <div className="fusion-text fusion-text-1"><h2 >A quoi sert le reCaptcha?&nbsp;</h2>
                                                <p>Pour réduire la quantité de spam, vous pouvez ajouter Google reCAPTCHA aux blocs Formulaire. 
                                                Google reCAPTCHA invite les visiteurs à cocher une case afin de prouver qu’ils ne sont pas des robots avant de pouvoir envoyer leurs informations. </p>
                                                
                                              </div>
                                                <div className="fusion-text fusion-text-1"><h2> Comment obtenir les clés recaptcha? </h2> 
                                                  
                                                <ol>
                                                      <li>Dans le panneau&nbsp;<strong>Paramètres</strong> du site, cliquez sur <strong>Avancé</strong>, puis sur&nbsp;<strong>Clés API externes</strong> et faites défiler la page jusqu'à <strong>Google reCAPTCHA</strong>.</li>
                                                      <li>
                                                      <a href="https://www.google.com/recaptcha/admin/create" target="_blank" rel="noopener noreferrer" >Cliquez sur le lien</a> pour obtenir vos <strong>clés API Google reCAPTCHA</strong>. Le lien s'ouvrira dans un nouvel onglet.</li>
                                                      <li>Cliquez sur <strong>Console d'administration </strong><strong>v3.</strong>
                                                      </li>
                                                      <li>Saisissez un libellé pour vous aider à identifier votre site. Cela peut être l'URL de votre site Web, ou un pseudonyme.</li>
                                                      <li>Sélectionnez <strong>reCAPTCHA V2</strong>. Le CMS FULHESTACK ne prend pas en charge reCAPTCHA V3.</li>
                                                      <li>Cochez la <strong>case «&nbsp;Je ne suis pas un robot&nbsp;»</strong>. Les autres options ne sont pas prises en charge.</li>
                                                      <li>Entrez votre <a href="https://support.squarespace.com/hc/articles/206541717">domaine intégré</a> et cliquez sur l’icône&nbsp;<strong>+</strong>. Utilisez le format&nbsp;<em>votresite.squarespace.com</em><em></em> en excluant <em>https://</em> au début de l’URL.</li>
                                                      <li>Entrez votre domaine personnalisé et cliquez sur l’icône <strong>+</strong>. Répétez cette opération pour chaque domaine personnalisé connecté à votre site, sans oublier de retirer&nbsp;<em>https://</em> au début de chaque domaine.</li>
                                                      <li>Assurez-vous d'avoir ajouté tous les domaines associés à votre site. Si vous ne le faites pas, <a href="https://support.squarespace.com/hc/articles/115013193528#invalid" target="_self">un message d'erreur s'affichera</a>.</li>
                                                  </ol>
                                              </div>
                                          </CardBody>
                                        </Card>
                                      </Collapse>
                                      </Row>
                                  </Col>  
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Container>

                      </CardBody>

                      <CardFooter className="contact-card-footer">
    
                        <DefaultSubmit submitText="Valider" />
    
                      </CardFooter>
                      
                    </Card> 
                    <Card>

                      <CardHeader>

                        <div className="section-title">
                          <h2>Google Map:</h2>
                        </div>
                        
                        <Button color="warning" onClick={toggle3} style={{ marginBottom: '1rem' }}>Comment obtenir une API_KEY ?</Button>        
                                    

                      </CardHeader>

                      <CardBody className="contact-card-body">

                        <Container>
                          <Row>
                            <Col lg="12" md="12" sm="12">
                              <div className="about-content">
                                <div className="about-content-text">
                                  <Col lg="12" md="12" sm="12">
                                    <Row>
                                    <Col md="1">  
                                      <FormGroup>
                                      </FormGroup>
                                    </Col>
                                      <Col md="2">  
                                        <FormGroup>
                                            <Label><h6>Longitude :</h6></Label>
                                            <div className="controls">
                                                { gps_lng.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                      <Col md="2"> 
                                        <FormGroup>
                                            <Label><h6>Latitude :</h6></Label>
                                            <div className="controls">
                                                { gps_lat.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                      <Col md="2"> 
                                        <FormGroup>
                                            <Label><h6>Nom de la localisation :</h6></Label>
                                            <div className="controls">
                                                { gps_text.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                      <Col md="2"> 
                                        <FormGroup>
                                            <Label><h6>Zoom sur la carte :</h6></Label>
                                            <div className="controls">
                                                { gps_zoom.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                      <Col md="2"> 
                                        <FormGroup>
                                            <Label><h6>Google Map API_KEY :</h6></Label>
                                            <div className="controls">
                                                { googlemap_API_KEY.input }
                                            </div>
                                        </FormGroup> 
                                      </Col>
                                      <Col md="1">  
                                        <FormGroup>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                    <Row>
                                    <Collapse isOpen={isOpen3}>
                                      <Card>
                                        <CardBody className="contact-card-body">
                                            
                                              <div className="fusion-text fusion-text-1"><h2> Pour obtenir votre clé d’API </h2> 
                                                
                        
                                              <p>Vous devez disposer d’un compte Gmail.</p>
                                              <p>Pour accéder à L’API de la carte Google Map, se rendre depuis le menu à API Services, puis Tableau de bord.</p>
                                              <p>Puis on clique sur le lien "Activer des API et des services"<br />On doit alors activer des API pour pouvoir afficher la carte Google Maps.<br />Celle qui nous intéresse est la bibliothèque Maps JavaScript API<br />Vous activez alors la bibliothèque </p>
                                              <p>On crée ensuite les identifiants en choisissant "La clé API", le premier choix.<br />La clé API est alors créée. On la copie pour la mettre dans les paramètres de configuration de GIS4</p>
                                              <p>On va ensuite restreindre la clé, pour qu’elle ne fonctionne que pour son site web.<br />Dans "Restrictions relatives aux applications", on clique sur "Référents HTTP (sites web)<br />Et plus bas sur Ajouter un élément et vous entrer l’Url de votre site sous la forme https://*.monsite.fr/*<br />La première étoile est pour prendre en compte les éventuels sous domaines de votre site.<br />La seconde étoile est pour que votre API puisse fonctionner sur toutes les pages de votre site.<br />	Puis on valide en cliquant sur OK</p>
                                              <p><br />On restreint enfin la clé au niveau de l’API en cochant à "Restrictions relatives aux API", restreindre la clé.<br />	Puis on enregistre.</p>
                                              <h3 className="spip">Accès à la facturation</h3>
                                              <p>En retournant dans l’aperçu, on note un message d’avertissement indiquant qu’il n’y a pas d’élément de facturation pour ce projet.<br />On clique alors sur "Accéder à la facturation"<br />On clique alors sur "Associer un compte de facturation". Puis on crée alors son compte de facturation en renseignant les différents champs.</p>
                                              <p>On remarquera que pendant un an, on a un crédit de 300$ offert. Si le traffic sur le site n’est pas très important, il n’y aura rien à payer.</p>
                                              <h3 className="spip">Activer les fonctions du geocoder</h3>
                                              <p>L’API étant créé précédemment ne donne pas accès aux fonctions du geocoder (recherche à partir d’une adresse, récupération de l’adresse à partir des coordonnées) .<br />Il faut activer une nouvelle API.</p>
                                              <p>	On revient depuis le menu, API et services, Tableau de bord.<br />Pour activer l’API de géolocalisation, on clique à nouveau sur le lien "Activer des API et des services".<br />On développe les API de Carte.<br />On clique sur l’API Geocoding API qui convertit les adresses en coordonnées géographiques (géocodage) et on active.</p>
                                              <p>On retourne ensuite dans Identifiants pour ajouter une restriction au niveau de la clé.<br />	A "Restrictions relatives aux API", restreindre la clé, on ajoute Geocoding API</p>
                                              <p>L’activation peut prendre jusqu’à 5 minutes</p>
                                            </div>
                                        </CardBody>
                                      </Card>
                                    </Collapse>
                                    </Row>
                                  </Col>  
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Container>

                      </CardBody>

                      <CardFooter className="contact-card-footer">
    
                        <DefaultSubmit submitText="Valider" />
    
                      </CardFooter>
                      
                    </Card>  

                    <Card>

                      <CardHeader>

                        <div className="section-title">
                          <h2>Configuration service mailing:</h2>
                        </div>
                        
                        
                      </CardHeader>

                      <CardBody className="contact-card-body">

                        <Container>
                          <Row>
                            <Col lg="12" md="12" sm="12">
                              <div className="about-content">
                                <div className="about-content-text">
                                  <Col lg="12" md="12" sm="12">
                                    <Row>
                                      <Col md="3"> 
                                        <FormGroup>
                                            <Label><h6>Host :</h6></Label>
                                            <div className="controls">
                                                { mail_host.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                      <Col md="3">  
                                        <FormGroup>
                                            <Label><h6>Port SMTP :</h6></Label>
                                            <div className="controls">
                                                { mail_smtp.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                      <Col md="3"> 
                                        <FormGroup>
                                            <Label><h6>Port POP3 :</h6></Label>
                                            <div className="controls">
                                                { mail_pop3.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                      <Col md="3"> 
                                        <FormGroup>
                                            <Label><h6>Port IMAP :</h6></Label>
                                            <div className="controls">
                                                { mail_imap.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </Col> 
                                  <Col lg="12" md="12" sm="12">
                                    <Row>
                                      <Col md="6">  
                                        <FormGroup>
                                            <Label><h6>Username :</h6></Label>
                                            <div className="controls">
                                                { mail_username.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                      <Col md="6"> 
                                        <FormGroup>
                                            <Label><h6>Password :</h6></Label>
                                            <div className="controls">
                                                { mail_password.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col lg="12" md="12" sm="12">
                                    <Row>
                                      <Col md="6">  
                                        <FormGroup>
                                            <Label><h6>Nom :</h6></Label>
                                            <div className="controls">
                                                { mail_displayname.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                      <Col md="6"> 
                                        <FormGroup>
                                            <Label><h6>Reply :</h6></Label>
                                            <div className="controls">
                                                { mail_reply.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </Col>     
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Container>

                      </CardBody>

                      <CardFooter className="contact-card-footer">
    
                        <DefaultSubmit submitText="Valider" />
    
                      </CardFooter>
                      
                    </Card>  

                    <Card>

                      <CardHeader>

                        <div className="section-title">
                          <h2>API Facebook:</h2>
                        </div>
                        <Button color="warning" onClick={toggle5} style={{ marginBottom: '1rem' }}>Comment obtenir l'API Facebook ?</Button>
                        
                      </CardHeader>

                      <CardBody className="contact-card-body">

                        <Container>
                          <Row>
                            <Col lg="12" md="12" sm="12">
                              <div className="about-content">
                                <div className="about-content-text">
                                  <Col lg="12" md="12" sm="12">
                                    <Row>
                                      <Col md="4">  
                                        <FormGroup>
                                            <Label><h6>App ID :</h6></Label>
                                            <div className="controls">
                                                { facebook_appID.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                      <Col md="4"> 
                                        <FormGroup>
                                            <Label><h6>App Secret :</h6></Label>
                                            <div className="controls">
                                                { facebook_appSecret.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                      <Col md="4"> 
                                        <FormGroup>
                                            <Label><h6>ID de la page :</h6></Label>
                                            <div className="controls">
                                                { facebook_pageID.input }
                                            </div>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                    <Row>
                                    <Collapse isOpen={isOpen5}>
                                      <Card>
                                        <CardBody className="contact-card-body">
                                            <div className="fusion-text fusion-text-1"><h2 >Comment créer un APP ID Facebook:&nbsp;</h2>
                                              <ol>
                                                <li>Aller à <a  target="_blank" rel="noopener noreferrer" href="https://developers.facebook.com/?locale=fr_FR">developers.facebook.com</a></li>
                                                <li>Aller en haut à droite “<strong>Connexion</strong>” avec votre identifiant et mot de passe Facebook</li>
                                                <li>Aller en haut à droite “<strong>Mes applications</strong>“/ + <strong>Ajouter une application</strong></li>
                                                <li>Mettre un <strong>nom d’usage</strong> (titre du site web ou nom de compagnie par exemple)</li>
                                                <li>Sélectionnez un scénario &gt; en bas à droite, cliquer sur le bouton&nbsp;<strong>ignorer</strong></li>
                                                <li>À droite en bas de Clé secrète &gt; <strong>Namespace</strong> : Inscrire entre 7 et 20 lettres sans accent ni espace</li>
                                                <li>Domaines de l’app &gt; <strong>Adresse complète du site web</strong> (http…)</li>
                                                <li><strong>Choisissez une catégorie</strong></li>
                                                <li>En bas complètement, cliquer sur <strong>+ Ajouter une plate-forme</strong> et sélectionner “<strong>Site Web</strong>“</li>
                                                <li>Ensuite plus haut, <strong>mettre les infos de base demandées</strong> (courriel, adresse postale, ville, province ou état, CP, Pays)</li>
                                                <li><strong>Enregistrer</strong> les modifications en bas à droite</li>
                                                <li>Cliquer en haut le bouton “<strong>désactivé</strong>” pour le mettre “<strong>actif</strong>“</li>
                                                <li>Aller à gauche “<strong>Tableau de bord - Paramètres - Général</strong>”</li>
                                                <li>Copier/coller <strong>"l'identifiant de l'application"</strong> et collez-le dans le champ <strong>App ID</strong></li>
                                                <li>Faites de méme pour la <strong>"Clé secrète"</strong> et collez-le dans le champ <strong>App secret</strong></li>
                                              </ol>
                                                <Col lg="12" md="12" sm="12">
                                                  <Row>
                                                    <Col md="6">  
                                                    <a  target="_blank" rel="noopener noreferrer" href="https://developers.facebook.com/docs/development/" className="float-left"> Documentations</a>
                                                    </Col>
                                                    <Col md="6"> 
                                                      <a  target="_blank" rel="noopener noreferrer" href="https://developers.facebook.com/docs/development/register" className="float-right">S'inscrire et créer une API</a>
                                                    </Col>
                                                  </Row>
                                                </Col>
                                            </div>
                                            <div className="fusion-text fusion-text-1"><h2 >Pour trouver l’ID de votre Page :&nbsp;</h2>
                                              <ol>
                                                <li>Dans votre fil d’actualité, cliquez sur <strong>Pages</strong> dans le menu de gauche.</li>
                                                <li>Cliquez sur le nom de votre Page pour y accéder.</li>
                                                <li>Cliquez sur <strong>À propos</strong> en haut de votre Page. Si vous ne voyez pas cette option, cliquez sur <strong>Plus</strong>.</li>
                                                <li>Faites défiler la page vers le bas pour trouver l’ID de votre Page en dessous de la section <strong>Plus d’informations</strong>.</li>
                                              </ol>
                                            </div>
                                        </CardBody>
                                      </Card>
                                    </Collapse>
                                    </Row>
                                  </Col>  
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Container>

                      </CardBody>

                      <CardFooter className="contact-card-footer">
    
                        <DefaultSubmit submitText="Valider" />
    
                      </CardFooter>
                      
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
          <center>
            <Spinner color="primary" style={{ width: '3rem', height: '3rem' }}  />
          </center>
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

export default connect(mapStateToProps, mapDispatchToProps)(Configuration)




