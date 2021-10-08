import React, { useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { modalActions, submitFormActions, loadTableActions } from 'stores';
import { DefaultInput, DefaultSelect, DefaultSubmit } from 'components';

const Add = (props) => {
  useEffect(() => {
    if(props.modal.show === false){
      username.setValue("")
      email.setValue("")
      role.setValue("")
      password.setValue("")
    }
  });

  const { modal, toggleModal, theme }  = props;

  const username = DefaultInput({
    type: "text",
    required: true,
    name:"Nom d'utilisateur",
    placeholder:"Nom d'utilisateur",
    autoComplete:"Nom d'utilisateur",
    errorMessage: "Nom d'utilisateur non valable"
  });

  const email = DefaultInput({
    type: "email",
    required: true,
    name:"email",
    placeholder:"Email",
    autoComplete:"email",
    errorMessage: "Email non valable",
  });

  const role = DefaultSelect({
    options: [
      { value: 'Visiteur', label: 'Visiteur' },
      { value: 'Modérateur', label: 'Modérateur' },
      { value: 'Administrateur', label: 'Administrateur' }
    ],
    name:"role",
    selected: modal.row ? modal.row.role : '',
  });

  const password = DefaultInput({
    type: "password",
    required: true,
    name:"Mot de passe",
    placeholder:"Mot de passe",
    autoComplete:"Mot de passe",
    errorMessage: "Mot de passe non valable",
  });

  const modalOpen = (modal.show && modal.context === 'add') ? true : false;
  const handleSubmit = (event) => {
    const body = {
      "username": username.value,
      "email": email.value,
      "role": role.value,
      "password": password.value
    }

    Promise.resolve( props.exist('/user/exist', body) )
      .then(res => res.exist === false ? props.save('/user', body) : Promise.reject())
      .then(save => save.status && toggleModal(false))
      .then(() => props.getAll('/user'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="md" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Ajouter un utilisateur </ModalHeader>
        <AvForm id="addUser" method="post" onValidSubmit={handleSubmit}>
          <ModalBody>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Nom d'utilisateur</Label>
                </Col>
                <Col xs="12" md="9">
                  { username.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Email</Label>
                </Col>
                <Col xs="12" md="9">
                  { email.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Role</Label>
                </Col>
                <Col xs="12" md="9">
                  { role.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Mot de passe</Label>
                </Col>
                <Col xs="12" md="9">
                  { password.input }
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
  exist: submitFormActions.exist
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
