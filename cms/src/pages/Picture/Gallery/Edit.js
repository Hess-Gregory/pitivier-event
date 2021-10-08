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
      // visible.setValue("")
    }
  });
  const { modal, toggleModal, theme }  = props;

  const name = DefaultInput({ 
    default: modal.row ? modal.row.name : '',
    type: "text", 
    required: true,
    name:"name",
    placeholder:"Nom de la gallerie", 
    autoComplete:"name", 
    errorMessage: "Nom incorrect"
  });

  
  // const visible = DefaultInput({ 
  //   default: modal.row ? modal.row.visible : '',
  //   type:"checkbox", 
  //   required: false,
  //   placeholder:"Visibilité", 
  //   name:"visible",
  //   errorMessage: "Visibilité incorrect", 
  // });
  const modalOpen = (modal.show && modal.context === 'edit') ? true : false;
  const handleSubmit = (event) => {
    // if (visible.value === ''){visible.value = modal.row ? modal.row.visible : ''}
    const body = 
    {
      "name": name.value,
      // "visible": visible.value
    };

    let id = modal.row ? modal.row.id : '';

    Promise.resolve( 
      // props.exist(`/service/exist/${id}`, body) )
      // .then(res => res.exist === false ? props.update(`/service/${id}`, body) : Promise.reject())
      // .then(save => save.status && toggleModal(false))
      // .then(() => props.getAll('/service'))
      // .catch(err => console.log(err))

      props.update(
      `/gallery/${id}`, body) )
      .then(update => update.status && toggleModal(false))
      .then(() => props.getAll('/gallery'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="md" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Modifier la gallerie </ModalHeader>
        <AvForm id="addGallery" method="post" onValidSubmit={handleSubmit}>
          <ModalBody>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Nom</Label>
                </Col>
                <Col xs="12" md="9">
                  { name.input }
                </Col>
              </FormGroup>
              {/*<FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input" className="switch">Visibilité
                  </Label>
                </Col>
                <Col xs="12" md="9">
                  { visible.input } 
                  &emsp;&emsp;
                  (Décochez la case pour le cacher du site)<br/>
                </Col>
              </FormGroup>*/}
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