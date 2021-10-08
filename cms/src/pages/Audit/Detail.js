import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { modalActions } from 'stores';
import { dateToString } from 'helpers';

const Detail = (props) => {
  const { modal, toggleModal, theme }  = props;
  const modalOpen = (modal.show && modal.context === 'detail') ? true : false;
  let { id, type, model, data, id_model, createdAt } = modal.row ? modal.row : '';

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Détail de l'audit n°: {id}</ModalHeader>
          <ModalBody>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Type :</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ type }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">sur le model :</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ model }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Data :</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ data }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Id du model :</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ id_model }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Date de l'audit :</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ dateToString(createdAt, true) }</code>
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