import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { modalActions } from 'stores';
import { dateToString } from 'helpers';
import { DefaultSubmit } from 'components';

const Detail = (props) => {
  const { modal, toggleModal, theme }  = props;
  const modalOpen = (modal.show && modal.context === 'detail') ? true : false;
  let { username, email, role, createdAt, updatedAt } = modal.row ? modal.row : '';
  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="md" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Détail de l'utilisateur </ModalHeader>
          <ModalBody>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Nom d'utilisateur</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ username }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Email</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ email }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Role</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ role }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Crée le</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ dateToString(createdAt, true) }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Mise à jour le</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ dateToString(updatedAt, true) }</code>
              </Col>
            </FormGroup>
          </ModalBody>
        <ModalFooter>
          <DefaultSubmit cancelText="Fermer" />
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
