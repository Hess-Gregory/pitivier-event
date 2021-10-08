import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label, Card, CardHeader, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import { modalActions } from 'stores';
import { dateToString, imageUrl } from 'helpers';
import ModalImage from "react-modal-image";

const Detail = (props) => {
  const { modal, toggleModal, theme }  = props;
  const modalOpen = (modal.show && modal.context === 'detail') ? true : false;
  let { image, alt, page, btn1name, btn1url, btn2name, btn2url, tagdesc, tagline, createdAt, updatedAt } = modal.row ? modal.row : '';

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Detail Header </ModalHeader>
          <ModalBody>
        <Card className={ 'card-' + theme }>
          <CardHeader>
            <h5 style={{ textDecoration: 'underline black' }}>Page : Choix de la page, Titre et description</h5>
          </CardHeader>
          <CardBody>            
            <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Image</Label>
            </Col>
            <Col xs="12" md="9">
              { image && <ModalImage
                  small={imageUrl.header + image}
                  large={imageUrl.header + image}
                  className="image-thumbnail"                
                />
              }
            </Col>
          </FormGroup>            
          <FormGroup row>
          <Col md="3">
            <Label htmlFor="text-input">(SEO - OBLIGATOIRE) Description de l'image</Label>
          </Col>
          <Col xs="12" md="9">
            <code>{ alt }</code>
          </Col>
        </FormGroup>
   
          </CardBody>
        </Card>
        <Card className={ 'card-' + theme }>
          <CardHeader>
            <h5 style={{ textDecoration: 'underline black' }}>Image de l'en-téte : Choix de l'image' et sa description</h5>
          </CardHeader>
          <CardBody>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Page</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ page }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Titre</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ tagline }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Description</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ tagdesc }</code>
              </Col>
            </FormGroup>
          </CardBody>
        </Card>
        <Card className={ 'card-' + theme }>
          <CardHeader>
            <h5 style={{ textDecoration: 'underline black' }}>Boutons : Nom des boutons et leurs URL</h5>
          </CardHeader>
          <CardBody>
          <FormGroup row>
          <Col md="12">
            <Label htmlFor="text-input" style={{ textDecoration: 'underline black' }}>Bouton 1</Label>
          </Col>
          <Col xs="12" md="6">
          <Label htmlFor="text-input">Nom</Label>
          <br/>
          <code>{ btn1name }</code>
            
          </Col>
          <Col xs="12" md="6">
          <Label htmlFor="text-input">URL</Label>
          <br/>
          <code>{ btn1url }</code>
            
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="12">
            <Label htmlFor="text-input" style={{ textDecoration: 'underline black' }}>Bouton 2</Label>
          </Col>
          <Col xs="12" md="6">
          <Label htmlFor="text-input">Nom</Label>
          <br/>
          <code>{ btn2name }</code>
            
          </Col>
          <Col xs="12" md="6">
          <Label htmlFor="text-input">URL</Label>
          <br/>
          <code>{ btn2url }</code>
            
          </Col>
        </FormGroup>     
   
          </CardBody>
        </Card>
















            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Created At</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ dateToString(createdAt, true) }</code>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Updated At</Label>
              </Col>
              <Col xs="12" md="9">
                <code>{ dateToString(updatedAt, true) }</code>
              </Col>
            </FormGroup>
          </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>Close</Button>
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