import React, { Component } from 'react';
import Location from './Location'
import DescMateriel from './_DescMateriel'
import DescVehicule from './_DescVehicule'
import DescSalle from './_DescSalle'
import Salle from './Salle'

class Loc extends Component {

  render() {
    return (
      <div>
        <Location />
        <DescMateriel />
        <DescVehicule />
        <DescSalle />
        <Salle />
      </div>
    );
  }
}

export default Loc;
