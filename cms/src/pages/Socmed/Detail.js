import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { modalActions } from 'stores';
import { dateToString } from 'helpers';
import { DefaultSubmit } from 'components';

const Detail = (props) => {
  const { modal, toggleModal, theme }  = props;
  const modalOpen = (modal.show && modal.context === 'detail') ? true : false;
  let { name, icon, url, createdAt, updatedAt } = modal.row ? modal.row : '';
  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="md" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Detail Social Media </ModalHeader>
          <ModalBody>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Name</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ name }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Icon</Label>
              </Col>
              <Col xs="12" md="3">
                <code>{ icon }</code> 
              </Col>
              <Col xs="12" md="6">
                <i style={{ fontSize: 20 }}className={ icon }></i>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">url</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ url }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Created at</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ dateToString(createdAt, true) }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Updated at</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ dateToString(updatedAt, true) }</code>
              </Col>
            </FormGroup>
          </ModalBody>
        <ModalFooter>
          <DefaultSubmit cancelText="Close" />
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