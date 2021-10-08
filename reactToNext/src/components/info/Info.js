import React from "react";
import { Form } from 'react-bootstrap'; 
import emailjs from 'emailjs-com';
import { Container, Row, Col } from 'reactstrap';

class Info extends React.Component {


   constructor(props) {
        super(props);
        this.state = { 
            title: props.title,
            name: '',
            email: '',
            subject: '',
            message: ''
        } 


        this.sendEmail = this.sendEmail.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    } 
   
        sendEmail(e) {
            e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
            const { name, email, subject, message } = this.state;

            const templateParams = {
                from_name: name,
                from_email: email,
                to_name: 'Tria Bagus',
                from_subject: subject,
                message_html: message,
              };
   
            emailjs.send(
                process.env.REACT_APP_SERVICE_ID_EMAILJS, process.env.REACT_APP_TEMPLATE_ID_EMAILJS,
                templateParams,
                process.env.REACT_APP_USER_ID_EMAILJS)
                .then((result) => {
                this.resetForm();
                alert('Votre message a été envoyé avec succès. Nous vous contacterons bientôt.');
                  //window.location.reload()
                  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
              }, (error) => {
                console.log('Votre message a échoué, veuillez patienter une minute.');
                alert('Votre message a échoué, veuillez patienter une minute.');
                  console.log(error.text);
              });
        };

        resetForm() {
            this.setState({
                name: '',
                email: '',
                subject: '',
                message: '',
              });
        }
        
        handleChange(event) {
            this.setState({ [event.target.name]: event.target.value });
        }  
  render() {
    const items = this.props.items;
    
        const { name, email, subject, message  } = this.state;
        const itemTitle = items.map(function(item, index){
          return  <div key={index} className="section-title">
                    <h5>{item.title2}</h5>
                    <h2>{item.subtitle2}</h2>
                    <p>{item.intro}</p>
                  </div>
    })     
    
    const itemContact = items.map(function(item, index){
          return  <div key={index} className="contact-information">
                    <Row>
                      <Col lg="12" md="12" sm="12">
                          <div className="contact-details">
                            <div className="contact-icon">	
                              <i className="icofont-phone"></i>
                            </div>
                            <div className="contact-info">
                              <h6>{item.phoneTitle}</h6>
                              <p><a href={`tel:${item.phone1}`}>{item.phone1}</a>, <a href={`tel:${item.phone1}`}>{item.phone2}</a></p>
                            </div>
                          </div>
                      </Col>
                      <Col lg="12" md="12" sm="12">
                        <div className="contact-details">
                          <div className="contact-icon">	
                            <i className="icofont-location-pin"></i>
                          </div>
                          <div className="contact-info">
                            <h6>{item.addressTitle}</h6>
                            <p>{item.address}</p>
                          </div>
                        </div>
                      </Col>
                      <Col lg="12" md="12" sm="12">
                        <div className="contact-details">
                          <div className="contact-icon">	
                            <i className="icofont-envelope"></i>
                          </div>
                          <div className="contact-info">
                            <h6>{item.mailTitle}</h6>
                            <p><a href={`mailto:${item.mail1}`}>{item.mail1}</a>
                              <br /><a href={`mailto:${item.mail2}`}>{item.mail2}</a></p>
                            <p></p>
                          </div>
                        </div>
                      </Col>
                      <Col lg="12" md="12" sm="12">
                        <div className="contact-details">
                          <div className="contact-icon">	
                            <i className="icofont-wall-clock"></i>
                          </div>
                          <div className="contact-info">
                            <h6>{item.hourlyTitle}</h6>
                            <p>{item.hourlyday} <br/>{item.hourlytime} <br/>{item.hourlytext}</p>
                            <p></p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
    })

    const nameForm = items.map(function(item, index){ 
      const Obj = item.nameForm 
      return Obj 
    })
    const mailForm = items.map(function(item, index){ 
      const Obj = item.mailForm 
      return Obj 
    })
    const sujetForm = items.map(function(item, index){ 
      const Obj = item.sujetForm 
      return Obj 
    })
    const messageForm = items.map(function(item, index){ 
      const Obj = item.messageForm 
      return Obj 
    })
    const boutonForm = items.map(function(item, index){ 
      const Obj = item.boutonForm 
      return Obj 
    })
    return (<div className="contact-section ptb-100">
              <Container>
                <div className="section-title">
                  { itemTitle }
                <Row className="align-items-center">
                  <Col lg="4">
                  { itemContact }
                  </Col>
                  <Col lg="8">
                    <div className="contact-form">
                      <p className="form-message"></p>
                      <br />
                      <Form id="contact-form" className="contact-form form" onSubmit={this.sendEmail}>
                      
                      <Row >
                      <Col lg="12" md="6">
                        <Form.Group controlId="formGridName">  
                            <Form.Control
                                type="text"
                                placeholder={nameForm}
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                      </Col>
                      <Col lg="12" md="6">
                        <Form.Group controlId="formGridEmail"> 
                          <Form.Control
                              type="email"
                              placeholder={mailForm}
                              name="email" 
                              value={email}
                              onChange={this.handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg="12" md="6">
                        <Form.Group controlId="formGridSubject"> 
                            <Form.Control
                                type="text"
                                placeholder={sujetForm}
                                name="subject"
                                value={subject}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                      </Col>
                      <Col lg="12" md="6">
                        <Form.Group controlId="exampleForm.message"> 
                            <Form.Control
                                as="textarea"
                                rows="3"
                                placeholder={messageForm}
                                name="message"
                                value={message}
                                onChange={this.handleChange}
                            />
                        </Form.Group> 
                      </Col>
                      <Col lg="12" md="6">
                        <button type="submit" className="default-btn" value="send">{boutonForm}</button>
                      </Col>
                    </Row>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
    );
  }
}

export default Info;
