import React, { useState, useEffect } from 'react';
import { store } from 'stores';

const DefaultSwitch = (props) => {
	let defaultValue = props.default ? props.default : '';
	useEffect(() => { setValue(defaultValue) }, [defaultValue]);
	const [value, setValue] = useState('');
	const theme = store.getState().theme.theme; // if lightTheme not provided then default is dark theme
	const input = 
		<div>
			<div className="form-group">
				<label className={"switch form-"+ theme }>
					<input 
					type="checkbox" 
					name={ props.name }
					required={ props.required }
					value={value}
					onChange={e => setValue(e.target.value)}
					autoComplete={ props.autoComplete }
					checked={ props.checked }
					rows="4"
					cols="50"
					className={"av-valid form-control"}
					/>
					<span className="slider round"></span>
				</label>
			</div>
		</div>;

	return { value: value, setValue: setValue, input: input };
	
}

export default DefaultSwitch;