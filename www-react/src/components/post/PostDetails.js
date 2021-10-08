import React from "react";
import { Link } from "react-router-dom";
import imageUrl from 'constants/imageUrl';

import { dateToString, timeToString } from 'helpers/formatter.js';

class PostBlog extends React.Component {

  render() {

    const item = this.props.items
    const allBlog = this.props.allBlog
    const  imageURL = imageUrl.Blog + item.image;

    const dateCreate = dateToString(item.createdAt)
    const timeCreate = timeToString(item.createdAt)
    const idBlog = item.id
    const prevBlog = '/blog/' + (idBlog - 1)
    const nextBlog =  '/blog/' + (idBlog + 1)

    const blog = allBlog.slice(0, 5).map(function(item, index){
      const dateCreate = dateToString(item.createdAt)
      const urlBlog = '/blog/' + (item.id)
      const  imageURL = imageUrl.Blog + item.image;
      return  <article className="item"  key={index}>
                <a href={urlBlog} className="thumb"> 
                  <img src={imageURL} alt="image"  className="fullimage cover" />
                </a>
                <div className="info">	
                  <span>{dateCreate}</span>
                  <h4 className="title usmall">
                    <a href={urlBlog}>
                      {item.title}
                    </a>
                  </h4>
                </div>
              </article>
      })
 
      return (<section className="blog-details-area section-padding" idBlog={idBlog}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="blog-details-desc">
              <div className="article-image">
                <img src={imageURL} alt="image" />
              </div>
              <div className="article-content">
                <div className="entry-meta">
                  <ul>
                    <li> <a href="#">{dateCreate} à {timeCreate}</a>
                    </li>
                  </ul>
                </div>
                <h3>{item.title}</h3>
                <span dangerouslySetInnerHTML={{ __html: item.content }} />
                
              </div>
              <div className="article-footer">
                <div className="article-share">
                  <ul className="social">
                    <li><span>Share:</span>
                    </li>
                    <li>
                      <a href="#"> <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#"> <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#"> <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="post-navigation">
                <div className="navigation-links">
                  <div className="nav-previous">
                    <Link to={prevBlog}> 
                    <i className="fa fa-arrow-left"></i> 
                    Prev Post
                    </Link>
                  </div>
                  <div className="nav-next"> 
                    <Link to={nextBlog}>
                        Next Post 
                        <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <aside className="widget-area" id="secondary">
              <section className="widget widget_snoki_posts_thumb">
                <h3 className="widget-title">Popular Posts</h3>
                {blog}
              </section>
            </aside>
          </div>
        </div>
      </div>
    </section>
    )
  
  }
}

export default PostBlog;
