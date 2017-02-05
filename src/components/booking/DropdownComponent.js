import React from 'react';

class DropdownComponent extends React.Component{
			constructor(props){
				super(props);
				this.state = {

				};
			}

			componentWillMount(){

			}

      _onSelect(){

      }

			render(){
        let adults = [];
        for (let i = 1; i <= this.props.adultCount; ++i) {
            const opt = <option key={i} value={i}>{i}</option>
            adults.push(opt)
        }

				return (
            <div className="col-sm-2">
              <p>{this.props.text}</p>
              <select name="select" className="form-control">
                {adults}
              </select>
            </div>
				);
			}
		}
export default DropdownComponent;
