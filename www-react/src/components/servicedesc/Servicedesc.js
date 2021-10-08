import React from "react";
import { Col } from 'reactstrap';


class Servicedescs extends React.Component {



  render() {
    const items = this.props.items;
    const itemServicedesc = items.map(function(item, index){
    return  <div  key={index} className="section-title">
              <h5 className="small-title" dangerouslySetInnerHTML={{__html: item.introdesc}}></h5>
              <h2>{ item.titledesc }</h2>
            </div>
    })    

    return (
      <Col md="12">
        { itemServicedesc }
      </Col>      

    );
  }
}

export default Servicedescs;
