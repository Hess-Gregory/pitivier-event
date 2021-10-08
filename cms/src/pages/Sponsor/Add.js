import React, { useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { modalActions, submitFormActions, loadTableActions } from 'stores';
import { DefaultInput, DefaultSubmit, FileInput } from 'components';
import { toastr } from 'react-redux-toastr';

const Add = (props) => {
  useEffect(() => {
    if(props.modal.show === false){
      image.setValue("")
      title.setValue("")
      alt.setValue("")
      url.setValue("")
    }
  });

  const { modal, toggleModal, theme }  = props;

  const image = FileInput({ 
    maxSize: "5MB", 
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "50",
    maxWidth: "4200",
    minHeight: "50",
    maxHeight: "4200",
  });


  const title = DefaultInput({ 
    type: "text", 
    required: false,
    name:"title",
    placeholder:"Titre", 
    errorMessage: "Titre non valable", 
  });
  const alt = DefaultInput({ 
    type: "text", 
    required: false,
    name:"alt",
    placeholder:"Descrption de l'image (obligatoire pour le SEO)", 
    errorMessage: "Alt non valable", 
  });
  const url = DefaultInput({ 
    type: "text", 
    required: false,
    name:"url",
    placeholder:"URL du sponsor", 
    errorMessage: "URL non valable", 
  });

  const modalOpen = (modal.show && modal.context === 'add') ? true : false;
  const handleSubmit = (event) => {
    let errContext = '';
    const pondError = 8;
    
    if (image.value === "" || (image.pond && image.pond.status === pondError)) {
      errContext = 'Image'
    }else if (title.value === '') {
      errContext = 'Titre'
    }else if (url.value === '') {
      errContext = 'Alt'
    }else if (alt.value === '') {
      errContext = 'URL'
    }

    if (errContext !== '') {
      toastr.error('', errContext+' est obligatoire')
      return;
    }

    const body = new FormData()
      body.append('image', image.value[0]) // first image only
      body.append('title', title.value)
      body.append('alt', alt.value)
      body.append('url', url.value)

    Promise.resolve( props.save('/sponsor', body, true /* third param for status form data */) )
      .then(save => save.status && toggleModal(false))
      .then(() => props.getAll('/sponsor'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Ajouter un sponsor </ModalHeader>
        <AvForm id="addCarousel" method="post" onValidSubmit={handleSubmit}>
          <ModalBody>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Image</Label>
                </Col>
                <Col xs="12" md="9">
                  { image.input }
                  <small className="help-block form-text text-muted">allowed type: jpg, jpeg, png; max: 2mb; dimension: 1920x871</small>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Descrption de l'image (Alt)</Label>
                </Col>
                <Col xs="12" md="9">
                  { alt.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Titre</Label>
                </Col>
                <Col xs="12" md="9">
                  { title.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">URL</Label>
                </Col>
                <Col xs="12" md="9">
                  { url.input }
                </Col>
              </FormGroup>
        </ModalBody>
        <ModalFooter>
          <DefaultSubmit submitText="Valider" cancelText="QUitter" />
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