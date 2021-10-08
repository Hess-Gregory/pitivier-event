import React from 'react';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';
import { modalActions } from 'stores';

function ActionCell(props) {
	return (
	  <div key={props.row.index} >
	  	{
          props.actionContent.includes("detail")
          &&
	      <i
	      	style={{ marginLeft: 10, cursor: 'pointer', color: '#3ddeed' }}
	      	className="fa fa-eye"
	      	data-tip={"Détail " + props.context}
	      	onClick={() => props.detailModal(props.row)}>
	      </i>
	  	}
	  	{
          props.actionContent.includes("edit")
          &&
	      <i
	      	style={{ marginLeft: 10, cursor: 'pointer', color: '#4799eb' }}
	      	className="fa fa-pencil"
	      	data-tip={"Modifier " + props.context}
	      	onClick={() => props.editModal(props.row)}>
	      </i>
	  	}
	  	{
          props.actionContent.includes("delete")
          &&
	      <i
	      	style={{ marginLeft: 10, cursor: 'pointer', color: '#d16767' }}
			  color="primary"
	      	className="fa fa-trash"
	      	data-tip={"Supprimer " + props.context}
	      	onClick={() => props.deleteModal(props.row)}>
	      </i>
	  	}
	      <ReactTooltip />

	  </div>
	 );
};

const mapDispatchToProps = {
	detailModal: modalActions.detail,
	editModal: modalActions.edit,
	deleteModal: modalActions.deleteModal,
}

export default connect(null, mapDispatchToProps)(ActionCell)
