import React, { useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { modalActions, submitFormActions, loadTableActions } from 'stores';
import { DefaultInput, DefaultSubmit, FileInput } from 'components';
import { toastr } from 'react-redux-toastr';
import { imageUrl } from 'helpers';

const Edit = (props) => {
  useEffect(() => {
    if(props.modal.show === false){
      image.setValue("")
      title.setValue("")
      alt.setValue("")
      url.setValue("")
    }
  });
  const { modal, toggleModal, theme }  = props;
  
  let image = FileInput({ 
      default: modal.row && imageUrl.sponsor + modal.row.image,
      maxSize: "5MB", 
      accepted: ['image/png', 'image/jpeg', 'image/jpg'],
      minWidth: "50",
      maxWidth: "4200",
      minHeight: "50",
      maxHeight: "4200",
    });

  const title = DefaultInput({ 
    default: modal.row ? modal.row.title : '',
    type: "text", 
    required: false,
    custom: true,
    name:"title",
    placeholder:"Titre", 
    autoComplete:"title", 
    errorMessage: "Titre non valable", 
  });
  const alt = DefaultInput({ 
    default: modal.row ? modal.row.alt : '',
    type: "text", 
    required: false,
    custom: true,
    name:"alt",
    placeholder:"Descrption de l'image (obligatoire pour le SEO)", 
    autoComplete:"alt", 
    errorMessage: "Alt non valable", 
  });
  const url = DefaultInput({ 
    default: modal.row ? modal.row.url : '',
    type: "text", 
    required: false,
    custom: true,
    name:"url",
    placeholder:"URL du sponsor", 
    autoComplete:"url", 
    errorMessage: "URL non valable", 
  });

  const modalOpen = (modal.show && modal.context === 'edit') ? true : false;
  const handleSubmit = (event) => {
    let errContext = '';
    
    if (image.upload && image.value === undefined) {
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
      image.value !== '' && body.append('image', image.value[0]) // first image only
      body.append('title', title.value)
      body.append('alt', alt.value)
      body.append('url', url.value)

    let id = modal.row ? modal.row.id : '';
console.log("l id est le : ", id);
    Promise.resolve( props.update(`/sponsor/${id}`, body, true /* third param for status form data */) )
      .then(update => update.status && toggleModal(false))
      .then(() => props.getAll('/sponsor'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Modifer le sponsor </ModalHeader>
        <AvForm id="editCarousel" method="post" onValidSubmit={handleSubmit}>
          <ModalBody>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Image</Label>
                </Col>
                <Col xs="12" md="9">
                  { image.input }
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