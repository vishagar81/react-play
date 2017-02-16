import React from 'react';

class NumRowsComponent extends React.Component {

	constructor(props){
	    super(props);
	    this.state = {
	       rowsCount: 0
	    };

	    this.updateClicked = this.updateClicked.bind(this);
	    this.numOfRowsChanged = this.numOfRowsChanged.bind(this)
	}

	updateClicked(event){
		if(typeof this.props.onChange === 'function'){
			this.props.onChange(this.state.rowsCount);
		}
	}

	numOfRowsChanged(event){
		this.setState({rowsCount: event.target.value});
	}

	render(){
		return(
			<div className="row">
				<div className="col-sm-4">
				<input 	type="number" min="10" max="500000" 
						className="form-control"
						style={{marginTop:15, marginBottom:15}}
						onChange={this.numOfRowsChanged}>
				</input>
				<input 	type="button" 
						value="Update" 
						className="btn btn-primary"
						onClick={this.updateClicked}></input>
				</div>
			</div>
		)
	}
}
export default NumRowsComponent;