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
      avatar.setValue("")
      username.setValue("")
      comment.setValue("")
    }
  });
  const { modal, toggleModal, theme }  = props;
  
  const avatar = FileInput({ 
    default: modal.row && imageUrl.testimony + modal.row.avatar,
    maxSize: "2MB", 
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "100",
    maxWidth: "1000",
    minHeight: "100",
    maxHeight: "1000",
  });

  const username = DefaultInput({ 
    default: modal.row ? modal.row.username : '',
    type: "text", 
    required: true,
    name:"username",
    placeholder:"Client", 
    errorMessage: "Nom du client invalable", 
  });

  const comment = DefaultInput({ 
    default: modal.row ? modal.row.comment : '',
    type: "textarea", 
    required: true,
    name:"comment",
    placeholder:"Témoignage", 
    autoComplete:"desc", 
    errorMessage: "témoignage invalable", 
  });

  const modalOpen = (modal.show && modal.context === 'edit') ? true : false;
  const handleSubmit = (event) => {
    
    if (avatar.upload && avatar.value === undefined) {
      toastr.error('Avatar is required')
      return;
    }

    const body = new FormData()
      avatar.value !== '' && body.append('avatar', avatar.value[0]) // first image only
      body.append('username', username.value)
      body.append('comment', comment.value)

    let id = modal.row ? modal.row.id : '';

    Promise.resolve( props.update(`/testimony/${id}`, body, true /* third param for status form data */) )
      .then(update => update.status && toggleModal(false))
      .then(() => props.getAll('/testimony'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Modifier le témoignage </ModalHeader>
        <AvForm id="editTestimony" method="post" onValidSubmit={handleSubmit}>
          <ModalBody>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Avatar</Label>
                </Col>
                <Col xs="12" md="9">
                  { avatar.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Client</Label>
                </Col>
                <Col xs="12" md="9">
                  { username.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Témoignage</Label>
                </Col>
                <Col xs="12" md="9">
                  { comment.input }
                </Col>
              </FormGroup>
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
  update: submitFormActions.update

}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)