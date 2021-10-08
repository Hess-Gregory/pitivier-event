import React, { useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { modalActions, submitFormActions, loadTableActions } from 'stores';
import { DefaultInput, DefaultSelect, DefaultSubmit } from 'components';

const Edit = (props) => {
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
    default: modal.row ? modal.row.username : '',
    type: "text",
    required: true,
    custom: true,
    name:"username",
    placeholder:"Username",
    autoComplete:"username",
    errorMessage: "Invalid Username",
  });

  const email = DefaultInput({
    default: modal.row ? modal.row.email : '',
    type: "email",
    required: true,
    custom: true,
    name:"email",
    placeholder:"Email",
    autoComplete:"email",
    errorMessage: "Invalid Email",
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
    required: false,
    custom: true,
    name:"password",
    placeholder:"Password",
    autoComplete:"password",
    errorMessage: "Invalid Password",
  });

  const modalOpen = (modal.show && modal.context === 'edit') ? true : false;
  const handleSubmit = (event) => {
    const body = password.value !== '' ?
      {
        "username": username.value,
        "email": email.value,
        "role": role.value,
        "password": password.value
      } :
      {
        "username": username.value,
        "email": email.value,
        "role": role.value
      };

    let id = modal.row ? modal.row.id : '';

    Promise.resolve( props.exist(`/user/exist/${id}`, body) )
      .then(res => res.exist === false ? props.update(`/user/${id}`, body) : Promise.reject())
      .then(save => save.status && toggleModal(false))
      .then(() => props.getAll('/user'))
      .catch(err => console.log(err))

  }

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="md" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Modifier l'utilisateur </ModalHeader>
        <AvForm id="addUser" method="post" onValidSubmit={handleSubmit}>
          <ModalBody>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Utilisateur</Label>
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
  update: submitFormActions.update,
  exist: submitFormActions.exist
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
