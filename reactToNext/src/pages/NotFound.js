import React from 'react';
import { Link } from "react-router-dom";
import { Carousel } from 'components';


class NotFound extends React.Component {
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
	  return (	<div  className="about">
					<div id="notfound">
						<div className="notfound">
							<div className="notfound-404">
								<h1>4<span>0</span>4</h1>
							</div>
							<div className="text-notfound">
								<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
								<a href="/" className="default-btn">home page</a>
							</div>
						</div>
					</div>
				</div>
	  );
	}
}

export default NotFound;