import React from 'react';
import ReactDOM from 'react-dom';

class LocationComponent extends React.Component{
			constructor(props){
				super(props);

				this.state = {

				};
			}

			componentWillMount(){

			}
			render(){
				return (
            <div className="col-sm-6">
              <p>{this.props.text}</p>
                <div className="inner-addon left-addon">
                  <i className="glyphicon glyphicon-map-marker"></i>
                  <input type="text" className="form-control" style={{width: '100%'}} placeholder="City or airport" />
                </div>
            </div>
				);
			}
		}
export default LocationComponent;
