import React from "react";
import { Carousel, Video, Sponsor, Gallery } from 'components';
class Medias extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			galleryObj: [],
			gallerydescObj : [],
			galleryListObj : [],
			headerObj: [],
			aboutObj: [],
			contactObj: [],
			sponsorObj: []
		};
	}



	componentDidMount() {
	   const API_URL  = process.env.REACT_APP_API_URL;
	   const promises = Promise.all([
			fetch(API_URL + 'media'),
			fetch(API_URL + 'gallerydesc'),
			fetch(API_URL + 'gallery'),
			fetch(API_URL + 'header'),
			fetch(API_URL + 'about'),
			fetch(API_URL + 'contact'),
			fetch(API_URL + 'sponsor')
		]);
	
		promises
		  .then((results) => 
			Promise.all( results.map(r => r.json()) )
		  )
		  .then( ([dataGallery, dataGallerydesc, dataGalleryList, dataHeader,dataAbout, dataContact, dataSponsor]) => {
			  this.setState({
				galleryObj: dataGallery,
				gallerydescObj: dataGallerydesc,
				galleryListObj: dataGalleryList,
				headerObj: dataHeader,
				aboutObj: dataAbout, 
				contactObj: dataContact,
				sponsorObj: dataSponsor

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
				path="galerie"
				/> 
				<Gallery
					title	=	{	this.state.gallerydescObj	}
					filter	=	{ 	this.state.galleryListObj	}
					medias	=	{ 	this.state.galleryObj		}
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

export default Medias;