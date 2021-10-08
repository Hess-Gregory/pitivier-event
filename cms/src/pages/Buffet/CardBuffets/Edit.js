import React, { useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label, Badge } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { modalActions, submitFormActions, loadTableActions } from 'stores';
import { DefaultInput, TextEditor, DefaultSubmit } from 'components';
import ReactTooltip from 'react-tooltip';

const Edit = (props) => {
  useEffect(() => {
    if(props.modal.show === false){
      title.setValue("")
      description.setValue("")
      icon.setValue("")
      visible.setValue("")
    }
  });
  const { modal, toggleModal, theme }  = props;

  const title = DefaultInput({ 
    default: modal.row ? modal.row.title : '',
    type: "text", 
    required: true,
    name:"title",
    placeholder:"Titre", 
    autoComplete:"title", 
    errorMessage: "Titre incorrect"
  });

  const icon = DefaultInput({
    default: modal.row ? modal.row.icon : '', 
    type: "icon", 
    required: false,
    name:"icon",
    placeholder:"ex: icon-newspaper",
    errorMessage: "Icon incorrect", 
  });


  const description = TextEditor({
    default: modal.row ? modal.row.description : '',
  });
  
  const visible = DefaultInput({ 
    default: modal.row ? modal.row.visible : '',
    type:"checkbox", 
    required: false,
    placeholder:"Visibilité", 
    name:"visible",
    errorMessage: "Visibilité incorrect", 
  });
  const modalOpen = (modal.show && modal.context === 'edit') ? true : false;
  const handleSubmit = (event) => {
    const body = 
    {
      "title": title.value,
      "icon": icon.value,
      "description": description.value,
      "visible": visible.value
    };

    let id = modal.row ? modal.row.id : '';

    Promise.resolve( 
      // props.exist(`/service/exist/${id}`, body) )
      // .then(res => res.exist === false ? props.update(`/service/${id}`, body) : Promise.reject())
      // .then(save => save.status && toggleModal(false))
      // .then(() => props.getAll('/service'))
      // .catch(err => console.log(err))

      props.update(
      `/cardbuffet/${id}`, body) )
      .then(update => update.status && toggleModal(false))
      .then(() => props.getAll('/cardbuffet'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="md" className={"modal-"+theme}>
        <ModalHeader toggle={toggleModal}> Modifier La carte des buffets </ModalHeader>
        <AvForm id="addCardBuffet" method="post" onValidSubmit={handleSubmit}>
          <ModalBody>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Titre</Label>
                </Col>
                <Col xs="12" md="9">
                  { title.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">
                    Iconfont
                    <Badge pill color="info" style={{ marginLeft: 10 }}> 
                      <a target="_blank"  rel="noopener noreferrer" href="https://icofont.com/icons">Liste des icofont</a>
                    </Badge>
                  </Label>
                </Col>
                <ReactTooltip />
                <Col xs="12" md="7" data-tip="Assurez-vous que l'icône apparaisse juste après ce champ de saisie avant de soumettre le formulaire">
                  { icon.input }
                </Col>
                <Col xs="12" md="2">
                  <h1><span className={ icon.value }></span></h1>
                </Col>
                    <h6>Exemple pour:</h6>
                    <p><b>&lt;i class="icofont-adjust"&gt;&lt;/i &gt;</b>  insérez uniquement :<b> icofont-adjust </b> </p>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Description</Label>
                </Col>
                <Col xs="12" md="9">
                  { description.input }
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input" className="switch">Visibilité
                  </Label>
                </Col>
                <Col xs="12" md="9">
                  { visible.input } 
                  &emsp;&emsp;
                  (Décochez la case pour le cacher du site)<br/>
                </Col>
              </FormGroup>
        </ModalBody>
        <ModalFooter>
          <DefaultSubmit submitText="Valider" cancelText="Quitter" />
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
  update: submitFormActions.update,
  exist: submitFormActions.exist
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)