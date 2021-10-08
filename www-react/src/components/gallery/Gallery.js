import React from "react";
import { Container, Row, Col } from 'reactstrap';
import imageUrl from 'constants/imageUrl';
import {Filter, Image } from './index';


class Gallery extends React.Component {
      
  state = {
    activeIndex: 0,
    activeNameGalerie: 'all'
   }

handleCallbackIndex = (childData) =>{
    this.setState({activeIndex: childData})
}
handleCallbackName = (childData) =>{
    this.setState({activeNameGalerie: childData})
}
  render() {

	// ---------------------------------
	// ------Construction of title------
	// ---------------------------------

	const title = 
		this.props.title.map(function(desc, index){
			return  <div key={index} className="section-title">
						<h5>{ desc.introdesc }</h5>
						<h2>{ desc.titledesc }</h2>
					</div>	
		})

const {name} = this.state;

    return (<section id="gallery" className="gallery-area section-padding">
                <Container>
                  <Row>
                    <Col lg="12" md="12">
                    {title}
                    </Col>
                  </Row>
                  <Row>
                    <Filter 
                    items={ this.props.filter }
                    parentCallbackIndex = {this.handleCallbackIndex}
                    parentCallbackName = {this.handleCallbackName}
                    returnIndex = {this.state.activeIndex}
                    returnName = {this.state.activeNameGalerie}
                    />
                    <Image 
                    items={ this.props.medias }
                    returnIndex = {this.state.activeIndex}
                    returnName = {this.state.activeNameGalerie}
                    />
                  </Row>
                </Container>
            </section>
      
    );
  }
}

export default Gallery;