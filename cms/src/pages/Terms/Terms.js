import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Row,
  FormGroup,
  Label,
  Spinner,
  Container
} from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { loadTableActions, submitFormActions } from 'stores';
import { DefaultInput, DefaultSubmit, TextEditor } from 'components';


const Terms = (props) => {
  const { data, theme, getAll } = props;
  React.useLayoutEffect(() => { getAll('/terms') }, [getAll]);

  const title = DefaultInput({
    default: data ? data[0].title : '',
    type: "text",
    required: true,
    name:"title",
    placeholder:"Titre",
    autoComplete:"title",
    errorMessage: "Format titre invalable",
  });
  
  const content = TextEditor({
    default: data ? data[0].content : '',
  });

  const handleSubmit = (event) => {
    let id = data ? data[0].id : '';

    const body = {
        title       :title.value,
        content     :content.value,
        id          : id
        
    }

    Promise.resolve( props.update(`/terms/${id}`, body) )
      .then(update => update.status && props.getAll('/terms'))
      .catch(err => console.log(err))
  }
    return (
      data ?
      <div className="animated fadeIn">
        <style dangerouslySetInnerHTML={{__html: `
        .contact-info h4 {
                color: #2c2c34 !important;
                background-color: rgba(255, 255, 255, 0.75) !important;
                border-color: #2c2c34 !important; 
                font-weight: bold !important; 
                font-size: 1.2em;
        `}} />
        <Row>
          <Col>
            <Card className={ 'card-' + theme }>
                <AvForm id="addContact" method="post" onValidSubmit={handleSubmit}>
              <CardHeader>
                <h5>
                <i className="fa fa-phone"></i> Termes et conditions
                </h5>
              </CardHeader>
              <CardBody>
                <Card>
                  <CardHeader>
                    <div className="section-title">
                      <h2>Termes et conditions </h2>
                    </div>
                  </CardHeader>
                  <CardBody className="contact-card-body">
                    <Container>
                      <Row className="align-items-center">
                        <Col lg="12">
                          <div className="contact-information">
                                <div className="contact-details">
                                  <div className="contact-info">
                                      <FormGroup>
                                      <Label><h4>Titre :</h4></Label>
                                          <div className="controls">
                                              { title.input }
                                          </div>
                                      </FormGroup>
                                      <FormGroup>
                                      <Label><h4>Contenu du RGPD:</h4></Label>
                                          <div className="controls">
                                              { content.input }
                                          </div>
                                      </FormGroup>
                                  </div>
                                </div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </CardBody>
                </Card>
              </CardBody>
              <CardFooter className="contact-card-footer">
                  <DefaultSubmit submitText="Valider" />
              </CardFooter>
                  </AvForm>
            </Card>
          </Col>
        </Row>
      </div>
      :
      <div>
        <center><Spinner color="primary" style={{ width: '3rem', height: '3rem' }}  /></center>
      </div>
    );
  }

const mapStateToProps = state => {
  return {
    data: state.loadTable.data,
    theme: state.theme.theme
  }
}

const mapDispatchToProps = {
  getAll: loadTableActions.getAll,
  update: submitFormActions.update
}

export default connect(mapStateToProps, mapDispatchToProps)(Terms)
