import React, { useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import FilterComponent from './FilterComponent';
import ActionCell from './ActionCell';
import { connect } from 'react-redux';

const customStyles = {
	headCells: {
      style: {
        fontSize: '14px',
        fontWeight: 700,
        //backgroundColor: '#000d17'

      }
    }
};
// https://www.cluemediator.com/datatable-with-pagination-in-react
// https://www.npmjs.com/package/react-data-table-component

createTheme('light', {
	text: {
	  primary: '#FFFFFF',
	  secondary: '#306964',
	},
	background: {
	  default: 'transparent',
	},
	context: {
	  background: '#cb4b16',
	  text: '#FFFFFF',
	},
	divider: {
	  default: '#80878c',
	},
	button: {
	  default: '#306964',
	  hover: 'rgba(0,0,0,.08)',
	  focus: 'rgba(255,255,255,.12)',
	  disabled: 'rgba(0,0,0,.12)',
	},
	sortFocus: {
	  default: '#306964',
	},
	
});

createTheme('dark', {
	text: {
	  primary: '#FFFFFF',
	  secondary: '#3ddeed',
	},
	rows: {
		color: '#FFFFFF'
	},
	background: {
	  default: 'hsla(0,0%,100%,.1)!important',
	},
	context: {
	  background: '#cb4b16',
	  text: '#FFFFFF',
	},
	divider: {
	  default: '#073642',
	},
	button: {
	  default: '#3ddeed',
	  hover: 'rgba(0,0,0,.08)',
	  focus: 'rgba(255,255,255,.12)',
	  disabled: 'rgba(0,0,0,.12)',
	},
	sortFocus: {
	  default: '#2aa198',
	},
	selected: {
	  default: '#2aa198',
	},
	
});


const DefaultTable = (props) => {
	const { loading, data } = props.data;
	console.log('data recu dans default table:', data)
	console.log('loading dans default table:', loading)
	const [filterText, setFilterText] = useState('');
	const actionButton = {
	    name: 'Action',
	    cell: row => <ActionCell row={row} context={props.context} actionContent={props.actionContent}/>,
	    ignoreRowClick: true,
	    allowOverflow: true,
	    button: true,
	}
	const columns = props.actionButton ? [...props.columns, actionButton] : [...props.columns];
	
	const filteredItems = data ?
	data
							.filter(item => { 
                            	for (var key in props.filteredColumns) {
                            		let filterCol = props.filteredColumns[key]
	                            	if(item[filterCol] && item[filterCol].toLowerCase().includes(filterText && filterText.toLowerCase())){
	                            		return true;
	                            	}
	                            }

	                            return false;
                            })
							.map( (datum, index) => {
								index += 1;

								return { index , ...datum }
							})
                            :
                            [];		
// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
// function convertArrayOfObjectsToCSV(array, data) {
// 	let result;
	
// 	const columnDelimiter = ',';
// 	const lineDelimiter = '\n';
// 	const keys = Object.keys(data[0]);
  
// 	result = '';
// 	result += keys.join(columnDelimiter);
// 	result += lineDelimiter;
  
// 	array.forEach(item => {
// 	  let ctr = 0;
// 	  keys.forEach(key => {
// 		if (ctr > 0) result += columnDelimiter;
  
// 		result += item[key];
		
// 		ctr++;
// 	  });
// 	  result += lineDelimiter;
// 	});
  
// 	return result;
//   }
  
//   // Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
//   function downloadCSV(array, dataIt) {
// 	  console.log('2: ', dataIt)
// 	const link = document.createElement('a');
// 	let csv = convertArrayOfObjectsToCSV(array, data);
// 	if (csv == null) return;
  
// 	const filename = 'export.csv';
// 	if (!csv.match(/^data:text\/csv/i)) {
// 	  csv = `data:text/csv;charset=utf-8,${csv}`;
// 	}
  
// 	link.setAttribute('href', encodeURI(csv));
// 	link.setAttribute('download', filename);
// 	link.click();
//   }
  
  
//   const Export = ({ onExport }) => (
// 	<Button onClick={e => onExport(e.target.value)}>Export</Button>
//   );

//   console.log('1: ', dataItems)
// const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data, dataItems)} />, []);
//    console.log('logueur 1:',filteredItems.length )
//    console.log('logueur 2:',columns.length )
//    const All = filteredItems.length 
   
   
//    const testNum = (a) => {
	   
// console.log("combien reçoit t'il? (a) : ", a)

// 	   let result;

// 	   if(a>100){
//         console.log('1')
//         result = [5, 10, 15, 20, 50, 100 , a];
//         }
// 		else if (a = 100){
//         console.log('2')
//         result = [5, 10, 15, 20, 50, 100];
//         }
// 		else if (a > 50 && a < 100){
//         console.log('3')
//         result = [5, 10, 15, 20, 50, a];
//         }
// 		else if (a = 50){
//         console.log('4')
//         result = [5, 10, 15, 20, 50];
//         }
// 		else if (a > 20 && a < 50){
//         console.log('5')
//         result = [5, 10, 15, 20, a];
//         }
// 		else if (a = 20){
//         console.log('6')
//         result = [5, 10, 15, 20];
//         }
// 		else if (a > 15 && a < 20){
//         console.log('7')
//         result = [5, 10, 15, a];
//         }
// 		else if (a = 15){
//         console.log('8')
//         result = [5, 10, 15];
//         }
// 		else if (a > 10 && a < 15){
//         console.log('9')
//         result = [5, 10, a];
//         }
// 		else if (a = 10){
//         console.log('10')
//         result = [5, 10];
//         }
// 		else if (a > 5 && a < 10){
//         console.log('11')
//         result = [5, a];
//         }
// 		else if (a = 5){
//         console.log('12')
//         result = [ 5];
//         }
// 		else if (a < 5){
//         console.log('13')
//         result = [a];
//         }
// 		 // eslint-disable-next-line

// console.log('ce resultat (var result): ', result)
// const newResult = result.map(function (x) { 

// 	// return parseInt(x, 10); 
// 	return x
//   });
//   console.log('newResult', newResult)
// return newResult

// }

// var a = ['1','2','3']
// var result = a.map(function (x) { 
//   return parseInt(x, 10); 
// });

// console.log(result);


return(
    	<DataTable
		  columns={columns}
		  data={filteredItems}
		  pagination
		  paginationPerPage={10}
		  paginationRowsPerPageOptions={ [5, 10, 20, 50, 100]}
		  
		  paginationComponentOptions={{
			rowsPerPageText: 'Resultats par page:',
			rangeSeparatorText: 'sur',
		  }}
		  subHeader
		  className={'dataTable-' + props.theme} 
		  subHeaderComponent={
		  	<FilterComponent
		  		context={props.context}
		  		setFilterText={setFilterText}
		  		filterText={filterText }
		  		actionContent={props.actionContent}
		  	/>
		  }
		  theme={ props.theme }
		  highlightOnHover={true}
		  noHeader={true}
		  //noHeader={false}
		  //actions={actionsMemo}
		  customStyles={ props.theme === 'dark' ? customStyles : {} }
		  progressPending={loading}
		/>
    )
}

const mapStateToProps = state => {
  return {
    theme: state.theme.theme
  }
}

export default connect(
  mapStateToProps,
  null
)(DefaultTable)
