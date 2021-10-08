import React, { useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { modalActions, submitFormActions, loadTableActions } from 'stores';
import { DefaultInput, DefaultSubmit } from 'components';

const Add = (props) => {
  useEffect(() => {
    if(props.modal.show === false){
      name.setValue("")
      // visible.setValue("")
    }
  });

  const { modal, toggleModal, theme }  = props;

  const name = DefaultInput({ 
    type: "text", 
    required: true,
    name:"name",
    placeholder:"Nom de la gallerie", 
    autoComplete:"name", 
    errorMessage: "Nom incorrect"
  });


  // const visible = DefaultInput({ 
  //   default: true,
  //   type:"checkbox", 
  //   required: false,
  //   placeholder:"Visibilité", 
  //   name:"visible",
  //   errorMessage: "Visibilité incorrect", 
  // });
  const modalOpen = (modal.show && modal.context === 'add') ? true : false;
  const handleSubmit = (event) => {
    // if (visible.value ===''){visible.value = 'false'}
    const body = {
      "name": name.value,
      // "visible": visible.value
    }
    Promise.resolve( 

      // props.exist('/card/exist', body) )
      // .then(res => res.exist === false && props.save('/card', body))
      // .then(save => save.status && toggleModal(false))
      // .then(() => props.getAll('/card'))
      // .catch(err => console.log(err))

      
      props.save('/gallery', body) )
      .then(save => save.status && toggleModal(false))
      .then(() => props.getAll('/gallery'))
      .catch(err => console.log(err))
  }
  
  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="md" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Ajouter une nouvelle Gallerie </ModalHeader>
        <AvForm id="addCard" method="post" onValidSubmit={handleSubmit}>
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
  save: submitFormActions.save,
  exist: submitFormActions.exist

}

export default connect(mapStateToProps, mapDispatchToProps)(Add)