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


const DescSalle = (props) => {
  const { data2, theme, getAll2 } = props;
  React.useLayoutEffect(() => { getAll2('/location/salledesc') }, [getAll2]);

  const title = DefaultInput({
    default: data2 ? data2[0].title : '',
    type: "text",
    required: true,
    name:"title",
    placeholder:"Titre",
    autoComplete:"title",
    errorMessage: "Format titre invalable",
  });
//   const content = DefaultInput({
//     default: data2 ? data2[0].content : '',
//     type: "text",
//     required: true,
//     name:"content",
//     placeholder:"Contenue",
//     autoComplete:"content",
//     errorMessage: "Contenue invalable",
//   });

const content = TextEditor({
    default: data2 ? data2[0].content : '',
  });

  const handleSubmit = (event) => {
    let id = data2 ? data2[0].id : '';

    const body = {
        title       :   title.value,
        content     :   content.value,
        id          :   id
        
    }

    Promise.resolve( props.update(`/location/salledesc/${id}`, body) )
      .then(update => update.status && props.getAll('/location/salledesc'))
      .catch(err => console.log(err))
  }
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card className={ 'card-' + theme }>
                <AvForm id="addSalle" method="post" onValidSubmit={handleSubmit}>
              <CardBody>
                <Card>
                  <CardHeader>
                    <div className="section-title">
                      <h2>Location Salle : </h2>
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
                                    <i className="fa fa-home"/>
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
    data2: state.loadTable2.data2,
    theme: state.theme.theme
  }
}

const mapDispatchToProps = {
  getAll2: loadTableActions.getAll2,
  update: submitFormActions.update
}

export default connect(mapStateToProps, mapDispatchToProps)(DescSalle)
