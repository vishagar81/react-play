import React from 'react';
import Loader from 'react-loader-advanced';
import ReactDataGridPage from './ReactDataGridPage';
import NumRowsComponent from './NumRowsComponent';

class ReactDataGridPageWrapper extends React.Component{

	constructor(props){
	    super(props);
	    this.state = {
	       rowsCount: 10
	    };
	    
	    this.numRowsChangeHandler = this.numRowsChangeHandler.bind(this);
	}

	numRowsChangeHandler(numRows){
		this.setState({rowsCount: numRows});		
	}

	render(){

		return(	
			<div>
				<NumRowsComponent onChange={this.numRowsChangeHandler}/>
				<ReactDataGridPage numOfRows={this.state.rowsCount}/>				
			</div>
			
		)
	}
}
export default ReactDataGridPageWrapper;