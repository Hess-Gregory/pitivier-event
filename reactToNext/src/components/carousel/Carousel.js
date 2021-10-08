import React from "react";
import imageUrl from 'constants/imageUrl';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import {Helmet} from "react-helmet";

class MainBanner extends React.Component {
  constructor(props) {
		super(props);
	    this.state = {
	      configurationObj: []
	    }; 
	}
  componentDidMount() {
   const API_URL = process.env.REACT_APP_API_URL;
   const promises = Promise.all([
      fetch(API_URL + 'configuration')
  ]);

  promises
    .then((results) => 
      Promise.all( results.map(r => r.json()) )
    )
    .then( ([dataConfiguration]) => {
      //this.toggleNavbar = this.toggleNavbar.bind(this);
      this.setState({
            configurationObj: dataConfiguration
        })
    })
    .catch((error) => {
    console.log(error)
    });
  }  
  render() {
    const configurations = this.state.configurationObj;
    console.log('carousel config state', configurations);
    const items        = this.props.items;
    const path         = this.props.path;
    const banner_img = configurations.map(function(objet){
      let imageURL = imageUrl.configuration + objet.logo3;
      return imageURL
    })
    const alt_1 = configurations.map(function(objet){
      return objet.alt
    })

    const itemMainBanner = items.map( function(item, index){
        
      let imageURL = imageUrl.header + item.image;

      if (path === item.page){

      if (path !== "home")
        {
      console.log('item carousel:', item.tagline)
          return  <div key={index} className="page-title-area" style={{backgroundImage: "url(" + imageURL + ")"}} title={ item.alt }>
                    <div className="d-table">
                      <div className="d-table-cell">
                        <Container>
                          <div className="page-title-content">
                          
                            <h2>{ item.tagline }</h2>
                            <ul>
                              <li><a href="/">Home</a>
                              </li>
                              <li>{ item.tagline }</li>
                            </ul>
                          </div>
                        </Container>
                      </div>
                    </div>
                    <Helmet>
                      <title>blabla 1: {item.tagline}</title>
                      <link rel="canonical" href="http://mysite.com/example" />
                  </Helmet>
                  </div>

        }
      else if (path === "home") 
      {
        return  <div key={index} className="home-area" style={{backgroundImage: "url(" + imageURL + ")"}} title={ item.alt }>
                  <div className="d-table">
                    <div className="d-table-cell">
                      <Container>
                        <Row className="align-items-center">
                          <Col lg={{size: 8, offset: 2 }} md="12">
                            <div className="main-banner-content text-center">
                             <img src={banner_img} alt={alt_1}/>
                              <h1>{ item.tagline }</h1>
                              <div className='h5' dangerouslySetInnerHTML={{ __html: item.tagdesc }}></div>
                              <div className="banner-btn">
                                <Link className="default-btn-one" to={ item.btn1url }>
                                  { item.btn1name }
                                </Link>
                                <Link className="default-btn" to={ item.btn2url }>
                                  { item.btn2name }
                                </Link>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </div>
                  <Helmet>
                    <title>{item.tagline}</title>
                </Helmet>
                </div>
      }
      

      }
      return  null
          
    })

    return (
      <>
            { itemMainBanner }
      </>
    );
  }
}

export default MainBanner;
