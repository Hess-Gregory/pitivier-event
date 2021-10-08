import React from 'react';
import { Carousel, Service } from 'components';

class Feature extends React.Component {
  	constructor(props) {
		super(props);
	    this.state = {
	      carouselObj: [],
	      serviceObj: []
	    };
	}

	  componentDidMount() {
	   const API_URL = process.env.REACT_APP_API_URL;
	   const promises = Promise.all([
		  fetch(API_URL + 'header/page/feature'),
	      fetch(API_URL + 'service')
		]);

		promises
		  .then((results) => 
		    Promise.all( results.map(r => r.json()) )
		  )
		  .then( ([dataCarousel, dataService]) => {
		  	this.setState({
	            carouselObj: dataCarousel,
	            serviceObj: dataService
	        })
		  })
		  .catch((error) => {
			console.log(error)
		  });
	  }
  render() {
	return (
	    <div id="fh5co-page">
	          <Carousel 
	          	items={ this.state.carouselObj }
	          	path="header"
	          />
	          <Service
	          	items={ this.state.serviceObj }
	          />
	    </div>
	  );
	}
}

export default Feature;