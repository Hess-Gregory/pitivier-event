import React from "react";
import { Link } from "react-router-dom";
import imageUrl from 'constants/imageUrl';
import { Container, Row, Col } from 'reactstrap';

import { dateToString, timeToString, textLimit } from 'helpers/formatter.js';

class PostBlog extends React.Component {
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
    return  <Col  key={index}  lg="12" md="12">
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
    return <Col  key={index}  lg="4" md="6">
                <div className="single-blog">
                    <div className="blog-img">
                        <Link to={`/blog/${item.id}`} className="crop">
                            <img src={imageURL} alt={item.alt}/>
                        </Link>
                    </div>
                    <div className="blog-content">
                        <div className="blog-title">
                            <h3><Link to={`/blog/${item.id}`}>{ item.title }</Link></h3>
                        </div>
                        <div className="blog-text">
                            <p dangerouslySetInnerHTML={{ __html: blogCourt }}></p>
                        </div>
                        <div className="blog-bottom-text-link"> <span>{dateCreate} à {timeCreate}</span>
                        <br/>
                            <Link to={`/blog/${item.id}`}>Plus de Détails</Link>
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
                      <Col lg="12" md="12">
                        <div className="pagination-area"> 
                          <a href="#" className="prev page-numbers">
                            <i className="fas fa-angle-left"></i>
                          </a>
                          <a href="#" className="page-numbers">1</a>
                          <span className="page-numbers current" aria-current="page">2</span>
                          <a href="#" className="page-numbers">3</a>
                          <a href="#" className="page-numbers">4</a>
                          <a href="#" className="next page-numbers">
                            <i className="fas fa-angle-right"></i>
                          </a>
                        </div>
                      </Col>
                    </Row>
                </Container>
            </section>
    );
  }
}

export default PostBlog;
