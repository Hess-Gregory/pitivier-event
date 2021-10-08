import React from "react";
import { Row, Col } from 'reactstrap';


class Postdescs extends React.Component {



  render() {
    const items = this.props.items;
    const itemPostdesc = items.map(function(item, index){
    return <Col key={index} md={{size: 6, offset: 3 }}  className="text-center fh5co-heading animate-box">
              <h2>{ item.titledesc }</h2>
              <div dangerouslySetInnerHTML={{__html: item.introdesc}}  />
            </Col>
    })

    return (
    <Row>
      { itemPostdesc }
    </Row>      

    );
  }
}

export default Postdescs;
