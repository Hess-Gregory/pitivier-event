import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Work from 'pages/Work';
import Feature from 'pages/Feature';
import Blog from 'pages/Blog';
import Blogdetails from 'pages/Blogdetails';
import About from 'pages/About';
import Contact from 'pages/Contact';
import NotFound from 'pages/NotFound';
import Menu from 'pages/Cards';
import Buffet from 'pages/Buffets';
import Gallery from 'pages/Gallery';
import Locations from 'pages/Location';
import Terms from 'pages/Terms';
import Policy from 'pages/Policy';
import Links from 'pages/Our-links';

import { Header, Footer } from 'components';
// => https://reactrouter.com/web/example/sidebar


function routes() {
    return(
        <div className="navigation">
            <Router>
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
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/work" component={Work} />
                    <Route path="/feature" component={Feature} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/blog/detail/:blogId" component={Blogdetails} />
                    <Route path="/menu" component={Menu} />
                    <Route path="/buffet" component={Buffet} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/location" component={Locations} />
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
        </div>
        );
    }
    export default routes;