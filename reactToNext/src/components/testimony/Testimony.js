import React from "react";
import imageUrl from 'constants/imageUrl';
import { Testimonydesc } from 'components';
import { Carousel } from 'react-responsive-carousel';
import { Container, Row, Col } from 'reactstrap';

import "react-responsive-carousel/lib/styles/carousel.min.css";

class Testimony extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      testimonydescObj: []
    }
  }

  componentDidMount() {
    const API_URL = process.env.REACT_APP_API_URL;
    const promises = Promise.all([
       fetch(API_URL + 'testimonydesc')
   ]);
 
   promises
     .then((results) => 
       Promise.all( results.map(r => r.json()) )
     )
     .then( ([dataTestimonydesc]) => {
       this.setState({
        testimonydescObj: dataTestimonydesc
         })
     })
     .catch((error) => {
     console.log(error)
     });
   }  
  onchange(value) {
    this.setState({ value });
  }

  render() {
    const items = this.props.items;
    const itemTestimony = items.map(function(item, index){
      let imageURL = imageUrl.testimony + item.image



          return <div className="single-testimonial" key={index}>
                  <div className="testi-content-inner">
                    <div className="testimonial-bio">
                      <div className="avatar">
                        <img src={ imageURL } alt={ item.alt } />
                      </div>
                      <div className="bio-info">
                        <h3 className="name">{ item.username }</h3><span>{ item.position }</span>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p dangerouslySetInnerHTML={{__html: item.comment }}></p>
                    </div>
                    <div className="rating-box">
                      <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
    })

    return (<section id="review" className="testimonial-area section-padding">
              <Container>
                <Testimonydesc
                  items={ this.state.testimonydescObj }
                />
                <Row>
                  <Col lg={{size: 8, offset: 2 }} md="12">
                    <Carousel id="testimonial-slide" className="owl-carousel owl-theme owl-loaded owl-drag" infiniteLoop  showArrows="false"  interval="3000" autoPlay >
                      {itemTestimony}
                    </Carousel>  
                  </Col>
                </Row>
              </Container>
              
            </section>

    );
  }
}

export default Testimony;
