import React, { useState }  from 'react';
import { AvCheckboxGroup, AvCheckbox  } from 'availity-reactstrap-validation';
import { store } from 'stores';

const DefaultCheckboxes = (props) => {    
	const [theArray, setTheArray] = useState([]);
	const theme             = store.getState().theme.theme; 
	const sortedOptions     = 

	props.option ? 
	props.selected === undefined ? 
	props.option : props.option.reduce((acc, element) => {
						if (element.value === props.selected) {
							return [element, ...acc];}
							return [...acc, element];

						}, []
						)

	:
		props.selected === undefined ? 
		props.options :

		props.options.reduce((acc, element) => {
			if (element.value === props.selected) {
			return [element, ...acc];}
			return [...acc, element];
		}
		
		, [])

		
const onChange = (event) =>{
		// verifier si le target.value exist dans theArray
	if (theArray.includes(event.target.value)){
		// si oui, verifier si event.target.checked = false

		if(!event.target.checked){
			// -> alors on supprime target.value dans theArray 
						let i = theArray.indexOf(event.target.value)
						if (i >= 0){theArray.splice(i,1)}
						theArray.filter((c, index) => {return theArray.indexOf(c) === index;});
		}else{
			// si non, on ajoute target.value dans theArray
			theArray.push(event.target.value)}	
	}
	else{setTheArray([...theArray, event.target.value])}

 }

	const options = sortedOptions.map((item, index) =>
		<AvCheckbox 
		key={index} 
		label={ item.label } 
		value={item.value} 
		onClick={onChange}
		/> 
	)


	const input = 
		<div>
			<AvCheckboxGroup 
			className={"form-"+ theme}
			name={ props.name }
			value={theArray}
			required={ props.required }
			inline={ props.inline }
			>
				{ options }
		  	</AvCheckboxGroup>
		</div>;

	return { value: theArray, setValue: setTheArray, input: input };
	
}

export default DefaultCheckboxes;