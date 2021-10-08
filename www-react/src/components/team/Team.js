import React from "react";
import imageUrl from 'constants/imageUrl';
import { Teamdesc } from 'components';
import { Container, Row, Col } from 'reactstrap';

class Team extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      teamdescObj: []
    };
  }

  componentDidMount() {
    const API_URL = process.env.REACT_APP_API_URL;
    const promises = Promise.all([
       fetch(API_URL + 'teamdesc')
   ]);
 
   promises
     .then((results) => 
       Promise.all( results.map(r => r.json()) )
     )
     .then( ([dataTeamdesc]) => {
       this.setState({
        teamdescObj: dataTeamdesc
         })
     })
     .catch((error) => {
     console.log(error)
     });
   }  
  render() {
    const items = this.props.items;
    const itemTeam = items.map(function(item, index){
      let imageURL = imageUrl.team + item.image
          return  <Col lg md="6" key={index} >
                    <div className="single-team-box">
                      <div className="team-image">
                        <img src={ imageURL } alt={ item.alt } />
                        <div className="team-social-box">
                          <div className="team-social-icon"> 
                            <a href={ item.facebook } className="social-color-1">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href={ item.twitter } className="social-color-2">
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a href={ item.lindekin } className="social-color-3">
                              <i className="fab fa-linkedin"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="team-info">
                        <h3>{ item.name }</h3>
                        <span>{ item.position }</span>
                        <p>{ item.quote }</p>
                      </div>
                    </div>
                  </Col>
    })

    return (<section id="team" className="team-area section-padding">
        <Container>
          <Row>
            <Teamdesc
            items={ this.state.teamdescObj }
            />
            {itemTeam}
          </Row>
        </Container>
      </section>

    );
  }
}

export default Team;
