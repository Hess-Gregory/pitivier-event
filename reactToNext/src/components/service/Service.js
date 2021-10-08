import React from "react";
import { Servicedesc, Parralax } from 'components';
import { Container, Row, Col } from 'reactstrap';


class Services extends React.Component {
  constructor(props) {
		super(props);
	    this.state = {
	      servicedescObj: [],
        page: 'services',
        folderImage: 'servicedesc'
	    };
      
	}

  componentDidMount() {
   const API_URL = process.env.REACT_APP_API_URL;
   const promises = Promise.all([
      fetch(API_URL + 'servicedesc')
  ]);

  promises
    .then((results) => 
      Promise.all( results.map(r => r.json()) )
    )
    .then( ([dataServicedesc]) => {
      this.setState({
            servicedescObj: dataServicedesc
        })
    })
    .catch((error) => {
    console.log(error)
    });
  }  
  onInputChange(e) {
    this.setState({ inputVal: e.target.value });
  }
  render() {
    
    const items = this.props.items;
    const itemService = items.map(function(item, index){
      return <Col key={index}  lg="4" md="6" sm="12">
                <div className="single-services-item">
                  <div className="services-icon">
                    <i className={ item.icon }></i>
                  </div>
                  <div className="services-info">
                    <h6>{ item.title }</h6>
                    <p>{ item.desc }</p>
                  </div>
                </div>
              </Col>
    })
    return (
          <section id="services" className="services-area section-padding">
            <Parralax  
              page={this.state.page} 
              folderImage={this.state.folderImage}
              items={ this.state.servicedescObj} 
            /> 
            <Container>
              <Row className="d-flex align-items-center">      
                <Servicedesc
                  items={ this.state.servicedescObj }
                />
                { itemService }
              </Row>
            </Container>
          </section>    

    );
  }
}

export default Services;
