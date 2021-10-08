import React from 'react';
import { Carousel, Info, Video, Sponsor  } from 'components';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		aboutObj: [],
		contactObj: [],
		headerObj: [],
		sponsorObj: []
    };
  }

  componentDidMount() {
   const API_URL = process.env.REACT_APP_API_URL;
   const promises = Promise.all([
	fetch(API_URL + 'about'),
	fetch(API_URL + 'contact'),
	fetch(API_URL + 'header'),
	fetch(API_URL + 'sponsor')
	]);

	promises
	  .then((results) => 
	    Promise.all( results.map(r => r.json()) )
	  )
	  .then( ([dataAbout, dataContact, dataHeader, dataSponsor]) => {
	  	this.setState({
			aboutObj: dataAbout, 
			contactObj: dataContact,
			headerObj: dataHeader, 
			sponsorObj: dataSponsor
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
			items={ this.state.headerObj }
			path="contact"
			/>
			<Info
			items={ this.state.contactObj }
			/>
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

export default Contact;