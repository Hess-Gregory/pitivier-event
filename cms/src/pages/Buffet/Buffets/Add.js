import React, { useEffect,  useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { modalActions, submitFormActions, loadTableActions } from 'stores';
import { DefaultInput,  DefaultSelect, DefaultSubmit, FileInput, TextEditor } from 'components';
import { toastr } from 'react-redux-toastr';

const Add = (props) => {

const [data, setData] = useState([]);

useEffect(() => {
  if(props.modal.show === false){
        name.setValue("")
        text.setValue("")
        price.setValue("")
        unite.setValue("")
        image.setValue("")
        alt.setValue("")
        visible.setValue("")
        cardBuffetId.setValue("")


  }
    const fetchBusinesses = () => {
      const API_URL = process.env.REACT_APP_API_URL;
      return fetch(API_URL + 'cardbuffet', {method: "GET"})
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

 fetchBusinesses();
 // eslint-disable-next-line
}, []);

  const { modal, toggleModal, theme }  = props;

  const image = FileInput({ 
    maxSize: "2MB", 
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "200",
    maxWidth: "2000",
    minHeight: "200",
    maxHeight: "2000",
  });

  const alt = DefaultInput({ 
    type: "text", 
    //required: (image.upload && image.value === '')? false: true,
    required: false,
    placeholder:"Description de l'image (Obligatoire pour le réferencement)", 
    name:"alt",
    errorMessage: "Description de l'image invalable", 
  });

  const name =  DefaultInput({ 
    type:"text", 
    required: true,
    name:"name",
    placeholder:"Nom", 
    autoComplete:"name", 
    errorMessage: "Nom incorrect",
  });
  

  const text = TextEditor();

  const price = DefaultInput({ 
    type:"number", 
    min:"0.00" ,
    max:"10000.00" ,
    step:"0.01" ,
    required: false,
    placeholder:"Prix", 
    name:"price",
    errorMessage: "Prix incorrect", 
  });

  const unite = DefaultInput({ 
    type:"text", 
    required: false,
    placeholder:"Prix par", 
    name:"unite",
    errorMessage: "Prix par ... incorrect", 
  });
  
  
  const visible = DefaultInput({ 
    default: true,
    type:"checkbox", 
    required: false,
    placeholder:"Visibilité", 
    name:"visible",
    errorMessage: "Visibilité incorrect", 
  });

  const defaultSelect = {}

  if(data.length){
    const selected  = data.map(function(val, index){
      return {key:index, value:val.id, label: val.title};
    })
    defaultSelect.options = selected
  }
  const option = defaultSelect.options

  const cardBuffetId = DefaultSelect(
    { 
    option,
    options: [
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
    name:"cardBuffetId"
  }
  );

  const modalOpen = (modal.show && modal.context === 'add') ? true : false;
  const handleSubmit = (event) => {
    let errContext = '';
    //const pondError = 8;
    // if (image.value === "" || (image.pond && image.pond.status === pondError)) {
    //   errContext = 'image'
    // } 
    // else 
    // if (alt.value === '' || alt.value === '<p><br></p>') {
    //   errContext = 'Description de l\'image'
    // } else 
    if (name.value === '' || name.value === '<p><br></p>') {
      errContext = 'Nom'
    } else if (text.value === '' || text.value === '<p><br></p>') {
      errContext = 'Description'
    }  else if (cardBuffetId.value === '' || cardBuffetId.value === '<p><br></p>') {
      errContext = 'Choix de la carte'
    } 

    if (errContext !== '') {
      toastr.error('', errContext+' est obligatoire')
      return;
    }
    const body = new FormData()
    // body.append('image', image.value[0]) // first image only
    // body.append('alt', alt.value)
    body.append('name', name.value)
    body.append('text', text.value)
    if(price.value === ''){
      body.append('price', price.value)
    }
    else{
    body.append('price', price.value)
    }
    body.append('price', price.value)
    body.append('unite', unite.value)
    body.append('visible', visible.value)
    body.append('cardBuffetId', cardBuffetId.value)

    Promise.resolve( 
      props.save('/buffet', body, true ) )
      .then(save => save.status && toggleModal(false))
      .then(() => props.getAll('/buffet'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Ajouter un buffet </ModalHeader>
        <AvForm id="addBuffet" method="post" onValidSubmit={handleSubmit}>
          <ModalBody>
              {/*<FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Image</Label>
                </Col>
                <Col xs="12" md="9">
                  { image.input }
                  <small className="help-block form-text text-muted">allowed type: jpg, jpeg, png; max: 2mb; dimension: width and height minimum 200 maximum 2000</small>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                <Label htmlFor="text-input" className="text-danger"> Description de l'image (SEO - Si vous avez ajouté une image, ce champ est OBLIGATOIRE pour un bon reférencement Google)</Label>
                </Col>
                <Col xs="12" md="9">
                  { alt.input }
                </Col>
              </FormGroup>  */}
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Nom</Label>
                </Col>
                <Col xs="12" md="9">
                  { name.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Descrption</Label>
                </Col>
                <Col xs="12" md="9">
                  { text.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Prix</Label>
                </Col>
                <Col xs="12" md="9">
                  { price.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Prix par</Label>
                </Col>
                <Col xs="12" md="9">
                  { unite.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Carte des menus</Label>
                </Col>
                <Col xs="12" md="9">
                  { cardBuffetId.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input" className="switch">Visibilité
                  </Label>
                </Col>
                <Col xs="12" md="9">
                  { visible.input } 
                  &emsp;&emsp;
                  (Décochez la case pour le cacher du site)<br/>
                </Col>
              </FormGroup>
        </ModalBody>
        <ModalFooter>
          <DefaultSubmit submitText="Valider" cancelText="Quitter" />
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
