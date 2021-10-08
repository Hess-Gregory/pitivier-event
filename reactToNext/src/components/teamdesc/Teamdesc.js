import React from "react";
import { Col } from 'reactstrap';


class Teamdescs extends React.Component {



  render() {
    const items = this.props.items;
    const itemTeamdesc = items.map(function(item, index){

    return  <div className="section-title" key={index}>
              <h5 dangerouslySetInnerHTML={{__html: item.introdesc}}></h5>
              <h2>{ item.titledesc }</h2>
            </div>

    })

    return (  <Col md="12">
                { itemTeamdesc }
              </Col> 

    );
  }
}

export default Teamdescs;
