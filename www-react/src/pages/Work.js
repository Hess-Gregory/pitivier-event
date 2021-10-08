import React from 'react';
import { Carousel, Gallery } from 'components';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerObj: [],
      galleryObj: []
    };
  }

  componentDidMount() {
   window.scrollTo(0,0);
   const API_URL = process.env.REACT_APP_API_URL;
   const promises = Promise.all([
	  fetch(API_URL + 'header/page/work'),
      fetch(API_URL + 'gallery')
	]);

	promises
	  .then((results) => 
	    Promise.all( results.map(r => r.json()) )
	  )
	  .then( ([dataHeader, dataGallery]) => {
	  	this.setState({
            headerObj: dataHeader, 
            galleryObj: dataGallery
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
	          	path="header"
	          />
	          <Gallery 
	          	items={ this.state.galleryObj }
	          />
	    </div>
	  );
	}
}

export default Work;