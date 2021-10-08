import React, { useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { modalActions, submitFormActions, loadTableActions } from 'stores';
import { DefaultInput, DefaultSubmit, TextEditor } from 'components';


const Edit = (props) => {
  useEffect(() => {
    if(props.modal.show === false){
      name.setValue("")
      address.setValue("")
      phone.setValue("")
      phone2.setValue("")
      mail.setValue("")
      website.setValue("")
      info.setValue("")
    }
  });
  const { modal, toggleModal, theme }  = props;

  const name = DefaultInput({ 
    default: modal.row ? modal.row.name : '',
    type: "text", 
    required: true,
    custom: true,
    name:"name",
    placeholder:"Nom de la salle", 
    autoComplete:"name", 
    errorMessage: "Nom invalide", 
  });

  const address = DefaultInput({ 
    default: modal.row ? modal.row.address : '',
    type: "text", 
    required: true,
    custom: true,
    name:"address",
    placeholder:"Adresse de la salle", 
    autoComplete:"address", 
    errorMessage: "Adresse invalide", 
  });
  
  const phone = DefaultInput({ 
    default: modal.row ? modal.row.phone : '',
    type: "text", 
    required: true,
    custom: true,
    name:"phone",
    placeholder:"Télèphone principale", 
    autoComplete:"phone", 
    errorMessage: "Télèphone invalide", 
  });
  
  const phone2 = DefaultInput({ 
    default: modal.row ? modal.row.phone2 : '',
    type: "text", 
    required: false,
    custom: true,
    name:"phone2",
    placeholder:"Télèphone secondaire", 
    autoComplete:"phone2", 
    errorMessage: "Télèphone invalide", 
  });
  
  const mail = DefaultInput({ 
    default: modal.row ? modal.row.mail : '',
    type: "mail", 
    required: false,
    custom: true,
    name:"mail",
    placeholder:"Adresse mail", 
    autoComplete:"mail", 
    errorMessage: "Email invalide", 
  });
  
  const website = DefaultInput({ 
    default: modal.row ? modal.row.website : '',
    type: "text", 
    required: false,
    custom: true,
    name:"website",
    placeholder:"Site internet", 
    autoComplete:"website", 
    errorMessage: "Site internet invalide", 
  });
  
//   const info = DefaultInput({ 
//     default: modal.row ? modal.row.info : '',
//     type: "text", 
//     required: false,
//     custom: true,
//     name:"info",
//     placeholder:"Information", 
//     autoComplete:"info", 
//     errorMessage: "Infos invalide", 
//   });
  
  const info = TextEditor({
    default: modal.row ? modal.row.info : '',
  });

  const modalOpen = (modal.show && modal.context === 'edit') ? true : false;
  const handleSubmit = (event) => {
    const body = 
    {
      "name" : name.value,
      "address" : address.value,
      "phone" :phone.value,
      "phone2": phone2.value,
      "mail" : mail.value,
      "website" : website.value,
      "info" : info.value
    };

    let id = modal.row ? modal.row.id : '';

    Promise.resolve( props.update(`/location/salleitem/${id}`, body) )
      .then(update => update.status && toggleModal(false))
      .then(() => props.getAll('/location/salleitem'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Modifier la salle </ModalHeader>
        <AvForm id="editSalle" method="post" onValidSubmit={handleSubmit}>
          <ModalBody>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Nom:</Label>
                </Col>
                <Col xs="12" md="9">
                  { name.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Adresse</Label>
                </Col>
                <Col xs="12" md="9">
                  { address.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Téléphone principal</Label>
                </Col>
                <Col xs="12" md="9">
                  { phone.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Téléphone secondaire</Label>
                </Col>
                <Col xs="12" md="9">
                  { phone2.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Adresse mail</Label>
                </Col>
                <Col xs="12" md="9">
                  { mail.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Site internet</Label>
                </Col>
                <Col xs="12" md="9">
                  { website.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Informations</Label>
                </Col>
                <Col xs="12" md="9">
                  { info.input }
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