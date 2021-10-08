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
      tagdesc.setValue("")
      tagline.setValue("")
    }
  });
  const { modal, toggleModal, theme }  = props;
  
  let image = FileInput({ 
      default: modal.row && imageUrl.carousel + modal.row.image,
      maxSize: "5MB", 
      accepted: ['image/png', 'image/jpeg', 'image/jpg'],
      minWidth: "150",
      maxWidth: "4200",
      minHeight: "150",
      maxHeight: "4200",
    });

  const tagdesc = TextEditor({
    default: modal.row ? modal.row.tagdesc : '',
  });

  const tagline = DefaultInput({ 
    default: modal.row ? modal.row.tagline : '',
    type: "text", 
    required: false,
    custom: true,
    name:"tagline",
    placeholder:"Tagline", 
    autoComplete:"tagline", 
    errorMessage: "Invalid Tagline", 
  });

  const modalOpen = (modal.show && modal.context === 'edit') ? true : false;
  const handleSubmit = (event) => {
    let errContext = '';
    
    if (image.upload && image.value === undefined) {
      errContext = 'Image'
    }else if (tagline.value === '') {
      errContext = 'Tagline'
    } else if (tagdesc.value === '' || tagdesc.value === '<p><br></p>') {
      errContext = 'Tag Description'
    }

    if (errContext !== '') {
      toastr.error('', errContext+' is required')
      return;
    }

    const body = new FormData()
      image.value !== '' && body.append('image', image.value[0]) // first image only
      body.append('tagline', tagline.value)
      body.append('tagdesc', tagdesc.value)

    let id = modal.row ? modal.row.id : '';
    Promise.resolve( props.update(`/carousel/${id}`, body, true /* third param for status form data */) )
      .then(update => update.status && toggleModal(false))
      .then(() => props.getAll('/carousel'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Edit Carousel </ModalHeader>
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
                  <Label htmlFor="text-input">Tagline</Label>
                </Col>
                <Col xs="12" md="9">
                  { tagline.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Tag Description</Label>
                </Col>
                <Col xs="12" md="9">
                  { tagdesc.input }
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