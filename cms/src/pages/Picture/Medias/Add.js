import React, { useEffect,  useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { modalActions, submitFormActions, loadTableActions } from 'stores';
import { DefaultInput, DefaultCheckboxes, DefaultSubmit, FileInput } from 'components';

const Add = (props) => {

const [data, setData] = useState([]);

useEffect(() => {
  if(props.modal.show === false){
        image.setValue("")
        alt.setValue("")
        // visible.setValue("")
        galleryId.setValue("")




  }
        const fetchBusinesses = () => {
          const API_URL = process.env.REACT_APP_API_URL;
          return fetch(API_URL + 'gallery', {method: "GET"})
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
}, []) 

  const { modal, toggleModal, theme }  = props;

  const image = FileInput({ 
    maxSize: "5MB", 
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "150",
    maxWidth: "4200",
    minHeight: "150",
    maxHeight: "4200",
  });
  
  const alt = DefaultInput({ 
    type: "text", 
    //required: (image.upload && image.value !== undefined)? true: false,
    placeholder:"Description de l'image (Obligatoire pour le réferencement)", 
    name:"alt",
    errorMessage: "Description de l'image invalable", 
  });
  
  // const visible = DefaultInput({ 
  //   default: true,
  //   type:"checkbox", 
  //   required: false,
  //   placeholder:"Visibilité", 
  //   name:"visible",
  //   errorMessage: "Visibilité incorrect", 
  // });

              const defaultSelect = {}

              if(data.length){
                  console.log('=====> object', data)
                const selected  = data.map(function(val, index){
                  const id = index + 1
                  return {key:index, value:id, label: val.name};
                })
                defaultSelect.options = selected
              }
              const option = defaultSelect.options

              const galleryId = DefaultCheckboxes(
                { 
                option,
                options: [
                  // { value: 'buffets', label: 'Buffets' },
                  // { value: 'galerie', label: 'Galerie' },
                  // { value: 'locations', label: 'Locations' },
                  // { value: 'evenements', label: 'Evenements' },
                  // { value: 'blog', label: 'Blog' },
                  // { value: 'blogdetail', label: 'Blog détail' },
                  // { value: 'contact', label: 'Contactez-nous' },
                  // { value: 'terms', label: 'Conditions générales' },
                  // { value: 'privacy', label: 'RGPD' }
                ],
                name:"galleryId",
                multiple: true,
                inline: true
              }
              );
  const modalOpen = (modal.show && modal.context === 'add') ? true : false;
  const handleSubmit = (event) => {
// console.log('event:', event)
    // let errContext = '';
    // const pondError = 8;
    // if (image.value === "" || (image.pond && image.pond.status === pondError)) {
    //   toastr.error('L\'Image est obligatoire')
    //   return;
    //  } 
    // // else 
    // if (alt.value === '' || alt.value === '<p><br></p>') {
    //   errContext = 'Description de l\'image'
    // } else if (name.value === '' || name.value === '<p><br></p>') {
    //   errContext = 'Nom'
    // } else if (text.value === '' || text.value === '<p><br></p>') {
    //   errContext = 'Description'
    // }  else if (cardId.value === '' || cardId.value === '<p><br></p>') {
    //   errContext = 'Choix de la carte'
    // } 

    // if (errContext !== '') {
    //   toastr.error('', errContext+' est obligatoire')
    //   return;
    // }
    const newGallId = galleryId.value
    
    const newGalleryId = newGallId.toString().split(',')
    const body = new FormData()
      body.append('image', image.value[0]) // first image only
      body.append('alt', alt.value)
      // body.append('visible', visible.value)
      body.append('galleryId', newGalleryId)
    Promise.resolve( props.save('/media', body, true ) )
      .then(save => save.status && toggleModal(false))
      .then(() => props.getAll('/media'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Ajouter une image </ModalHeader>
        <AvForm id="addMedia" method="post" onValidSubmit={handleSubmit}>
          <ModalBody>
              <FormGroup row>
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
              </FormGroup> 
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Selectionner la ou les gallerie(s)</Label>
                </Col>
                <Col xs="12" md="9">
                  { galleryId.input }
                </Col>
              </FormGroup>
             {/* <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input" className="switch">Visibilité
                  </Label>
                </Col>
                <Col xs="12" md="9">
                  { visible.input } 
                  &emsp;&emsp;
                  (Décochez la case pour le cacher du site)<br/>
                </Col>
             </FormGroup>*/}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)