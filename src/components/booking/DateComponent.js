import React from 'react';
import Datepicker from 'react-datepicker/dist/react-datepicker';
import moment from 'moment';

class DateComponent extends React.Component{
      constructor(props){
          super(props);
          this.state = {
              startDate: moment()
  				};
          this.handleChange = this.handleChange.bind(this);
      }

      handleChange(date){
        this.setState({startDate: date});
      }

			render(){
				return (
            <div className="col-sm-6">
              <p>{this.props.text}</p>
                <div className="inner-addon left-addon">
                  <i className="glyphicon glyphicon-calendar"></i>
                  <Datepicker className="form-control" selected={this.state.startDate}
                              onChange={this.handleChange}
                              peekNextMonth
                              showMonthDropdown
                              showYearDropdown
                              dropdownMode="select"
                              placeholderText={this.props.placeText}/>
                </div>
            </div>
				);
			}
		}
export default DateComponent;
