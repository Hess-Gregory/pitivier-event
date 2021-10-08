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
      name.setValue("")
      position.setValue("")
      quote.setValue("")
      image.setValue("")    
    }
  });
  const { modal, toggleModal, theme }  = props;
  
  const name = DefaultInput({ 
    default: modal.row ? modal.row.name : '',
    type: "text", 
    required: true,
    name:"name",
    placeholder:"Nom", 
    errorMessage: "Nom invalide", 
  });

  const position = DefaultInput({ 
    default: modal.row ? modal.row.position : '',
    type: "text", 
    required: true,
    name:"position",
    placeholder:"Fonction", 
    errorMessage: "Fonction invalide", 
  });

  const image = FileInput({ 
    default: modal.row && imageUrl.team + modal.row.image,
    maxSize: "2MB", 
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "400",
    maxWidth: "1000",
    minHeight: "400",
    maxHeight: "1000",
  });

  const quote = DefaultInput({ 
    default: modal.row ? modal.row.quote : '',
    type: "textarea", 
    required: true,
    name:"quote",
    placeholder:"Description", 
    autoComplete:"quote", 
    errorMessage: "Description invalide", 
  });

  const modalOpen = (modal.show && modal.context === 'edit') ? true : false;
  const handleSubmit = (event) => {    
    if (image.upload && image.value === undefined) {
      toastr.error('L\'Image est obligatoire')
      return;
    }

    const body = new FormData()
      image.value !== '' && body.append('image', image.value[0]) // first image only
      body.append('name', name.value)
      body.append('position', position.value)
      body.append('quote', quote.value)

    let id = modal.row ? modal.row.id : '';

    Promise.resolve( props.update(`/team/${id}`, body, true /* third param for status form data */) )
      .then(update => update.status && toggleModal(false))
      .then(() => props.getAll('/team'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Modifier le coéquipier </ModalHeader>
        <AvForm id="editTeam" method="post" onValidSubmit={handleSubmit}>
          <ModalBody>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Image</Label>
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