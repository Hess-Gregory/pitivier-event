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
      title.setValue("")
      url.setValue("")
      desc.setValue("")
      image.setValue("")    
    }
  });
  const { modal, toggleModal, theme }  = props;
  
  const title = DefaultInput({ 
    default: modal.row ? modal.row.title : '',
    type: "text", 
    required: true,
    name:"title",
    placeholder:"Title", 
    errorMessage: "Invalid Title", 
  });

  const url = DefaultInput({ 
    default: modal.row ? modal.row.url : '',
    type: "text", 
    required: true,
    name:"url",
    placeholder:"URL", 
    errorMessage: "Invalid URL", 
  });

  const image = FileInput({ 
    default: modal.row && imageUrl.gallery + modal.row.image,
    maxSize: "2MB", 
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "400",
    maxWidth: "1000",
    minHeight: "400",
    maxHeight: "1000",
  });

  const desc = DefaultInput({ 
    default: modal.row ? modal.row.desc : '',
    type: "textarea", 
    required: true,
    name:"desc",
    placeholder:"Description", 
    autoComplete:"desc", 
    errorMessage: "Invalid Description", 
  });

  const modalOpen = (modal.show && modal.context === 'edit') ? true : false;
  const handleSubmit = (event) => {    
    if (image.upload && image.value === undefined) {
      toastr.error('Image is required')
      return;
    }

    const body = new FormData()
      image.value !== '' && body.append('image', image.value[0]) // first image only
      body.append('title', title.value)
      body.append('url', url.value)
      body.append('desc', desc.value)

    let id = modal.row ? modal.row.id : '';

    Promise.resolve( props.update(`/gallery/${id}`, body, true /* third param for status form data */) )
      .then(update => update.status && toggleModal(false))
      .then(() => props.getAll('/gallery'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Edit Gallery </ModalHeader>
        <AvForm id="editCarousel" method="post" onValidSubmit={handleSubmit}>
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
  update: submitFormActions.update

}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)