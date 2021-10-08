import React from 'react';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { alertActions } from 'stores';

const ControlledAlert = (props) => {

  const visible = (props.visible === true && props.context === props.alert.context);
  
  if(visible === true){
    props.timeout && setTimeout( props.clear, props.timeout )
  }
  
    return (
  		<div>
  			<Alert color={ props.color } isOpen={visible} toggle={props.clear}>
		      { props.message }
		    </Alert>
  		</div>
  	)
}

const mapStateToProps = state => {
  return {
    alert: state.alert
  }
}

const mapDispatchToProps = {
  clear: alertActions.clear
}


export default connect(mapStateToProps, mapDispatchToProps)(ControlledAlert)

