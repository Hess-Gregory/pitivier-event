import React, { useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label, Badge } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { modalActions, submitFormActions, loadTableActions } from 'stores';
import { DefaultInput, DefaultSubmit } from 'components';
import ReactTooltip from 'react-tooltip';

const Edit = (props) => {
  useEffect(() => {
    if(props.modal.show === false){
      name.setValue("")
      icon.setValue("")
      url.setValue("")
    }
  });
  const { modal, toggleModal, theme }  = props;

  const name = DefaultInput({ 
    default: modal.row ? modal.row.name : '',
    type: "text", 
    required: true,
    name:"name",
    placeholder:"Name", 
    autoComplete:"name", 
    errorMessage: "Invalid Name"
  });

  const icon = DefaultInput({
    default: modal.row ? modal.row.icon : '', 
    type: "text", 
    required: true,
    name:"icon",
    placeholder:"ex: icon-newspaper",
    errorMessage: "Invalid Icon", 
  });

  const url = DefaultInput({ 
    default: modal.row ? modal.row.url : '',
    type: "text", 
    required: true,
    name:"url",
    placeholder:"URL", 
    autoComplete:"url", 
    errorMessage: "Invalid URL", 
  });

  const modalOpen = (modal.show && modal.context === 'edit') ? true : false;
  const handleSubmit = (event) => {
    const body = 
    {
      "name": name.value,
      "icon": icon.value,
      "url": url.value
    };

    let id = modal.row ? modal.row.id : '';

    Promise.resolve( props.update(`/socmed/${id}`, body) )
      .then(update => update.status && toggleModal(false))
      .then(() => props.getAll('/socmed'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="md" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Edit Service </ModalHeader>
        <AvForm id="addUser" method="post" onValidSubmit={handleSubmit}>
          <ModalBody>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Name</Label>
                </Col>
                <Col xs="12" md="9">
                  { name.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">
                    Icon 
                    <Badge pill color="info" style={{ marginLeft: 10 }}>
                      <a target="_blank"  rel="noopener noreferrer" href="https://developer.joomla.org/icomoon/demo.html"> Icon list</a>
                    </Badge>
                  </Label>
                </Col>
                <ReactTooltip />
                <Col xs="12" md="7" data-tip="Make sure icon appear right after this input field before submit form">
                  { icon.input }
                </Col>
                <Col xs="12" md="2">
                  <h1><span className={ icon.value }></span></h1>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">URL</Label>
                </Col>
                <Col xs="12" md="9">
                  { url.input }
                </Col>
              </FormGroup>
        </ModalBody>
        <ModalFooter>
          <DefaultSubmit submitText="Submit" cancelText="Cancel" />
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
  update: submitFormActions.update

}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)