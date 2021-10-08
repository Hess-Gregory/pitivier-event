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
  Row,
  Spinner,
  Label
} from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation-safe';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { authActions } from 'stores';
import { ControlledAlert } from 'components';
import {AES, enc}from 'crypto-js';
import { images } from 'helpers';
const secretEncrypt = "je suis le secret de sandrine. 1981";
const divStyle = {
  height: 130
};


class Login extends Component {
  state={
    email: '',
    rememberMe: false
  }

  constructor(props){
    super(props);
    this.state={
      email: '',
      password: '',
      authenticated: false
    }
  }

  handleSubmit = (event) => {
    event.persist();

        const { email, password, rememberMe } = this.state;

        const envryptedString = AES.encrypt(password,secretEncrypt);
        const encryptedPassword = envryptedString.toString();

        sessionStorage.setItem('rememberMe', rememberMe);
        sessionStorage.setItem('email', rememberMe ? email : '');
        sessionStorage.setItem('encryptedPassword', rememberMe ? encryptedPassword : '');


    if (email && password) {
        this.props.login(email, password )
    }
  }

  handleInputChange = event => {
    const target = event.target;
    const field  =  target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;


    this.setState({
        [field]:  value
    });
  }

  componentDidMount(){
      let now       = new Date(),
          token     = localStorage.getItem("token"),
          jsonToken = JSON.parse(token);
      now.setHours(now.getHours())

      const rememberMe = sessionStorage.getItem('rememberMe') === 'true';
      const email = rememberMe ? sessionStorage.getItem('email') : '';
      const encryptedPassword = sessionStorage.getItem('encryptedPassword');
      const decrypted = encryptedPassword ?  AES.decrypt(encryptedPassword, secretEncrypt): '';
      const decryptedString = decrypted ?   decrypted.toString(enc.Utf8) : '';
      const password = encryptedPassword ? decryptedString : '';


      // console.log('mot de passe encrypté: ', sessionStorage.getItem('encryptedPassword'))
      // console.log('mot de passe décrypté: ', decryptedString)
      
      this.setState({ email, password, rememberMe });

    if(token && jsonToken['status'] === true && new Date(jsonToken['expire']) > now){
      this.setState({ email, rememberMe, authenticated: true });
    }
  }



  render() {
    const { alert, auth, theme } = this.props;
    // prevent access from authenticated user
    if(this.state.authenticated === true) {
      return <Redirect to={{
          pathname: '/dashboard',
        }} />
    } else {
      return (
          <div className={'app flex-row align-items-center loginbg-' + theme} >
            <Container>
              <Row className="justify-content-center">
                <Col md="8">
                  <CardGroup>
                    <Card className={'p-4 login-' + theme} >
                      <CardBody>
                        <AvForm id="loginForm" method="post" onValidSubmit={this.handleSubmit}>
                          <h1>Connectez-vous</h1>
                          <p className="text-muted">Connectez-vous à votre compte</p>
                          <ControlledAlert message={alert.message} context="login" color={alert.color} visible={alert.visible} />
                          <AvGroup className={"mb-3 input-group form-group-"+ theme}>
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

                              className={"form-"+ theme}
                            />
                            <AvFeedback>Adresse email non valable</AvFeedback>
                          </AvGroup>
                          <AvGroup className={"mb-4 input-group form-group-"+ theme}>
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
                              placeholder="Mot de passe"
                              autoComplete="current-password"
                              className={"form-"+ theme}
                            />
                            <AvFeedback>Mot de passe non valable</AvFeedback>
                          </AvGroup>
                          
                            <AvGroup className={"mb-4 input-group form-group-"+ theme}>
                              <AvInput 
                              type="checkbox" 
                              name="rememberMe" 
                              id="rememberMe"
                              placeholder="Se souvenir de moi"
                              checked={this.state.rememberMe} 
                              onChange={this.handleInputChange}
                              className={"form-"+ theme}
                              style={{marginLeft: "0rem"}}
                              />
                              <Label check for="rememberMe"
                              style={{marginLeft: "1.25rem"}}> Se souvenir de moi</Label>
                          </AvGroup>
                          <Row>
                            <Col xs="6">
                              <Button color="primary" className="px-4" disabled={auth.loggingIn}>
                              { auth.loggingIn && <Spinner size="sm" color="light" /> }
                              <span> </span>
                              Valider
                              </Button>
                            </Col>
                          </Row>
                        </AvForm>
                      </CardBody>
                    </Card>
                    <Card className={'py-5 loginbis-' + theme} >
                        <h2>FULLHESTACK CMS</h2>
                      <CardBody>
                        <p>FULLHESTACK vous remercie pour votre confiance.</p>
                        <img src={images.logofhk_group} style={divStyle}  alt=""/>
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
    alert: state.alert,
    theme: state.theme.theme
  }
}

const mapDispatchToProps = {
  login: authActions.login
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
