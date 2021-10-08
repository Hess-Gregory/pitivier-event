import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { modalActions } from 'stores';
import { DefaultSubmit } from 'components';

const Detail = (props) => {
  const { modal, toggleModal, theme }  = props;
  const modalOpen = (modal.show && modal.context === 'detail') ? true : false;
  let { title, icon, description, visible } = modal.row ? modal.row : '';
  
let visibilited = <div className="fh5co-lead" ></div>
if(visible){
    visibilited = <div className="fh5co-lead" > Visible</div>;
}
else{
    visibilited = <div className="fh5co-lead" > Caché</div>;
}
  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="md" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Détail de la carte </ModalHeader>
          <ModalBody>
            <FormGroup row>
              <Col md="4">
                <Label htmlFor="text-input">Icon</Label>
              </Col>
              <Col xs="12" md="4">
                <code>{ icon }</code> 
              </Col>
              <Col xs="12" md="4">
                <i style={{ fontSize: 20 }}className={ icon }></i>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="4">
                <Label htmlFor="text-input">Nom de la carte</Label>
              </Col>
              <Col xs="12" md="8">
                <code>{ title }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="4">
                <Label htmlFor="text-input">Description</Label>
              </Col>
              <Col xs="12" md="8">
              <code dangerouslySetInnerHTML={{ __html: description }}></code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="4">
                <Label htmlFor="text-input">Visibilité sur le site :</Label>
              </Col>
              <Col xs="12" md="8">
                <code>{ visibilited }</code>
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