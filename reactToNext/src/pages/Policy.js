import React from 'react';
import { Carousel } from 'components';

class Policy extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  headerObj: [],
		  policyObj: []
		};
	  }
	
	  componentDidMount() {
	   window.scrollTo(0,0);
	   const API_URL = process.env.REACT_APP_API_URL;
	   const promises = Promise.all([
		fetch(API_URL + 'header'),
		fetch(API_URL + 'policy')
		]);
	
		promises
		  .then((results) => 
			Promise.all( results.map(r => r.json()) )
		  )
		  .then( ([dataHeader, dataPolicy]) => {
			  this.setState({
				headerObj: dataHeader,
				policyObj: dataPolicy
			})
		  })
		  .catch((error) => {
			console.log(error)
		  });
	  }

  render() {    
	  	const policyObj 		= this.state.policyObj;
		const policy     	= policyObj.map(function(item, index){

			return  <div className="single-terms"  key={index}>
						<h3 className="mt-0">{item.title}</h3>
						<div  dangerouslySetInnerHTML={{__html: item.content}}></div>
					</div>

		})

	  return (<div  className="terms">
				<Carousel 
					items={ this.state.headerObj }
					path="privacy"
				/>
				<section className="terms-conditions ptb-100">
					<div className="container">
						{policy}
					</div>
				</section>
			</div>
	  );
	}
}
export default Policy;