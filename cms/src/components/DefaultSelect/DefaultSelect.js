import React, { useState } from 'react';
import { AvField } from 'availity-reactstrap-validation';
import { store } from 'stores';

const DefaultSelect = (props) => {
	const [value, setValue] = useState();    
	const theme             = store.getState().theme.theme; // if lightTheme not provided then default is dark theme
	
	console.log('props ligne 9 : ', props)
	console.log('props.selected ligne 8 : ', props.selected)
	const sortedOptions     = props.option ? 

		props.selected === undefined ? props.option :
		props.option.reduce((acc, element) => {
		if (element.value === props.selected) {
			console.log('element.value ligne 13 : ', element.value)
			return [element, ...acc];
		}
		return [...acc, element];
		}, [])

	 :
		props.selected === undefined ? props.options :
		props.options.reduce((acc, element) => {
			if (element.value === props.selected) {
				console.log('element.value ligne 23 : ', element.value)
			return [element, ...acc];
			}
			return [...acc, element];
		}, [])

		console.log('value ligne 29 : ', value)
	const options = sortedOptions.map((item, index) => <option key={index} value={item.value}>{ item.label }</option> )

	const finalValue = value === '' ? sortedOptions[0].value : value;
	console.log('finalValue ligne 32 : ', finalValue)
	console.log('sortedOptions[0].value ligne 33 : ', sortedOptions)
	const input = 
		<div>
			<AvField
				className={"form-"+ theme}
				type="select"
	            name={ props.name }
	            onChange={e => setValue(e.target.value)}
	            value={value}
				multiple={ props.multiple }
	        >
	        	{ options }
	        </AvField>
		</div>;

	return { value: finalValue, setValue: setValue, input: input };
	
}

export default DefaultSelect;