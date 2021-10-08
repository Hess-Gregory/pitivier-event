import React from 'react';
import { About, Carousel, Service, Video, PostHome, Sponsor } from 'components';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerObj: [],
      carouselObj: [],
      aboutObj: [],
      galleryObj: [],
      serviceObj: [],
	  contactObj: [],
      sponsorObj: [],
      blogObj: [],
	  homepage: Boolean
    };
  }
componentDidMount() {
	
   const API_URL  = process.env.REACT_APP_API_URL;
   const promises = Promise.all([
		fetch(API_URL + 'header'),
		fetch(API_URL + 'carousel'),
		fetch(API_URL + 'about'),
		fetch(API_URL + 'gallery'),
		fetch(API_URL + 'service'),
		fetch(API_URL + 'contact'),
		fetch(API_URL + 'sponsor'),
		fetch(API_URL + 'blog'),
	]);

	promises
	  .then((results) => 
	    Promise.all( results.map(r => r.json()) )
	  )
	  .then( ([dataHeader, dataCarousel, dataAbout, dataGallery, dataService, dataContact, dataSponsor, dataBlog]) => {
	  	this.setState({
            headerObj: dataHeader, 
            carouselObj: dataCarousel,
            aboutObj: dataAbout, 
            galleryObj: dataGallery,
            serviceObj: dataService,
            contactObj: dataContact,
            sponsorObj: dataSponsor,
            blogObj: dataBlog,
            homepage: true
        })
	  })
	  .catch((error) => {
		console.log(error)
	  });
  }

  render() {
	return (
	    <div  className="home">
	          <Carousel 
	          	items={ this.state.headerObj }
	          	path="home"
	          />
	          <About
	          	items={ this.state.aboutObj }
				home={ this.state.homepage }
	          />
	          <Service
	          	items={ this.state.serviceObj }
	          />
	          <Video
	          	contact={ this.state.contactObj }
	          	parralax={ this.state.aboutObj }
	          />
	          <Sponsor
			  	sponsors={ this.state.sponsorObj }
	          />
	          <PostHome 
	          	items={ this.state.blogObj }
	          	limit={3}
	          />
	    </div>
	  );
	}
}

export default Home;