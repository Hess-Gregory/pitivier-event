import React from "react";
//import imageUrl from 'constants/imageUrl';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import classNames from 'classnames';

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0,
    };
  }
 
  toggle(tab) {
     
    if (this.state.activeTab !== tab) { 
      this.setState({
        activeTab: tab,
      });
    }  
  }

  render() { 

    const cards = this.props.cards;
    const menudesc = this.props.menudesc;

    const pageSubtitle = menudesc.map(function(item, index){  
      return  item.introdesc
    })  
    const pageTitle = menudesc.map(function(item, index){ 
      return  item.titledesc
    })  
    const newStateActive = this.state.activeTab
    const newtoggle = this.toggle

    const itemCards = cards.map(function(item, index){
      if (item.visible){
        const linkTo  = '#tab-menu-' + item.id; 
        const test  = classNames({ active: newStateActive === index }); 
        return      <li  
                    key={index}
                    className={test}
                    onClick={() => { newtoggle(index)}}
                    >	
                      <Link to={linkTo} >
                        <i className={item.icon}></i><br/>{item.title}
                      </Link>
                    </li>
      }
    })

    const itemMenus = cards.map(function(item, index){
      
    
      const linkTo  = 'tab-menu-' + item.id; 
      const classSingle  = 'menu-single-tab-content ' + classNames({ active: newStateActive === index }); 
      
if (item.menus){
  var quotient = Math.floor(item.menus.length/2);
  var remainder = item.menus.length % 2;

  var startLeft =  0;
  var leftLimit =  Math.floor(quotient+remainder);
  var startRight =  Math.floor(leftLimit+0);
  var RightLimit =  item.menus.length ;


  return  <div  key={index} className={classSingle}  id={linkTo}>
            <Row>
              <Col xl="6" lg="6" md="12" sm="12" className="col-12" >
              {
                (
                  (item.menus.length)?
                  item.menus.slice(startLeft, leftLimit).map(function(val, index){
                    return  (
                      (val.visible)? 
                      <div key={index} className="menu-single-product-horizontal">
                      <div className="menu-product-info-box">
                        <div className="menu-product-details">
                            <Link className="menu-product-title" href="#">
                            { val.name }
                            </Link>
                            <p  dangerouslySetInnerHTML={{ __html: val.text }}/>
                        </div>
                        <div className="menu-product-price">
                          {
                            (
                              (val.price)?
                          <span>{val.price}€/{val.unite}</span>:'')}
                        </div>
                      </div>
                    </div>
                  :
                  ''
                            
                    )
                })
                :
                ''
                )
              }
              </Col>
              <Col xl="6" lg="6" md="12" sm="12" className="col-12" >
              {
                (
                  (item.menus.length)?
                  item.menus.slice(startRight, RightLimit).map(function(val, index){
                    return  (
                      (val.visible)? 
                      <div key={index} className="menu-single-product-horizontal">
                      <div className="menu-product-info-box">
                        <div className="menu-product-details">
                            <Link className="menu-product-title" href="#">
                            { val.name }
                            </Link>
                            <p  dangerouslySetInnerHTML={{ __html: val.text }}/>
                        </div>
                        <div className="menu-product-price">
                          {
                            (
                              (val.price)?
                          <span>{val.price}€/{val.unite}</span>:'')}
                        </div>
                      </div>
                    </div>
                  :
                  ''
                            
                    )
                }):
                  ''
                )
              }
              
              {
                (
                  (item.description)?
                  <div className="menu-single-product-horizontal">
                  <div className="menu-product-info-box">
                    <div className="menu-product-details">
                        <Link className="menu-product-title" href="#">
                        Information pratique:
                        </Link>
                        <p  dangerouslySetInnerHTML={{ __html: item.description }}/>
                    </div>
                    <div className="menu-product-price">
                    </div>
                  </div>
                </div>:'')}
              


              </Col>
            </Row>
          </div>

}else if (item.buffets){
  var quotient = Math.floor(item.buffets.length/2);
  var remainder = item.buffets.length % 2;

  var startLeft =  0;
  var leftLimit =  Math.floor(quotient+remainder);
  var startRight =  Math.floor(leftLimit+0);
  var RightLimit =  item.buffets.length ;


  return  <div  key={index} className={classSingle}  id={linkTo}>
            <Row>
              <Col xl="6" lg="6" md="12" sm="12" className="col-12" >
              {
                (
                  (item.buffets.length)?
                  item.buffets.slice(startLeft, leftLimit).map(function(val, index){
                    return  (
                      (val.visible)? 
                      <div key={index} className="menu-single-product-horizontal">
                      <div className="menu-product-info-box">
                        <div className="menu-product-details">
                            <Link className="menu-product-title" href="#">
                            { val.name }
                            </Link>
                            <p  dangerouslySetInnerHTML={{ __html: val.text }}/>
                        </div>
                        <div className="menu-product-price">
                          {
                            (
                              (val.price)?
                          <span>{val.price}€/{val.unite}</span>:'')}
                        </div>
                      </div>
                    </div>
                  :
                  ''
                            
                    )
                })
                :
                ''
                )
              }
              </Col>
              <Col xl="6" lg="6" md="12" sm="12" className="col-12" >
              {
                (
                  (item.buffets.length)?
                  item.buffets.slice(startRight, RightLimit).map(function(val, index){
                    return  (
                      (val.visible)? 
                      <div key={index} className="menu-single-product-horizontal">
                      <div className="menu-product-info-box">
                        <div className="menu-product-details">
                            <Link className="menu-product-title" href="#">
                            { val.name }
                            </Link>
                            <p  dangerouslySetInnerHTML={{ __html: val.text }}/>
                        </div>
                        <div className="menu-product-price">
                          {
                            (
                              (val.price)?
                          <span>{val.price}€/{val.unite}</span>:'')}
                        </div>
                      </div>
                    </div>
                  :
                  ''
                            
                    )
                }):
                  ''
                )
              }
              
              {
                (
                  (item.description)?
                  <div className="menu-single-product-horizontal">
                  <div className="menu-product-info-box">
                    <div className="menu-product-details">
                        <Link className="menu-product-title" href="#">
                        Information pratique:
                        </Link>
                        <p  dangerouslySetInnerHTML={{ __html: item.description }}/>
                    </div>
                    <div className="menu-product-price">
                    </div>
                  </div>
                </div>:'')}
              


              </Col>
            </Row>
          </div>

}	
    })

    return (<section className="menu-day-area section-padding ">
    <Container>
      <div className="section-title">
        <h5>{pageSubtitle}</h5>
        <h2>{pageTitle}</h2>
      </div>
      <Row>
        <Col md="12">
          <div className="menu-day-product-content">
            <div className="menu-day-tab-header">
              <ul className="menu-day-tab-list">
                {itemCards}
              </ul>
              
            </div>
            <div className="menu-day-main-tabs-content">
              {itemMenus}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
      

    );
  }
}

export default Menu;
