import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { modalActions } from 'stores';

const Detail = (props) => {
  const { modal, toggleModal, theme }  = props;
  const modalOpen = (modal.show && modal.context === 'detail') ? true : false;
  let { name, text, price, unite, visible } = modal.row ? modal.row : '';

  let title = ( modal.row && modal.row.cardBuffet !== null)? modal.row.cardBuffet.title :'Aucune carte liée à ce buffet, veuillez modifier le buffet.';
let visibilited = <div className="fh5co-lead" ></div>
if(visible){
    visibilited = <div className="fh5co-lead" > Visible</div>;
}
else{
    visibilited = <div className="fh5co-lead" > Caché</div>;
}
  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Détail du Buffet </ModalHeader>
          <ModalBody>
            {/*<FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Image</Label>
              </Col>
              <Col xs="12" md="9">
                { image && <ModalImage
                    small={imageUrl.Buffet + image}
                    large={imageUrl.Buffet + image}
                    className="image-thumbnail"                
                  />
                }
              </Col>
              </FormGroup>*/}
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Nom</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ name }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Description</Label>
              </Col>
              <Col xs="12" md="9">
                <code dangerouslySetInnerHTML={{ __html: text }}></code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">prix</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ price } €</code>  <code>{ unite }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Dans la carte :</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ title }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Visibilité sur le site :</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ visibilited }</code>
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