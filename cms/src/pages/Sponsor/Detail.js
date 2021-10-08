import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { modalActions } from 'stores';
import { imageUrl } from 'helpers';
import ModalImage from "react-modal-image";

const Detail = (props) => {
  const { modal, toggleModal, theme }  = props;
  const modalOpen = (modal.show && modal.context === 'detail') ? true : false;
  let { image, title, alt, url } = modal.row ? modal.row : '';

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Détail du sponsor </ModalHeader>
          <ModalBody>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Image</Label>
              </Col>
              <Col xs="12" md="9">
                { image && <ModalImage
                    small={imageUrl.sponsor + image}
                    large={imageUrl.sponsor + image}
                    className="image-thumbnail"                
                  />
                }
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Titre</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ title }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Descrption de l'image</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ alt }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">URL</Label>
              </Col>
              <Col xs="12" md="9">
                <a href={ url }>
                  <code>{ url }</code>
                </a>
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