import React, { useState, useEffect } from 'react';
import { AvField } from 'availity-reactstrap-validation';
import { store } from 'stores';

const DefaultInput = (props) => {
	let defaultValue = props.default ? props.default : '';
	useEffect(() => { setValue(defaultValue) }, [defaultValue]);
	const [value, setValue] = useState('');
	const theme = store.getState().theme.theme; // if lightTheme not provided then default is dark theme
	const input = 
		<div>
			<AvField
				className={"form-"+ theme + " " + props.class}
				required={ props.required }
				type={ props.type }
	            name={ props.name }
	            value={value}
	            onChange={e => setValue(e.target.value)}
	            placeholder={ props.placeholder } 
	            autoComplete={ props.autoComplete }
	            errorMessage={ props.errorMessage } 
	            /** if type = textarea then applied **/
	            rows="4"
	            cols="50"
	        />
		</div>;

	return { value: value, setValue: setValue, input: input };
	
}

export default DefaultInput;