import React, { useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { modalActions, submitFormActions, loadTableActions } from 'stores';
import { DefaultInput, DefaultSubmit, FileInput, TextEditor } from 'components';
import { toastr } from 'react-redux-toastr';
import { imageUrl } from 'helpers';

const Edit = (props) => {
  useEffect(() => {
    if(props.modal.show === false){
      image.setValue("")
      content.setValue("")
      title.setValue("")
    }
  });
  const { modal, toggleModal, theme }  = props;
  
  let image = FileInput({ 
      default: modal.row && imageUrl.blog + modal.row.image,
      maxSize: "2MB", 
      accepted: ['image/png', 'image/jpeg', 'image/jpg'],
      minWidth: "500",
      maxWidth: "2000",
      minHeight: "500",
      maxHeight: "2000",
    });

  const content = TextEditor({
    default: modal.row ? modal.row.content : '',
  });

  const title = DefaultInput({ 
    default: modal.row ? modal.row.title : '',
    type: "text", 
    required: false,
    custom: true,
    name:"title",
    placeholder:"Title", 
    autoComplete:"title", 
    errorMessage: "Invalid Title", 
  });

  const modalOpen = (modal.show && modal.context === 'edit') ? true : false;
  const handleSubmit = (event) => {
    let errContext = '';
    
    if (image.upload && image.value === undefined) {
      errContext = 'Image'
    }else if (title.value === '') {
      errContext = 'Title'
    } else if (content.value === '' || content.value === '<p><br></p>') {
      errContext = 'Content'
    }

    if (errContext !== '') {
      toastr.error('', errContext+' is required')
      return;
    }

    const body = new FormData()
      image.value !== '' && body.append('image', image.value[0]) // first image only
      body.append('title', title.value)
      body.append('content', content.value)

    let id = modal.row ? modal.row.id : '';

    Promise.resolve( props.update(`/blog/${id}`, body, true /* third param for status form data */) )
      .then(update => update.status && toggleModal(false))
      .then(() => props.getAll('/blog'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Edit Blog </ModalHeader>
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
                  <Label htmlFor="text-input">Title</Label>
                </Col>
                <Col xs="12" md="9">
                  { title.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Content</Label>
                </Col>
                <Col xs="12" md="9">
                  { content.input }
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