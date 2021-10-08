import React from 'react';
import { Carousel } from 'components';

class Terms extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  headerObj: [],
		  termsObj: []
		};
	  }
	
	  componentDidMount() {
	   window.scrollTo(0,0);
	   const API_URL = process.env.REACT_APP_API_URL;
	   const promises = Promise.all([
		fetch(API_URL + 'header'),
		fetch(API_URL + 'terms')
		]);
	
		promises
		  .then((results) => 
			Promise.all( results.map(r => r.json()) )
		  )
		  .then( ([dataHeader, dataTerms]) => {
			  this.setState({
				headerObj: dataHeader,
				termsObj: dataTerms
			})
		  })
		  .catch((error) => {
			console.log(error)
		  });
	  }

  render() {    
	  	const termsObj 		= this.state.termsObj;
		const terms     	= termsObj.map(function(term, index){

			return  <div className="single-terms"  key={index}>
						<h3 className="mt-0">{term.title}</h3>
						<div  dangerouslySetInnerHTML={{__html: term.content}}></div>
					</div>

		})

	  return (<div  className="terms">
				<Carousel 
					items={ this.state.headerObj }
					path="terms"
				/>
				<section className="terms-conditions ptb-100">
					<div className="container">
						{terms}
					</div>
				</section>
			</div>
	  );
	}
}

export default Terms;