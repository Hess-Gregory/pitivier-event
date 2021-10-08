import React from "react";
import { Row, Col } from 'reactstrap';


class Testimonydescs extends React.Component {



  render() {
    const items = this.props.items;
    const itemTestimonydesc = items.map(function(item, index){
    return <div key={index} className="section-title">
              <h5 dangerouslySetInnerHTML={{__html: item.introdesc}}></h5>
              <h2>{ item.titledesc }</h2>
            </div> 

    })

    return (
              <Row>
                <Col md="12">
                  { itemTestimonydesc }
                </Col>
              </Row>      
            );
  }
}

export default Testimonydescs;
