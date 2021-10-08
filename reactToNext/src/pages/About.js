import React from 'react';
import { About, Carousel, Team, Video, Testimony, Sponsor } from 'components';

class Abouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerObj: [], 
      aboutObj: [],
      teamObj: [],
	  contactObj: [],
      sponsorObj: [],
      testimonyObj: [],
	  homepage: Boolean
    };
  }

  componentDidMount() {
   const API_URL = process.env.REACT_APP_API_URL;
   const promises = Promise.all([
		fetch(API_URL + 'header'),
		fetch(API_URL + 'carousel'),
		fetch(API_URL + 'about'),
		fetch(API_URL + 'team'),
		fetch(API_URL + 'contact'),
		fetch(API_URL + 'sponsor'),
		fetch(API_URL + 'testimony')
	]);

	promises
	  .then((results) => 
	    Promise.all( results.map(r => r.json()) )
	  )
	  .then( ([dataHeader, dataCarousel, dataAbout, dataTeam, dataContact, dataSponsor, dataTestimony]) => {
	  	this.setState({
            headerObj: dataHeader, 
            carouselObj: dataCarousel,
            aboutObj: dataAbout, 
            teamObj: dataTeam,
			contactObj: dataContact,
            sponsorObj: dataSponsor,
            testimonyObj: dataTestimony,
            homepage: false
        })
	  })
	  .catch((error) => {
		console.log(error)
	  });
  }

  render() {
	return (<div  className="about">
	          <Carousel 
	          	items={ this.state.headerObj }
	          	path="about"
	          />
	          <About
	          	items={ this.state.aboutObj }
				  home={ this.state.homepage }
	          />
	          <Video
	          	contact={ this.state.contactObj }
	          	parralax={ this.state.aboutObj }
	          />
	          <Team
	          	items={ this.state.teamObj }
	          />
	          <Testimony 
	          	items={ this.state.testimonyObj }
	          />
	          <Sponsor
			  	sponsors={ this.state.sponsorObj }
	          />
		
		</div>
	  );
	}
}

export default Abouts;