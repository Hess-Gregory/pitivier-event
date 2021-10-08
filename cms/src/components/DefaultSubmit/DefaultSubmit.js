import React from 'react';
import { Button, Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import { modalActions } from 'stores';

const DefaultSubmit = (props) => {
  const { data, submitText, cancelText, toggleModal } = props;
  
  const SubmitBtn = () =>  {
    if(submitText){
      return (
        <>
          <Button color="primary" type="submit" disabled={data.loading}>
          { data.loading && <Spinner size="sm" color="light" /> }
          <span> </span>
          { submitText }
          </Button>
          <span> </span>
        </>
      )
    }

    return (<></>);
  }

  const CancelBtn = () => {
    if(cancelText) {
      return (
        <Button color="secondary" onClick={toggleModal}>{ cancelText }</Button>
      )
    }

    return (<></>);
  }

  return (
    <>
      <SubmitBtn /><CancelBtn />
    </>    
  )
}

const mapStateToProps = state => {
  return {
    data: state.submitForm
  }
}

const mapDispatchToProps = {
  toggleModal: modalActions.toggle,
}


export default connect(mapStateToProps, mapDispatchToProps)(DefaultSubmit)

