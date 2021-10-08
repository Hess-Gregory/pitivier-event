import React, {Suspense} from "react";
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { textLimitValue } from 'helpers/formatter.js';
import { Clock } from 'components';

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      aboutObj: [],
      serviceObj: [],
      socmedObj: [],
      contactObj: []
    };
  }

  componentDidMount() {
   const API_URL  = process.env.REACT_APP_API_URL;
   const promises = Promise.all([
      fetch(API_URL + 'about'),
      fetch(API_URL + 'service'),
      fetch(API_URL + 'socmed'),
      fetch(API_URL + 'contact'),

  ]);

  promises
    .then((results) => 
      Promise.all( results.map(r => r.json()) )
    )
    .then( ([dataAbout, dataService, dataSocmed, dataContact]) => {
      this.setState({
            aboutObj: dataAbout, 
            serviceObj: dataService,
            socmedObj: dataSocmed,
            contactObj: dataContact
        })
    })
    .catch((error) => {
    console.log(error)
    });
  }

  render() {
    const about = this.state.aboutObj.map((item, index) => {
      const blogCourt = textLimitValue(item.desc, 420, '/about')
      return <div key={index} dangerouslySetInnerHTML={{ __html: blogCourt }} className="footer-about"></div>
    }) 
    
    const contact = this.state.contactObj.map((item, index) => {
      
      const phone = 'tel:"'+ item.phone1 +'"'
      const mail = 'mailto:"'+ item.mail1 +'"'

      return <div key={index}>
                <div className="footer-info-contact">	
                  <a className="footer-number" href={phone}>
                    {item.phone1}
                  </a>
                </div>
                <div className="footer-info-contact">	
                  <a href={mail}>
                    {item.mail1}
                    <br/>
                  </a>
                </div>
              </div>
    })     

    const service = this.state.serviceObj[3] && this.state.serviceObj.map((item, index) => {
      
      return <p key={index}>{item.title}</p>
    
    })


    const socmed = this.state.socmedObj.map((item, index) => {
      
      return  <li key={index}>
                <a href={ item.url } target="_blank"> <i className={ item.icon }></i>
                </a>
              </li>
    })

    const ladate = new Date()

    return (
          
            <Suspense fallback={<p>Chargement du footer...</p>}>
              <footer className="footer-area ptb-100">
                <Container>
                  <Row>
                    <Col lg="4" md="6" sm="12" className="footer-box-item">
                      <div className="single-footer-widget">
                        <div className="footer-heading">
                        <h3>A propos</h3>
                        <br />
                        { about }
                        </div>
                      </div>
                    </Col>
                    <Col lg="4" md="6" sm="12" className="footer-box-item">
                      <div className="single-footer-widget">
                        <div className="footer-heading">
                          <h3>Nos Services</h3>
                        <br />
                           <div> { service } </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg="4" md="6" sm="12" className="footer-box-item">
                      <div className="single-footer-widget">
                        <div className="footer-heading">
                          <h3>Contact Info</h3>
                          <br />
                          {contact}
                        </div>
                        <div className="footer-heading">
                          <h3>Suivez-nous</h3>
                          <br />
                          <ul className="footer-social">
                          { socmed }
                          </ul>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                  <Col lg="12" className="footer-box-item">
                  <div className="single-footer-widget">
                    <div className="footer-heading">
                      <h3><Clock/></h3>
                    </div>
                  </div>
                  </Col>
                  </Row>
                </Container>
              </footer>
              <div className="copyright-area">
                <Container>
                  <div className="row align-items-center">
                    <Col lg="6" md="6">
                      <p><a href="https://www.fullhestack.be" target="_blank">FULLHESTACK </a>
                       © 2020/{ladate.getFullYear()} - Designed by <a href="https://www.hess-gregory.be" target="_blank">HESS Gregory</a></p>
                    </Col>
                    <Col lg="6" md="6">
                      <ul>
                        <li> 
                          <Link to="/terms">
                            Terms & Conditions
                          </Link>
                        </li>
                        <li> 
                          <Link to="/policy">
                            Privacy Policy
                          </Link>
                        </li>
                      </ul>
                    </Col>
                  </div>
                </Container>
              </div>
            </Suspense>
            );
  }
}

export default Footer;

