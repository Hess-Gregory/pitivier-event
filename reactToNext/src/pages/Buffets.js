import React from 'react';
import { Carousel, Video, Sponsor, Menu } from 'components';


class Cards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			aboutObj: [],
			contactObj: [],
		  	headerObj: [],
		  	sponsorObj: [],
		  	cardBuffetObj: [],
		  	buffetObj: [],
		  	menudescObj: []
		};
	  }
	
	  componentDidMount() {
	   const API_URL = process.env.REACT_APP_API_URL;
	   const promises = Promise.all([
			fetch(API_URL + 'about'),
			fetch(API_URL + 'contact'),
			fetch(API_URL + 'header'),
			fetch(API_URL + 'sponsor'),
			fetch(API_URL + 'cardbuffet'),
			fetch(API_URL + 'buffet'),
			fetch(API_URL + 'buffetdesc')
		]);
	
		promises
		  .then((results) => 
			Promise.all( results.map(r => r.json()) )
		  )
		  .then( ([dataAbout, dataContact, dataHeader, dataSponsor, dataCardbuffet, dataBuffet, dataBuffetdesc]) => {
			  this.setState({
				aboutObj: dataAbout, 
				contactObj: dataContact,
				headerObj: dataHeader, 
				sponsorObj: dataSponsor,
				cardBuffetObj: dataCardbuffet, 
				buffetObj: dataBuffet, 
				menudescObj: dataBuffetdesc
			})
		  })
		  .catch((error) => {
			console.log(error)
		  });
	  }

  render() {
	  return (
	    <div  className="menu">
		<Carousel 
			items={ this.state.headerObj }
			path="cartes"
		/>
		<Menu 
			cards={ this.state.cardBuffetObj }
			menus={ this.state.buffetObj }
			menudesc={ this.state.menudescObj }
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

export default Cards;