import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { modalActions } from 'stores';

const Detail = (props) => {
  const { modal, toggleModal, theme }  = props;
  const modalOpen = (modal.show && modal.context === 'detail') ? true : false;
  let { name, address, phone, phone2, mail, website, info } = modal.row ? modal.row : '';

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Détail de la salle </ModalHeader>
          <ModalBody>
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Nom:</Label>
            </Col>
            <Col xs="12" md="9">
            <code>{ name }</code>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Adresse</Label>
            </Col>
            <Col xs="12" md="9">
            <code>{ address }</code>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Téléphone principal</Label>
            </Col>
            <Col xs="12" md="9">
            <code>{ phone }</code>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Téléphone secondaire</Label>
            </Col>
            <Col xs="12" md="9">
            <code>{ phone2 }</code>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Adresse mail</Label>
            </Col>
            <Col xs="12" md="9">
            <code>{ mail }</code>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Site internet</Label>
            </Col>
            <Col xs="12" md="9">
            <code>{ website }</code>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Informations</Label>
            </Col>
            <Col xs="12" md="9">
                <code>{ info }</code>
            </Col>
          </FormGroup>
          </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>Fermer</Button>
        </ModalFooter>
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
  toggleModal: modalActions.toggle

}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)