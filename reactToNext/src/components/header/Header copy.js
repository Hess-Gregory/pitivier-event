import React, { Suspense }  from "react";
import imageUrl from 'constants/imageUrl';

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

const createNavItem = ({ path, name }) => (
  <NavItem>
    <NavLink href={path} >{name}</NavLink>
  </NavItem>
);

class Header extends React.Component {
  constructor(props) {
		super(props);
    this.toggle = this.toggle.bind(this);
	    this.state = {
	      navbarObj: [],
	      configurationObj: [],
        contactObj: [],
        isOpen: false
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
      //this.toggleNavbar = this.toggleNavbar.bind(this);
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
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  
  render() {  

    const newStateActive = this.state.activeTab
    const items = this.state.navbarObj;
    const contact = this.state.contactObj;
    const configurations = this.state.configurationObj;
    const size = 1
    const homeItems = items.slice(0, size)
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


    const navbar_brand = homeItems.map(function(home, index){
      return  <NavbarBrand key={index} href={home.path}>
                  <img className="white-logo" src={logo_1}  alt="logo" />
                  <img className="black-logo"  src={logo_1}  alt="logo" />  
                </NavbarBrand>
    })
    const logo = homeItems.map(function(home){
      return  <div key={home} className="logo" >
                {navbar_brand}
              </div>
    })

    const itemNavbar = items.map(function(item){
      let activeItem = false
      if (window.location.pathname === item.path)
      {activeItem = true}
      else{activeItem = false}

      return  <NavItem key={item} active= {activeItem}>
                <NavLink href={item.path}>
                  {item.name} 
                </NavLink>
              </NavItem>
    })
    
    return (

      <Suspense fallback={<p>Chargement de la barre de menu...</p>}>
          <div className="navbar-area">
            <div className="vegan-responsive-nav">
              <Container>
                <div className="vegan-responsive-menu">
                  {logo}
                </div>
              </Container>
            </div>
            <div className="vegan-nav">
              <Container>
                <Navbar className="navbar-expand-md navbar-light">
                  {navbar_brand}
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} className="navbar-collapse mean-menu" id="navbarSupportedContent" navbar>
                    <Nav className="navbar-nav" >
                        {items.map(createNavItem)}
                    </Nav>
                    <div className="other-option">
                      <a className="default-btn" href={`tel:${reservation}`}>{bouton}</a>
                    </div>
                  </Collapse>
                </Navbar>
              </Container>
            </div>
        </div>
        </Suspense>
      
    );
  }
}

export default Header;