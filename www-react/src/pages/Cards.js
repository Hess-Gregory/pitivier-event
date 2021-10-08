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
		  	cardObj: [],
		  	menuObj: [],
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
			fetch(API_URL + 'card'),
			fetch(API_URL + 'menu'),
			fetch(API_URL + 'menudesc')
		]);
	
		promises
		  .then((results) => 
			Promise.all( results.map(r => r.json()) )
		  )
		  .then( ([dataAbout, dataContact, dataHeader, dataSponsor, dataCard, dataMenu, dataMenudesc]) => {
			  this.setState({
				aboutObj: dataAbout, 
				contactObj: dataContact,
				headerObj: dataHeader, 
				sponsorObj: dataSponsor,
				cardObj: dataCard, 
				menuObj: dataMenu, 
				menudescObj: dataMenudesc
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
			cards={ this.state.cardObj }
			menus={ this.state.menuObj }
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