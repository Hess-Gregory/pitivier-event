import React, { useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { modalActions, submitFormActions, loadTableActions } from 'stores';
import { DefaultInput, DefaultSubmit, TextEditor } from 'components';


const Add = (props) => {
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
    type: "text", 
    required: true,
    name:"name",
    placeholder:"Nom de la salle", 
    errorMessage: "Nom invalide", 
  });

  const address = DefaultInput({ 
    type: "text", 
    required: true,
    name:"address",
    placeholder:"Adresse de la salle", 
    errorMessage: "Adresse invalide", 
  });
  
  const phone = DefaultInput({ 
    type: "text", 
    required: true,
    name:"phone",
    placeholder:"Télèphone principale", 
    errorMessage: "Télèphone invalide", 
  });
  
  const phone2 = DefaultInput({ 
    type: "text", 
    required: false,
    name:"phone2",
    placeholder:"Télèphone secondaire", 
    errorMessage: "Télèphone invalide", 
  });
  
  const mail = DefaultInput({ 
    type: "mail", 
    required: false,
    name:"mail",
    placeholder:"Adresse mail", 
    errorMessage: "Email invalide", 
  });
  
  const website = DefaultInput({ 
    type: "text", 
    required: false,
    name:"website",
    placeholder:"Site internet", 
    errorMessage: "Site internet invalide", 
  });
  
//   const info = DefaultInput({ 
//     type: "text", 
//     required: false,
//     name:"info",
//     placeholder:"Information", 
//     errorMessage: "Infos invalide", 
//   });
  
const info = TextEditor();


const modalOpen = (modal.show && modal.context === 'add') ? true : false;
const handleSubmit = (event) => {
  const body = {
    "name" : name.value,
    "address" : address.value,
    "phone" :phone.value,
    "phone2": phone2.value,
    "mail" : mail.value,
    "website" : website.value,
    "info" : info.value
  }

  Promise.resolve( props.save('/location/salleitem', body) )
    .then(save => save.status && toggleModal(false))
    .then(() => props.getAll('/location/salleitem'))
    .catch(err => console.log(err))
}

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Ajouter une salle </ModalHeader>
        <AvForm id="addSalle" method="post" onValidSubmit={handleSubmit}>
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
  save: submitFormActions.save,
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)