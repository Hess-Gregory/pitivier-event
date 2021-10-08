import React from "react";
import { Container, Row, Col } from 'reactstrap';



class Filter extends React.Component {


	handleItemClick(id, nameGalerie) {
    this.props.parentCallbackIndex(id);
    this.props.parentCallbackName(nameGalerie);
	}

  render() {
  const indexIsActive = this.props.returnIndex
  const handleToUpdate = this.state;

	// construction of menu


	const createFilterItem = ({ id, name, dataFilter, indexActive }) => (
		<li key={id}
		className={(indexActive === id)? 'filter filter-active' : 'active'}  
		data-filter={dataFilter} 
		onClick={this.handleItemClick.bind(this, id, name)}
		>
		  {name}
		</li>
	  );
	
	// ---------------------------------
	// --Construction of filter array---
	// ---------------------------------
	const nameClass 	= "filter filter-active"
    const thisFilter  	= 
		this.props.items.map(function(val, index){
			const id = index + 1
			const nameLowerCase = val.name.toLowerCase();
			const nameFilter = "."+ nameLowerCase;
			const nameClass = "filter"
		return {id: id, name:nameLowerCase, dataFilter:nameFilter, classNames: nameClass, indexActive: indexIsActive  };
		})

	const data=[{id:0, name: 'all', dataFilter: '.all', classNames: nameClass, indexActive: indexIsActive }]
	const filtersDefault = []; 

	data.forEach(item => filtersDefault.push(item));
	thisFilter.forEach(item => filtersDefault.push(item));


    return (<Col md="12">
              <div className="gallery-list">
                  <ul className="nav" id="gallery-flters">
                      {filtersDefault.map(createFilterItem)}
                  </ul>
              </div>
            </Col>
      
    );
  }
}

export default Filter;