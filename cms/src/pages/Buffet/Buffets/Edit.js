import React, { useEffect,  useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { modalActions, submitFormActions, loadTableActions } from 'stores';
import { DefaultInput, DefaultSelect, DefaultSubmit, FileInput, TextEditor } from 'components';
import { toastr } from 'react-redux-toastr';
import { imageUrl } from 'helpers';

const Edit = (props) => {
  
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
  
  let image = FileInput({ 
      default: modal.row && imageUrl.Buffet + modal.row.image,
      maxSize: "2MB", 
      accepted: ['image/png', 'image/jpeg', 'image/jpg'],
      minWidth: "500",
      maxWidth: "2000",
      minHeight: "500",
      maxHeight: "2000",
    });  

let imageExist = ''


if(modal.row){
  if(modal.row.image  === '' ){
    imageExist = false
  }else{
    imageExist = true
  }
}
// modal.row.image ? true : false
    const alt = DefaultInput({ 
      default: modal.row ? modal.row.alt : '',
      type: "text", 
      required: (imageExist || (image.upload && image.value !== undefined))? true:false,
      placeholder:"Description de l'image (Obligatoire pour le réferencement)", 
      name:"alt",
      errorMessage: "Description de l'image invalable", 
    });

  const name = DefaultInput({ 
    default: modal.row ? modal.row.name : '',
    type:"text", 
    required: true,
    custom: true,
    name:"name",
    placeholder:"Nom", 
    autoComplete:"name", 
    errorMessage: "Nom incorrect", 
  });

  const text = TextEditor({
    default: modal.row ? modal.row.text : '',
  });

  const price = DefaultInput({ 
    default: modal.row ? modal.row.price : '',
    type:"number", 
    min:"0.00" ,
    max:"10000.00" ,
    required: false,
    custom: true,
    name:"price",
    placeholder:"Prix", 
    autoComplete:"price", 
    errorMessage: "Prix incorrect", 
  });

  const unite = DefaultInput({ 
    default: modal.row ? modal.row.unite : '',
    type: "text", 
    required: false,
    custom: true,
    name:"unite",
    placeholder:"Prix par", 
    autoComplete:"unite", 
    errorMessage: "Prix par ... incorrect", 
  });

  const visible = DefaultInput({ 
    default: modal.row ? modal.row.visible : '',
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
    name:"cardBuffetId",
    selected: ( modal.row && modal.row.cardBuffetId !== null) ?
    modal.row.cardBuffetId 
    : 
    ''
    ,
  }
  );

  const modalOpen = (modal.show && modal.context === 'edit') ? true : false;
  const handleSubmit = (event) => {
    let errContext = '';
    
    // if (image.upload && image.value === undefined) {
    //   errContext = 'Image'
    // } else if (alt.value === '' || alt.value === '<p><br></p>') {
    //   errContext = 'Description de l\'image'
    // } 
    // else 
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
      // image.value !== '' && body.append('image', image.value[0]) // first image only
      
      // body.append('alt', alt.value)
      body.append('name', name.value)
      body.append('text', text.value)
      if(price.value === ''){
        body.append('price', price.value)
      }else{
      body.append('price', price.value)
      }
      body.append('price', price.value)
      body.append('unite', unite.value)
      body.append('visible', visible.value)
      body.append('cardBuffetId', cardBuffetId.value)
    let id = modal.row ? modal.row.id : '';

    Promise.resolve( props.update(`/buffet/${id}`, body, true /* third param for status form data */) )
      .then(update => update.status && toggleModal(false))
      .then(() => props.getAll('/buffet'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Modifier un buffet </ModalHeader>
        <AvForm id="editBuffet" method="post" onValidSubmit={handleSubmit}>
          <ModalBody>
          {/*<FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Image</Label>
            </Col>
            <Col xs="12" md="9">
              { image.input }
              <small className="help-block form-text text-muted">allowed type: jpg, jpeg, png; max: 2mb; dimension: width and height minimum 500 maximum 2000</small>
            </Col>
          </FormGroup> 
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input" className="text-danger"> Description de l'image (SEO - Si vous avez ajouté une image, ce champ est OBLIGATOIRE pour un bon reférencement Google)</Label>
            </Col>
            <Col xs="12" md="9">
              { alt.input }
            </Col>
          </FormGroup> */} 
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
  update: submitFormActions.update

}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)