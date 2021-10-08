import React from "react";
import { Link } from "react-router-dom";
import imageUrl from 'constants/imageUrl';
import { Container, Row, Col } from 'reactstrap';

import { dateToString, timeToString, textLimit } from 'helpers/formatter.js';

class PostHome extends React.Component {
  constructor(props) {
		super(props);
	    this.state = {
	      postdescObj: []
	    };
	}

  componentDidMount() {
   const API_URL = process.env.REACT_APP_API_URL;
   const promises = Promise.all([
      fetch(API_URL + 'blogdesc')
  ]);

  promises
    .then((results) => 
      Promise.all( results.map(r => r.json()) )
    )
    .then( ([dataPostdesc]) => {
      this.setState({
            postdescObj: dataPostdesc
        })
    })
    .catch((error) => {
    console.log(error)
    });
  }   
  render() {
    const   limit   = this.props.limit,
            blogs   = this.props.items,
            titles  = this.state.postdescObj;

    const title     = titles.map(function(item, index){
    return  <Col key={index} lg="12" md="12">
                <div className="section-title">
                    <h5 dangerouslySetInnerHTML={{__html: item.introdesc}}></h5>
                    <h2>{ item.titledesc }</h2>
                </div>
            </Col>
    })
      
    const itemBlog     = blogs.slice(0, limit).map(function(item, index){
    let imageURL = imageUrl.Blog + item.image;

    const dateCreate = dateToString(item.createdAt)
    const timeCreate = timeToString(item.createdAt)

    const blogCourt = textLimit(item.content)
   
    
    //console.log(even_shorter.toLocaleDateString('ar-EG', options))
    return <Col key={index} lg="4" md="6">
                <div className="single-blog">
                    <div className="blog-img">
                        <Link to="#" className="crop">
                            <img src={imageURL} alt=""/>
                        </Link>
                    </div>
                    <div className="blog-content">
                        <div className="blog-title">
                            <h3>
                                <a href="#">{ item.title }</a>
                            </h3>
                        </div>
                        <div className="blog-text">
                            <p dangerouslySetInnerHTML={{ __html: blogCourt }}></p>
                        </div>
                        <div className="blog-bottom-text-link"> 
                            <span>{dateCreate} à {timeCreate}</span>
                        <br/>
                            <a href="#">Plus de Détails</a>
                        </div>
                    </div>
                </div>
            </Col>
    })

    return (<section id="blog" className="blog-area section-padding">
                <Container>
                    <Row>
                        {title}
                    </Row>
                    <Row>
                        {itemBlog}
                        <Col md="12">
                            { 
                            limit ?
                            <div className="blog-more-btn text-center mt-15"> 
                                <Link to="/blog" className="default-btn" >
                                    Voir plus de blogs
                                </Link>
                            </div>
                            :
                            ''
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
    );
  }
}

export default PostHome;
