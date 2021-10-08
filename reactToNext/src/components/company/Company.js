import React from "react";
import imageUrl from 'constants/imageUrl';
import { Container, Col } from 'reactstrap';

class Company extends React.Component {
  render() {
    const items = this.props.items;
    const itemCompany = items.map(function(item, index){
      let imageURL = imageUrl.company + item.image;
          return  <div key={index} className="fh5co-about animate-box">
                    <Col md={{size: 6, offset: 3 }}  className="text-center fh5co-heading">
                      <h2>{ item.title }</h2>
                      <p> { item.desc } </p>
                    </Col>  
                    <Container>
                      <Col md="12" className="animate-box">
                        <figure>
                          <img src={ imageURL } alt="company" className="img-responsive" />
                        </figure>
                      </Col>
                    </Container>
                  </div>
    })
    
    return (
      <div>
        { itemCompany }
      </div>
    );
  }
}

export default Company;
