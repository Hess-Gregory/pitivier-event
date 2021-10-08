import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import imageUrl from 'constants/imageUrl';
import ModalVideo from 'react-modal-video'
import getVideoId from 'get-video-id';

class Video extends React.Component {



  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }


  openModal(){
 
    this.setState({isOpen: true})
  }
  closeModal(){

    this.setState({isOpen: false})
  }

  render() {

    const thisOpen = this.state.isOpen

    const modalOpen = this.openModal
    const modalClose = this.closeModal

    const itemsParralax = this.props.parralax;
    const itemsInfos = this.props.contact;

    const styleParralax = itemsParralax.map(function(item, index){
      let imageURL = imageUrl.About + item.image4;
      let proprietyCss = 
        'position: relative;'+
        'z-index: 1;'+
        'padding: 70px 0;'+
        'background: url(' + imageURL + ');' +
        'background-repeat: no-repeat;' +
        'background-size: cover;'+
        'background-position: center center;'+
        'background-attachment: fixed;';
      let cssConstructor =  ".video-opening-hours-area {" + proprietyCss + "}"
        
     return   <style key={index} type="text/css">
                  {cssConstructor}
              </style>
    })    

    const itemContact = itemsInfos.map(function(item, index){

        const video = getVideoId(item.videourl);
        const videoIdentity = video.id;
        const videoService = video.service;

      return <Row key={index} className="d-flex align-items-center">
                <Col lg="6" md="4">
                  <div className="video-box">
                  
                  <React.Fragment>
                  <ModalVideo channel={videoService} isOpen={thisOpen} videoId={videoIdentity} onClose={modalClose } />
                    <a onClick={modalOpen} className="video-btn popup-youtube">
                      <img src="assets/img/play-button-light.svg" alt="play button icon" />
                    </a>
                </React.Fragment>
                  

                    <h3>{item.videotitle}</h3>
                  </div>
                </Col>
                <Col lg={{ size: 5, offset: 1 }} md="8">
                  <div className="store-location-opening-hours-box">
                    <div className="contact-opening-hours-title">
                      <h3>{item.title1}</h3>
                      <h4>{item.subtitle1}</h4>
                    </div>
                    <Row>
                      <Col md="12">
                        <div className="single-store-location">
                          <h3>{item.name}</h3>
                          <h6>Email: 
                            <Link to={item.mail1}>
                            {item.mail1}
                            </Link>
                          </h6>
                          <h6>Phone: 
                            <Link to={item.phone1}>
                            {item.phone1}
                            </Link>
                          </h6>
                          <p>{item.address}</p>
                        </div>
                        <div className="opening-hours-box">
                          <h6 className="day">{item.hourlyday}</h6> 	
                          <span className="time">{item.hourlytime}</span>
                          <p>{item.hourlytext}</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
    })    

    return (	
              <section className="video-opening-hours-area">
                  {styleParralax}
                <Container>
                  {itemContact}
                </Container>
              </section> 
            );
  }
}

export default Video;
