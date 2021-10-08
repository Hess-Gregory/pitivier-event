import React, { useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { modalActions, submitFormActions, loadTableActions } from 'stores';
import { DefaultInput, DefaultSubmit } from 'components';

const Edit = (props) => {
  useEffect(() => {
    if(props.modal.show === false){
      name.setValue("")
      url.setValue("")
      component_name.setValue("")
      component_import.setValue("")
      exact.setValue("")
    }
  });
  const { modal, toggleModal, theme }  = props;

  const name = DefaultInput({ 
    default: modal.row ? modal.row.name : '',
    type: "text", 
    required: true,
    name:"name",
    placeholder:"Nom du menu", 
    autoComplete:"name", 
    errorMessage: "Invalid Title"
  });

  const url = DefaultInput({ 
    default: modal.row ? modal.row.path : '',
    type: "text", 
    required: true,
    name:"url",
    placeholder:"Description", 
    autoComplete:"url", 
    errorMessage: "Invalid Description", 
  });

  const component_name = DefaultInput({ 
    default: modal.row ? modal.row.component_name : '',
    type: "text", 
    required: true,
    name:"component_name",
    placeholder:"Nom du menu", 
    autoComplete:"component_name", 
    errorMessage: "Invalid Title"
  });

  const component_import = DefaultInput({ 
    default: modal.row ? modal.row.component_import : '',
    type: "text", 
    required: true,
    name:"component_import",
    placeholder:"Localisation du component", 
    autoComplete:"component_import", 
    errorMessage: "Invalid Title"
  });

  const exact = DefaultInput({ 
    default: modal.row ? modal.row.exact : '',
    type: "switch", 
    name:"exact"
  });


  const modalOpen = (modal.show && modal.context === 'edit') ? true : false;
  const handleSubmit = (event) => {
    const body = 
    {
      "name": name.value,
      "path": url.value,
      "component_name": component_name.value,
      "component_import": component_import.value,
      "exact": exact.value,
    };

    let id = modal.row ? modal.row.id : '';

    Promise.resolve( props.exist(`/service/exist/${id}`, body) )
      .then(res => res.exist === false ? props.update(`/service/${id}`, body) : Promise.reject())
      .then(save => save.status && toggleModal(false))
      .then(() => props.getAll('/service'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="md" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Modifier l'élement du menu </ModalHeader>
        <AvForm id="addUser" method="post" onValidSubmit={handleSubmit}>
          <ModalBody>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Nom de l'élement</Label>
                </Col>
                <Col xs="12" md="9">
                  { name.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">URL</Label>
                </Col>
                <Col xs="12" md="9">
                  { url.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Nom du component</Label>
                </Col>
                <Col xs="12" md="9">
                  { component_name.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Nom du component</Label>
                </Col>
                <Col xs="12" md="9">
                  { component_import.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Exact</Label>
                </Col>
                <Col xs="12" md="9">
                  { exact.input }
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
  update: submitFormActions.update,
  exist: submitFormActions.exist
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)