import React from "react";
import { Container, Row, Col } from 'reactstrap';
import imageUrl from 'constants/imageUrl';
import { Link } from 'react-router-dom';

class About extends React.Component {
  constructor(props) {
		super(props);
	    this.state = {
	      aboutObj: []
	    };
	}

  componentDidMount() {
   const API_URL = process.env.REACT_APP_API_URL;
   const promises = Promise.all([
      fetch(API_URL + 'about')
  ]);

  promises
    .then((results) => 
      Promise.all( results.map(r => r.json()) )
    )
    .then( ([dataAbout]) => {
      this.setState({
            aboutObj: dataAbout
        })
    })
    .catch((error) => {
    console.log(error)
    });
  }  
  render() {
    const items = this.props.items;
    const home = this.props.home;
    
    const bouton = items.map(function(item){
      return item.bouton
    })
    const itemAbout = items.map(function(item, index){
      if (home){
        return <div key={index}  className="about-content">
                  <div className="about-content-text" >
                    <h5>{item.title}</h5>
                    <h2>{item.subtitle}</h2>
                    <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                    <div className="about-more-btn">	
                      <Link className="default-btn" to="/about">{bouton}</Link>
                    </div>
                  </div>
                </div>

      }else{
        return <div key={index}  className="about-content">
                  <div className="about-content-text" >
                    <h5>{item.title}</h5>
                    <h2>{item.subtitle}</h2>
                    <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                  </div>
                </div>
      }

    })
    const itemImage1 = items.map(function(item, index){
      let imageURL = imageUrl.About + item.image1;
      return <div className="about-img" key={index}>
                <div className="about-img-1">
                  <img src={imageURL} alt={item.alt1} />
                </div>
              </div>
    })
    const itemImage2 = items.map(function(item, index){
      let imageURL = imageUrl.About + item.image2;
      return <div className="about-img" key={index}>
                <div className="about-img-2">
                  <img src={imageURL} alt={item.alt2} />
                </div>
              </div>
    })
    const itemImage3 = items.map(function(item, index){
      let imageURL = imageUrl.About + item.image3;
      return <div className="about-img" key={index}>
                <div className="about-img-2">
                  <img src={imageURL} alt={item.alt3} />
                </div>
              </div>
    })
    return (
      <section id="about" className="about-area section-padding">
        <Container>
          <Row>
            <Col lg="6" md="12" sm="12">
              {itemAbout}
            </Col>
            <Col lg="6" md="12" sm="12">
              <div className="about-image-box">
                <Row>
                  <Col md="12">
                    {itemImage1}
                  </Col>
                  <Col md="6">
                    {itemImage2}
                  </Col>
                  <Col md="6">
                    {itemImage3}
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default About;
