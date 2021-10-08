import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { modalActions } from 'stores';
import ModalImage from "react-modal-image";
import { imageUrl } from 'helpers';

const Detail = (props) => {
  const { modal, toggleModal, theme }  = props;
  const modalOpen = (modal.show && modal.context === 'detail') ? true : false;
  let { image, alt, Galleries
    // visible 
  } = modal.row ? modal.row : '';

// let visibilited = <div className="fh5co-lead" ></div>
// if(visible){
//     visibilited = <div className="fh5co-lead" > Visible</div>;
// }
// else{
//     visibilited = <div className="fh5co-lead" > Caché</div>;
// }
  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Détail de l'image </ModalHeader>
          <ModalBody>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Image</Label>
              </Col>
              <Col xs="12" md="9">
                { image && <ModalImage
                    small={imageUrl.gallery + image}
                    large={imageUrl.gallery + image}
                    className="image-thumbnail"                
                  />
                }
              </Col>
              </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Description (Alt):</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ alt }</code>
              </Col>
            </FormGroup>
            {
              Galleries && Galleries !== null?
              <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Dans la ou les gallerie(s) :</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ Galleries.map(function(objet){
                  const gallerie_name = objet.name;
                  return gallerie_name
                }).join(' - ') }</code>
              </Col>
            </FormGroup> : ''
          }
           {/*<FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Visibilité sur le site :</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ visibilited }</code>
              </Col>
            </FormGroup> */} 

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