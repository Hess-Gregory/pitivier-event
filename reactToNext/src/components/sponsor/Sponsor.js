import React from "react";
import imageUrl from 'constants/imageUrl';
import { Container, Row, Col } from 'reactstrap';

class Sponsor extends React.Component {
  render() {

    const items         = this.props.sponsors;
    const itemSponsor   = items.map(
      function(item, index){
        
      let imageURL = imageUrl.sponsor + item.image;
     
        return  <Col key={index} lg="3" md="6" sm="12">
                  <a href={item.url}>
                    <div className="single-press-content">
                      <h3>{item.title}</h3>
                      <img src={imageURL} alt={item.alt} />
                    </div>
                  </a>
                </Col>

          
    })

    return (
        <section className="sponsor-area section-padding">
            <Container>
                <Row>
                  {itemSponsor}
                </Row>
            </Container>
        </section>
    );
  }
}

export default Sponsor;
