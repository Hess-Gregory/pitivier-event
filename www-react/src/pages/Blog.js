import React from 'react';
import { Carousel, PostBlog, Video, Sponsor } from 'components';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerObj: [],
      blogObj: [],
	  aboutObj: [],
	  contactObj: [],
	  sponsorObj: []

    };
  }

  componentDidMount() {
   window.scrollTo(0,0);
   const API_URL = process.env.REACT_APP_API_URL;
   const promises = Promise.all([
		fetch(API_URL + 'header'),
		fetch(API_URL + 'blog'),
		fetch(API_URL + 'about'),
		fetch(API_URL + 'contact'),
		fetch(API_URL + 'sponsor')
	]);

	promises
	  .then((results) => 
	    Promise.all( results.map(r => r.json()) )
	  )
	  .then( ([dataHeader, dataBlog, dataAbout, dataContact,  dataSponsor]) => {
	  	this.setState({
			headerObj: dataHeader, 
            blogObj: dataBlog,
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
	    <div id="fh5co-page">
	          <Carousel 
	          	items={ this.state.headerObj }
	          	path="blog"
	          />
	          <PostBlog
	          	items={ this.state.blogObj }
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

export default Blog;