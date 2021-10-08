import React, { useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label, Card, CardHeader, CardBody } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { modalActions, submitFormActions, loadTableActions } from 'stores';
import { DefaultInput, DefaultSelect, DefaultSubmit, FileInput, TextEditor } from 'components';
import { toastr } from 'react-redux-toastr';

const Add = (props) => {
  useEffect(() => {
    if(props.modal.show === false){
      image.setValue("")
      page.setValue("")
      tagdesc.setValue("")
      tagline.setValue("")
      btn1name.setValue("")
      btn1url.setValue("")
      btn2name.setValue("")
      btn2url.setValue("")
      alt.setValue("")
    }
  });

  const { modal, toggleModal, theme }  = props;

  const image = FileInput({ 
    maxSize: "5MB", 
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "192",
    maxWidth: "2840",
    minHeight: "128",
    maxHeight: "2560",
  });
  
  const alt = DefaultInput({ 
    type: "text", 
    required: true,
    placeholder:"Description de l'image (Obligatoire pour le réferencement)", 
    name:"alt",
    errorMessage: "Description de l'image invalable", 
  });

  const page = DefaultSelect({
    options: [
      { value: 'home', label: 'Accueil' },
      { value: 'about', label: 'A Propos' },
      { value: 'cartes', label: 'Cartes' },
      { value: 'buffets', label: 'Buffets' },
      { value: 'galerie', label: 'Galerie' },
      { value: 'locations', label: 'Locations' },
      { value: 'evenements', label: 'Evenements' },
      { value: 'blog', label: 'Blog' },
      { value: 'blogdetail', label: 'Blog détail' },
      { value: 'contact', label: 'Contactez-nous' },
      { value: 'terms', label: 'Conditions générales' },
      { value: 'privacy', label: 'RGPD' }
    ],
    name:"page",
  });

  const tagdesc = TextEditor();

  const tagline = DefaultInput({ 
    type: "text", 
    required: false,
    placeholder:"Titre de la page", 
    name:"tagline",
    errorMessage: "Titre invalable", 
  });

  const btn1name = DefaultInput({ 
    type: "text", 
    required: false,
    placeholder:"Nom du premier bouton", 
    name:"btn1name",
    errorMessage: "Nom du premier bouton invalable", 
  });

  const btn1url = DefaultInput({ 
    type: "text", 
    required: false,
    placeholder:"URL du premier bouton", 
    name:"btn1url",
    errorMessage: "URL du premier bouton invalable", 
  });

  const btn2name = DefaultInput({ 
    type: "text", 
    required: false,
    placeholder:"Nom du deuxième bouton", 
    name:"btn2name",
    errorMessage: "Nom du deuxième bouton invalable", 
  });

  const btn2url = DefaultInput({ 
    type: "text", 
    required: false,
    placeholder:"URL du deuxième bouton", 
    name:"btn2url",
    errorMessage: "URL du deuxième bouton invalable", 
  });


  const modalOpen = (modal.show && modal.context === 'add') ? true : false;
  const handleSubmit = (event) => {
    let errContext = '';
    const pondError = 8;
    if (image.value === "" || (image.pond && image.pond.status === pondError)) {
      errContext = 'Image'
    } else if (alt.value === '' || alt.value === '<p><br></p>') {
      errContext = 'Description de l\'image'
    }   else if (tagline.value === '') {
      errContext = 'Tagline'
    } else if (tagdesc.value === '' || tagdesc.value === '<p><br></p>') {
      errContext = 'Tag Description'
    }

    if (errContext !== '') {
      toastr.error('', errContext+' is required')
      return;
    }

    const body = new FormData()
      body.append('image', image.value[0]) // first image only
      body.append('page', page.value)
      body.append('tagline', tagline.value)
      body.append('tagdesc', tagdesc.value)
      body.append('alt', alt.value)
      body.append('btn1name', btn1name.value)
      body.append('btn1url', btn1url.value)
      body.append('btn2name', btn2name.value)
      body.append('btn2url', btn2url.value)

    const checkExist = {
      "page": page.value
    }

    Promise.resolve( props.exist('/header/exist', checkExist) )
      .then(res => res.exist === false ? props.save('/header', body, true) : Promise.reject())
      .then(save => save.status && toggleModal(false))
      .then(() => props.getAll('/header'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Add Header </ModalHeader>
        <AvForm id="addHeader" method="post" onValidSubmit={handleSubmit}>
          <ModalBody>
          <Card className={ 'card-' + theme }>
            <CardHeader className={"Card-"+theme}>
              <h5 style={{ textDecoration: 'underline black' }}>Page : Choix de la page, Titre et description</h5>
            </CardHeader>
            <CardBody className={"modal-"+theme}>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Page</Label>
                </Col>
                <Col xs="12" md="9">
                  { page.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Titre de la page</Label>
                </Col>
                <Col xs="12" md="9">
                  { tagline.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Courte description</Label>
                </Col>
                <Col xs="12" md="9">
                  { tagdesc.input }
                </Col>
              </FormGroup>
            </CardBody>
          </Card>
          <Card className={ 'card-' + theme }>
          <CardHeader>
          <h5 style={{ textDecoration: 'underline black' }}>Image de l'en-téte : Choix de l'image' et sa description</h5>
          
          </CardHeader>
          <CardBody>
               <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input" style={{ textDecoration: 'underline black' }}>Image</Label>
                </Col>
                <Col xs="12" md="9">
                  { image.input }
                  <small className="help-block form-text text-muted">allowed type: jpg, jpeg, png; max: 2mb; dimension: 1920x871</small>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">(SEO - OBLIGATOIRE) Description de l'image</Label>
                </Col>
                <Col xs="12" md="9">
                  { alt.input }
                </Col>
              </FormGroup>         
          </CardBody>
        </Card>
        <Card className={ 'card-' + theme }>
        <CardHeader>
        <h5 style={{ textDecoration: 'underline black' }}>Boutons : Nom des boutons et leurs URL</h5>
        
        </CardHeader>
        <CardBody>
                <FormGroup row>
                <Col md="12">
                  <Label htmlFor="text-input" style={{ textDecoration: 'underline black' }}>Bouton 1</Label>
                </Col>
                <Col xs="12" md="6">
                <Label htmlFor="text-input">Nom</Label>
                  { btn1name.input }
                </Col>
                <Col xs="12" md="6">
                <Label htmlFor="text-input">URL</Label>
                  { btn1url.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="12">
                  <Label htmlFor="text-input" style={{ textDecoration: 'underline black' }}>Bouton 2</Label>
                </Col>
                <Col xs="12" md="6">
                <Label htmlFor="text-input">Nom</Label>
                  { btn2name.input }
                </Col>
                <Col xs="12" md="6">
                <Label htmlFor="text-input">URL</Label>
                  { btn2url.input }
                </Col>
              </FormGroup>      
        </CardBody>
      </Card>



        </ModalBody>
        <ModalFooter>
          <DefaultSubmit submitText="Valider" cancelText="Annuler" />
        </ModalFooter>
         </AvForm>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal,
    theme: state.theme.theme
  }
}

const mapDispatchToProps = {
  toggleModal: modalActions.toggle,
  getAll: loadTableActions.getAll,
  save: submitFormActions.save,
  exist: submitFormActions.exist
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)