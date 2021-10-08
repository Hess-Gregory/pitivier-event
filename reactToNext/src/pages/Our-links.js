import React from 'react';
import { Carousel } from 'components';

class Links extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  headerObj: []
		};
	  }
	
	  componentDidMount() {
	   window.scrollTo(0,0);
	   const API_URL = process.env.REACT_APP_API_URL;
	   const promises = Promise.all([
		fetch(API_URL + 'header')
		]);
	
		promises
		  .then((results) => 
			Promise.all( results.map(r => r.json()) )
		  )
		  .then( ([dataHeader, dataBlog]) => {
			  this.setState({
				headerObj: dataHeader
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
	    <div id="fh5co-page">
	          <h1>page "Nos liens"</h1>
	    </div>
	  </div>
	  );
	}
}

export default Links;