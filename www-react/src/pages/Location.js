import React from 'react';
import { Carousel, Video, Sponsor } from 'components';
import { Container, Row, Col } from 'reactstrap';


class Locations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headerObj: [],
			aboutObj: [],
			contactObj: [],
			sponsorObj: [],
			locationObj: [],
			materieldescObj: [],
			materielitemObj: [],
			salledescObj: [],
			salleitemObj: [],
			vehiculedescObj: [],
			vehiculeitemObj: []
		};
	  }
	
	  componentDidMount() {
	   window.scrollTo(0,0);
	   const API_URL = process.env.REACT_APP_API_URL;
	   const promises = Promise.all([
		fetch(API_URL + 'header'),
		fetch(API_URL + 'about'),
		fetch(API_URL + 'contact'),
		fetch(API_URL + 'sponsor'),
		fetch(API_URL + 'location/location'),
		fetch(API_URL + 'location/materieldesc'),
		fetch(API_URL + 'location/materielitem'),
		fetch(API_URL + 'location/salledesc'),
		fetch(API_URL + 'location/salleitem'),
		fetch(API_URL + 'location/vehiculedesc'),
		fetch(API_URL + 'location/vehiculeitem')
		]);
	
		promises
		  .then((results) => 
			Promise.all( results.map(r => r.json()) )
		  )
		  .then( ([dataHeader, dataAbout, dataContact,  dataSponsor, dataLocation,dataMaterieldesc,dataMaterielitem,dataSalledesc,dataSalleitem, dataVehiculedesc,dataVehiculeitem]) => {
			  this.setState({
				headerObj: dataHeader,
				aboutObj: dataAbout, 
				contactObj: dataContact,
				sponsorObj: dataSponsor,
				locationObj: dataLocation,
				materieldescObj: dataMaterieldesc,
				materielitemObj: dataMaterielitem,
				salledescObj: dataSalledesc,
				salleitemObj: dataSalleitem,
				vehiculedescObj: dataVehiculedesc,
				vehiculeitemObj: dataVehiculeitem
			})
		  })
		  .catch((error) => {
			console.log(error)
		  });
	  }
	

  render() {
	const headerdesc = this.state.headerObj;
	const header_desc = headerdesc.map(function(item, index){
		if ("locations" === item.page){
      return 	<div key={index} className="section-title location text-center ">
					<h2>{item.tagdesc.replace(/<(?:.|\n)*?>/gm, '')}</h2>
				</div>

		}
})

    const materieldesc = this.state.materieldescObj;
	const materiel_desc = materieldesc.map(function(item, index){
      return 	<div key={index} className="section-title">
					<div className="services-icon">
						<i class="icofont-culinary" >
							<br/>
							<h5 className="text-center">{item.title}</h5>
						</i>
					</div><br/>
					<div className="text-justify"  dangerouslySetInnerHTML={{__html: item.content}}></div>
				</div>
})




    const vehiculedesc = this.state.vehiculedescObj;
	const vehicule_desc = vehiculedesc.map(function(item, index){
      return 	<div key={index} className="section-title">
					<div className="services-icon">
						<i class="fa fa-car" >
							<br/>
							<h5 className="text-left">{item.title}</h5>
						</i>
					</div>
	  
					<div className="text-justify"  dangerouslySetInnerHTML={{__html: item.content}}></div>
				</div>
})
	      
    

    const salledesc = this.state.salledescObj;
	const salle_desc = salledesc.map(function(item, index){
      return 	<div key={index} className="section-title">
					<div className="services-icon">
						<i class="fa fa-home" >
							<br/>
							<h5 className="text-left">{item.title}</h5>
						</i>
					</div>
					<div  className="text-justify"  dangerouslySetInnerHTML={{__html: item.content}}></div>
					<br />
					<h5 className="text-center text-underline"><u>{item.titlelist} :</u></h5>
				</div>
})
	      
    const salleitem = this.state.salleitemObj;
    const salle_item = salleitem.map(function(item, index){
      return <Col key={index}  lg="6" md="6" sm="12">
                <div className="single-services-item">
                  <div className="services-info">
				  <Row>
				  <Col lg="12" md="12" sm="12">
						<div className="contact-details">
							<div className="contact-info">
								<h6>Salle "{ item.name }"</h6>
							</div>
						</div>
				  </Col>
				  <Col lg="12" md="12" sm="12">
					<div className="contact-details">
					  <div className="contact-icon">	
						<i className="icofont-location-pin"></i>
					  </div>
					  <div className="contact-info">
						<p>{item.address}</p>
					  </div>
					</div>
				  </Col>
				  <Col lg="12" md="12" sm="12">
					  <div className="contact-details">
						<div className="contact-icon">	
						  <i className="icofont-phone"></i>
						</div>
						<div className="contact-info">
						  <p>
						  <a href={`tel:${item.phone}`}>{item.phone}</a>
						  <br />
						  <a href={`tel:${item.phone2}`}>{item.phone2}</a>
						  </p>
						</div>
					  </div>
				  </Col>
				  <Col lg="12" md="12" sm="12">
					<div className="contact-details">
					  <div className="contact-icon">	
						<i className="icofont-web"></i>
					  </div>
					  <div className="contact-info">
						<p><a href={`http://${item.mail}`} target="_blank">{item.website}</a></p>
					  </div>
					</div>
				  </Col>
				  <Col lg="12" md="12" sm="12">
					<div className="contact-details">
					  <div className="contact-icon">	
						<i className="icofont-envelope"></i>
					  </div>
					  <div className="contact-info">
						<p><a href={`mailto:${item.mail}`}>{item.mail}</a></p>
					  </div>
					</div>
				  </Col>
				  <Col lg="12" md="12" sm="12">
					<div className="contact-details">
					  <div className="contact-icon">	
						<i className="icofont-info"></i>
					  </div>
					  <div className="contact-info">
						<p>{item.info}</p>
					  </div>
					</div>
				  </Col>
				  </Row>
                  </div>
                </div>
              </Col>
    })
	  return (	
		  
	    <div id="fh5co-page">
		<Carousel 
			items={ this.state.headerObj }
			path="locations"
		/>
		
		<section className="section-padding">
			<Container>
			<Row>
				<Col lg={{ size: 6, offset: 3 }}>
					<div className="section-title">
						{ header_desc }
					</div>
				</Col>
			</Row>
				<Row>
					<Col lg="12">
						<Row>
							<Col lg="6">
								<div className="section-title">
									{ materiel_desc }
								</div>
							</Col>
							<Col lg="6">
								<div className="section-title">
									{ vehicule_desc }
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col lg="12">
						<Row>
							<Col lg={{ size: 6, offset: 3 }}>
								<div className="section-title">
									{ salle_desc }
								</div>
							</Col>
							<Row className=" equal ">
								{ salle_item }
							</Row>
						</Row>
					</Col>
				</Row>
			</Container>

		</section>   
		<Video
			contact={ this.state.contactObj }
			parralax={ this.state.aboutObj }
		/>
		<Sponsor
			sponsors={ this.state.sponsorObj }
		/>
		
		</div>

	  );
	}
}
export default Locations;