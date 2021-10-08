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
      name.setValue("")
      position.setValue("")
      quote.setValue("")
      image.setValue("")      
    }
  });

  const { modal, toggleModal, theme }  = props;

  const name = DefaultInput({ 
    type: "text", 
    required: true,
    name:"name",
    placeholder:"Nom", 
    errorMessage: "Nom invalide", 
  });

  const position = DefaultInput({ 
    type: "text", 
    required: true,
    name:"position",
    placeholder:"Fonction", 
    errorMessage: "Fonction invalide", 
  });

  const image = FileInput({ 
    maxSize: "2MB", 
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "400",
    maxWidth: "1000",
    minHeight: "400",
    maxHeight: "1000",
  });

  const quote = DefaultInput({ 
    type: "textarea", 
    required: true,
    name:"quote",
    placeholder:"Description", 
    autoComplete:"quote", 
    errorMessage: "Description invalide", 
  });

  

  const modalOpen = (modal.show && modal.context === 'add') ? true : false;
  const handleSubmit = (event) => {
    const pondError = 8;
    
    if (image.value === "" || (image.pond && image.pond.status === pondError)) {
      toastr.error('L\'Image est obligatoire')
      return;
    }

    const body = new FormData()
      body.append('name', name.value)
      body.append('position', position.value)
      body.append('image', image.value[0]) // first image only
      body.append('quote', quote.value)
      
    Promise.resolve( props.save('/team', body, true /* third param for status form data */) )
      .then(save => save.status && toggleModal(false))
      .then(() => props.getAll('/team'))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Ajouter un coéquipier </ModalHeader>
        <AvForm id="addTeam" method="post" onValidSubmit={handleSubmit}>
          <ModalBody>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Photo</Label>
                </Col>
                <Col xs="12" md="9">
                  { image.input }
                  <small className="help-block form-text text-muted">type autorisé : jpg, jpeg, png ; max : 2 Mo ; largeur et hauteur min : 400px, largeur et hauteur max : 1000px</small>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Nom</Label>
                </Col>
                <Col xs="12" md="9">
                  { name.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Fonction</Label>
                </Col>
                <Col xs="12" md="9">
                  { position.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Description</Label>
                </Col>
                <Col xs="12" md="9">
                  { quote.input }
                </Col>
              </FormGroup>
        </ModalBody>
        <ModalFooter>
          <DefaultSubmit submitText="Valider" cancelText="Quitter" />
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