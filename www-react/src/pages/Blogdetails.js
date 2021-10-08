import React from 'react';
import { Carousel, PostDetails, Video, Sponsor } from 'components';

class Blogdetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headerObj: [],
			blogdetailObj: [],
			blogObj: [],
			aboutObj: [],
			contactObj: [],
			sponsorObj: []
		};
	  }
	
	  componentDidMount() {
	   window.scrollTo(0,0);
	   const API_URL = process.env.REACT_APP_API_URL;
	   const blogId = this.props.location.pathname.substr(1)
	   const promises = Promise.all([
			fetch(API_URL + 'header'),
			fetch(API_URL + blogId ),
			fetch(API_URL + 'blog' ),
			fetch(API_URL + 'about'),
			fetch(API_URL + 'contact'),
			fetch(API_URL + 'sponsor')
		]);
	
		promises
		  .then((results) => 
			Promise.all( results.map(r => r.json()) )
		  )
		  .then( ([dataHeader, dataBlogDetail,  dataBlog, dataAbout, dataContact,  dataSponsor]) => {
			  this.setState({
				headerObj: dataHeader, 
				blogdetailObj: dataBlogDetail,
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
	  


	  return (	<div id="fh5co-page">
					<Carousel 
						items={ this.state.headerObj }
						path="blog"
					/>
					<PostDetails
						items={ this.state.blogdetailObj }
						allBlog={ this.state.blogObj }
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

export default Blogdetails;