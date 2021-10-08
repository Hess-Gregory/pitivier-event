import React, { Component } from 'react';
import { 
  Button, 
  Card, 
  CardBody, 
  CardGroup, 
  Col, 
  Container,
  InputGroupAddon, 
  InputGroupText, 
  Row
} from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { authActions } from 'stores';
import { ControlledAlert } from 'components';
// import {toastr} from 'react-redux-toastr'

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email: '',
      password: '',
      authenticated: false,
    }
  }

  handleSubmit = (event) => {
    event.persist();

    const { email, password } = this.state;
    if (email && password) {
        this.props.login(email, password)
    }
  }

  handleInputChange = event => {
    const target = event.target;
    const field  =  target.name;
    const value  = target.value

    this.setState({
        [field]:  value
    });
  }

  componentDidMount(){
    let now     = new Date(),
      token     = localStorage.getItem("token"),
      jsonToken = JSON.parse(token);
      now.setHours(now.getHours())

    if(token && jsonToken['status'] === true && new Date(jsonToken['expire']) > now){
      this.setState({ authenticated: true });
    } 
  }

  

  render() {
    const { alert, auth } = this.props;
    // prevent access from authenticated user
    if(this.state.authenticated === true) {
      return <Redirect to={{
          pathname: '/dashboard',
        }} />
    } else {
      return (
          <div className="app flex-row align-items-center" style={{ backgroundColor: '#0a0b18' }}>
            <Container>
              <Row className="justify-content-center">
                <Col md="6">
                  <CardGroup>
                    <Card className="p-4 login-card">
                      <CardBody style={{ }}>
                        <AvForm id="loginForm" method="post" onValidSubmit={this.handleSubmit}>
                          <h1>Login</h1>
                          <p className="text-muted">Sign In to your account</p>
                          <ControlledAlert message={alert.message} context="login" color={alert.color} visible={alert.visible} />
                          <AvGroup className="mb-3 input-group">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-user"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <AvInput 
                              required
                              label="Email"
                              name="email"
                              value={this.state.email}
                              onChange={this.handleInputChange}
                              type="email"
                              placeholder="Email" 
                              autoComplete="email" 
                            />
                            <AvFeedback>Invalid email address</AvFeedback>
                          </AvGroup>
                          <AvGroup className="mb-4 input-group">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-lock"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <AvInput 
                              required
                              label="Password"
                              type="password"
                              name="password"
                              value={this.state.password}
                              onChange={this.handleInputChange}
                              id="password"
                              placeholder="Password" 
                              autoComplete="current-password" 
                            />
                            <AvFeedback>Invalid password</AvFeedback>
                          </AvGroup>
                          <Row>
                            <Col xs="6">
                              <Button color="primary" className="px-4" disabled={auth.loggingIn}>Login</Button>
                            </Col>
                          </Row>
                        </AvForm>
                      </CardBody>
                    </Card>
                  </CardGroup>
                </Col>
              </Row>
            </Container>
          </div>
      );
    }
    
  }
}


const mapStateToProps = state => {
  return {
    auth: state.auth,
    alert: state.alert
  }
}

const mapDispatchToProps = {
  login: authActions.login
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)