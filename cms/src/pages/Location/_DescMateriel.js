import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Row,
  FormGroup,
  Container
} from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { loadTableActions, submitFormActions } from 'stores';
import { DefaultInput, DefaultSubmit, TextEditor } from 'components';
import Icofont from 'react-icofont';

const DescMateriel = (props) => {
  const { data1, theme, getAll1 } = props;
  React.useLayoutEffect(() => { getAll1('/location/materieldesc') }, [getAll1]);
if (data1[0]){


  
}
setTimeout(function(){
  console.log("I am the third log after 5 seconds");
},5000);
  const title = DefaultInput({
    default: data1 ? data1[0].title : '',
    type: "text",
    required: true,
    name:"title",
    placeholder:"Titre",
    autoComplete:"title",
    errorMessage: "Format titre invalable",
  });
//   const content = DefaultInput({
//     default: data1 ? data1[0].content : '',
//     type: "text",
//     required: true,
//     name:"content",
//     placeholder:"Contenue",
//     autoComplete:"content",
//     errorMessage: "Contenue invalable",
//   });

  const content = TextEditor({
    default: data1 ? data1[0].content : '',
  });
  const handleSubmit = (event) => {
    let id = data1 ? data1[0].id : '';

    const body = {
        title      :title.value,
        content   :content.value,
        id: id
        
    }

    Promise.resolve( props.update(`/location/materieldesc/${id}`, body) )
      .then(update => update.status && props.getAll1('/location/materieldesc'))
      .catch(err => console.log(err))
  }
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card className={ 'card-' + theme }>
                <AvForm id="addMateriel" method="post" onValidSubmit={handleSubmit}>
              <CardBody>
                <Card>
                  <CardHeader>
                    <div className="section-title">
                      <h2>Location Matériel : </h2>
                    </div>
                  </CardHeader>
                  <CardBody className="contact-card-body">
                    <Container>
                      <Row className="align-items-center">
                        <Col lg="12">
                          <div className="contact-information">
                            <Row className="row">
                              <Col lg="12" md="12" sm="12">
                                <div className="contact-details">
                                  <div className="contact-icon">	
                                    <Icofont icon="culinary"/>
                                  </div>
                                  <div className="contact-info">
                                      <FormGroup>
                                          <div className="controls">
                                              { title.input }
                                          </div>
                                      </FormGroup>
                                      <FormGroup>
                                          <div className="controls">
                                              { content.input }
                                          </div>
                                      </FormGroup>
                                  </div>
                                </div>
                              </Col>
                            </Row>
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
    );
  }

const mapStateToProps = state => {
  return {
    data1: state.loadTable1.data1,
    theme: state.theme.theme
  }
}

const mapDispatchToProps = {
  getAll1: loadTableActions.getAll1,
  update: submitFormActions.update
}

export default connect(mapStateToProps, mapDispatchToProps)(DescMateriel)
