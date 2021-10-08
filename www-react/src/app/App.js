import React, { Suspense, Component, lazy } from 'react';
import {Helmet} from "react-helmet";
import imageUrl from 'constants/imageUrl';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const Home = lazy(() => import('pages/Home'));
const Work = lazy(() => import('pages/Work'));
const Feature = lazy(() => import('pages/Feature'));
const Blog = lazy(() => import('pages/Blog'));
const Blogdetails = lazy(() => import('pages/Blogdetails'));
const About = lazy(() => import('pages/About'));
const Contact = lazy(() => import('pages/Contact'));
const NotFound = lazy(() => import('pages/NotFound'));
const Menu = lazy(() => import('pages/Cards'));
const Buffet = lazy(() => import('pages/Buffets'));
const Gallery = lazy(() => import('pages/Gallery'));
const Locations = lazy(() => import('pages/Location'));
const Terms = lazy(() => import('pages/Terms'));
const Policy = lazy(() => import('pages/Policy'));
const Links = lazy(() => import('pages/Our-links'));

import { Header, Footer } from 'components';


class App extends Component {
  constructor(props) {
    super(props);
    const results = (
      props.hasOwnProperty('staticContext') 
      && typeof props.staticContext !== 'undefined') ? 
      props.staticContext : 
      window.__INITIAL_DATA__;
    this.state = {
      configurationObj: [],
      navbarItem: [],
      isLoading: !props.hasOwnProperty('staticContext'), ...results
    };
  }
componentDidMount() {
    this.setState({ isLoading: true });
   const API_URL  = process.env.REACT_APP_API_URL;
   const promises = Promise.all([
		fetch(API_URL + 'configuration')
	]);

	promises
	  .then((results) => 
	    Promise.all( results.map(r => r.json()) )
	  )
	  .then( ([dataConfiguration]) => {
	  	this.setState({
            configurationObj: dataConfiguration
        })
	  })
	  .then( () => {
	  	this.setState({
            isLoading: false,
        })
	  })
	  .catch((error) => {
		console.log(error)
	  });
  }

    render() {
    const configurations = this.state.configurationObj;
    const favicons = configurations.map(function(item){
      let imageURL = imageUrl.configuration + item.favicon;
      return imageURL
    })
    const config = configurations.map(function(item){

      const thisFavicon = String(favicons)

      return (
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="keywords" content={item.keyword}/>
          <meta name="SUBJECT" content="Traiteur Tubize mariage buffet"/>
          <meta name="RATING" content="Traiteur"/>
          <meta name="AUTHOR" content="HESS Gregory" /> 
          
          <meta name="description" content={item.desc}/>
          <link rel="icon" href={thisFavicon} />
          <link
          rel="shortcut icon"
          type="image/jpg"
          href={thisFavicon}
          />
          <link rel="canonical" href="/" />
        </Helmet>
    )
    })
    

    console.log('config: ',config.title);
      return (
      <div className="navigation">
{config}
        <div className="preloader-area">
          <div className="sk-circle">
              <div className="sk-circle1 sk-child"></div>
              <div className="sk-circle2 sk-child"></div>
              <div className="sk-circle3 sk-child"></div>
              <div className="sk-circle4 sk-child"></div>
              <div className="sk-circle5 sk-child"></div>
              <div className="sk-circle6 sk-child"></div>
              <div className="sk-circle7 sk-child"></div>
              <div className="sk-circle8 sk-child"></div>
              <div className="sk-circle9 sk-child"></div>
              <div className="sk-circle10 sk-child"></div>
              <div className="sk-circle11 sk-child"></div>
              <div className="sk-circle12 sk-child"></div>
          </div>
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
        <Suspense fallback={<p>Chargement du router...</p>}>
          <Router>
            <Header/>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/work" component={Work} />
                <Route path="/feature" component={Feature} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/blog/:slug" component={Blogdetails} />
                <Route path="/menu" component={Menu} />
                <Route path="/buffet" component={Buffet} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/locations" component={Locations} />
                <Route path="/terms" component={Terms} />
                <Route path="/policy" component={Policy} />
                <Route path="/links" component={Links} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
              </Switch>
            <Footer />
            <div className="go-top">
                <i className="fas fa-chevron-up"></i>
                <i className="fas fa-chevron-up"></i>
            </div>
          </Router>
        </Suspense>
      </div>
      );
    }
  }
  
  export default App;
  