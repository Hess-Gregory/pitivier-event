import React, { Suspense, useState }  from "react";
import imageUrl from 'constants/imageUrl';
import { Link } from "react-router-dom";

import { 
  Container,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
  NavLink,
  Collapse,
  Nav
} from 'reactstrap';


function CreateNavbar(props) {

  return (
    <div className="vegan-nav">
            <Container>
              <Navbar light expand="md">
                {props.brand}
                <NavbarToggler className="meanmenu-reveal" onClick={props.click} />
                <Collapse className="mean-menu" isOpen={props.open} id="navbarSupportedContent" navbar>
                  <Nav navbar>
                      <NavItem>
                        <NavLink href="/" active={(window.location.pathname === "/")?true:false} >Home</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/about" active={(window.location.pathname === "/about")?true:false}>A Propos</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/menu" active={(window.location.pathname === "/menu")?true:false}>Carte</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/buffet" active={(window.location.pathname === "/buffet")?true:false}>Buffet</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/gallery" active={(window.location.pathname === "/gallery")?true:false}>Gallerie</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/locations" active={(window.location.pathname === "/locations")?true:false}>Location</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/contact" >Contactez-nous</NavLink>
                      </NavItem>
                  </Nav>
                  <div className="other-option">
                    <a className="default-btn" href={`tel:${props.reserve}`}>{props.boutton}</a>
                  </div>
                </Collapse>
              </Navbar>
            </Container>
          </div>
  );
}

class Header extends React.Component {
  
  constructor(props) {
		super(props);
	    this.state = {
	      navbarObj: [],
	      configurationObj: [],
        contactObj: [], 
        isOpen: false,
        loading: true
	    }; 
	}


  componentDidMount() {
   const API_URL = process.env.REACT_APP_API_URL;
   const promises = Promise.all([
      fetch(API_URL + 'navbar'),
      fetch(API_URL + 'configuration'),
      fetch(API_URL + 'contact')
  ]);

  promises
    .then((results) => 
      Promise.all( results.map(r => r.json()) )
    )
    .then( ([dataNavbar, dataConfiguration, dataContact]) => {
      this.setState({
            navbarObj: dataNavbar,
            configurationObj: dataConfiguration,
            contactObj: dataContact
        })
    })
    .catch((error) => {
    console.log(error)
    });
  }  

  
  render() { 
	const toggle = () =>{
    if (this.state.isOpen === false){
		this.setState({isOpen: true});
    }else{
		this.setState({isOpen: false});
    }

  }

    const items = this.state.navbarObj;
    const contact = this.state.contactObj;
    const configurations = this.state.configurationObj;
    const size = 1
    const navbarBrandItems = items.slice(0, size)
    const logoItems = items.slice(0, size)
    items.splice(-1,1);

    const logo_1 = configurations.map(function(objet){
      let imageURL = imageUrl.configuration + objet.logo2;
      return imageURL
    })

    const phone = contact.map(function(objet){
      return objet.phone1
    })  

    const bouton = contact.map(function(objet){
      return objet.boutonnavbar
    })    

    const reservation = phone[0];

    const navbar_brand = navbarBrandItems.map(function(brand, index){
      return  <NavbarBrand key={index} href={brand.path}>
                  <img className="white-logo" src={logo_1}  alt="logo" />
                  <img className="black-logo"  src={logo_1}  alt="logo" />  
                </NavbarBrand>
    })
    const logo = logoItems.map(function(home, idx){
      return  <div key={idx} className="logo" >
                <Link to={home.path}>
                  <img  src={logo_1} className="white-logo" alt="logo" />
                  <img  src={logo_1} className="black-logo" alt="logo" />
                </Link>
              </div>
    })


      return (

      <div className="navbar-area">
          <div className="vegan-responsive-nav">
            <Container>
              <div className="vegan-responsive-menu">
                {logo}
              </div>
            </Container>
          </div>
          <CreateNavbar brand={navbar_brand} click={toggle} open={this.state.isOpen} reserve={reservation} boutton={bouton}/>
        </div>
    )
  }
}

export default Header;