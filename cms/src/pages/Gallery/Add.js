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
      title.setValue("")
      url.setValue("")
      desc.setValue("")
      image.setValue("")      
    }
  });

  const { modal, toggleModal, theme }  = props;

  const title = DefaultInput({ 
    type: "text", 
    required: true,
    name:"title",
    placeholder:"Title", 
    errorMessage: "Invalid Title", 
  });

  const url = DefaultInput({ 
    type: "text", 
    required: true,
    name:"url",
    placeholder:"URL", 
    errorMessage: "Invalid URL", 
  });

  const image = FileInput({ 
    maxSize: "2MB", 
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "400",
    maxWidth: "1000",
    minHeight: "400",
    maxHeight: "1000",
  });

  const desc = DefaultInput({ 
    type: "textarea", 
    required: true,
    name:"desc",
    placeholder:"Description", 
    autoComplete:"desc", 
    errorMessage: "Invalid Description", 
  });

  

  const modalOpen = (modal.show && modal.context === 'add') ? true : false;
  const handleSubmit = (event) => {
    const pondError = 8;
    
    if (image.value === "" || (image.pond && image.pond.status === pondError)) {
      toastr.error('Image is required')
      return;
    }

    const body = new FormData()
      body.append('title', title.value)
      body.append('url', url.value)
      body.append('image', image.value[0]) // first image only
      body.append('desc', desc.value)
      
    Promise.resolve( props.save('/gallery', body, true /* third param for status form data */) )
      .then(save => save.status && toggleModal(false))
      .then(() => props.getAll('/gallery'))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Add Gallery </ModalHeader>
        <AvForm id="addGallery" method="post" onValidSubmit={handleSubmit}>
          <ModalBody>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Image</Label>
                </Col>
                <Col xs="12" md="9">
                  { image.input }
                  <small className="help-block form-text text-muted">allowed type: jpg, jpeg, png; max: 2mb; min width and height: 400px, max width and height: 1000px</small>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Title</Label>
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
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Description</Label>
                </Col>
                <Col xs="12" md="9">
                  { desc.input }
                </Col>
              </FormGroup>
        </ModalBody>
        <ModalFooter>
          <DefaultSubmit submitText="Submit" cancelText="Cancel" />
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