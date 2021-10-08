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
      avatar.setValue("")
      username.setValue("")
      comment.setValue("")
    }
  });

  const { modal, toggleModal, theme }  = props;

  const avatar = FileInput({ 
    maxSize: "2MB", 
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "100",
    maxWidth: "1000",
    minHeight: "100",
    maxHeight: "1000",
  });

  const username = DefaultInput({ 
    type: "text", 
    required: true,
    name:"username",
    placeholder:"Client", 
    errorMessage: "Nom du client invalable", 
  });

  const comment = DefaultInput({ 
    type: "textarea", 
    required: true,
    name:"comment",
    placeholder:"Témoignage", 
    autoComplete:"desc", 
    errorMessage: "Témoignage Invalable", 
  });

  const modalOpen = (modal.show && modal.context === 'add') ? true : false;
  const handleSubmit = (event) => {
    const pondError = 8;

    if (avatar.value === "" || (avatar.pond && avatar.pond.status === pondError)) {
      toastr.error('L\'avatar est requis')
      return;
    }

    const body = new FormData()
      body.append('avatar', avatar.value[0]) // first image only
      body.append('username', username.value)
      body.append('comment', comment.value)


    Promise.resolve( props.save('/testimony', body, true /* third param for status form data */) )
      .then(save => save.status && toggleModal(false))
      .then(() => props.getAll('/testimony'))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Ajouter un témoignage </ModalHeader>
        <AvForm id="addTestimony" method="post" onValidSubmit={handleSubmit}>
          <ModalBody>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Avatar</Label>
                </Col>
                <Col xs="12" md="9">
                  { avatar.input }
                  <small className="help-block form-text text-muted">allowed type: jpg, jpeg, png; max: 2mb; dimension: width and height min 100 max 1000</small>
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
  save: submitFormActions.save,
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)