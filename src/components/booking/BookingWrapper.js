import React from 'react';
import DateComponent from './DateComponent';
import DropdownComponent from './DropdownComponent';
import PlaceComponent from './PlacesComponent';
import '..//..//styles/booking.css';

class BookingWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       return: true,
       oneWay: false,
       multiple: false,
       ukAirports:[]
    };

    this.handleOneWayClick = this.handleOneWayClick.bind(this);
    this.handleReturnClick = this.handleReturnClick.bind(this);
    this.handleMultipleClick = this.handleMultipleClick.bind(this);
  }

  componentWillMount(){
  }

  handleOneWayClick(event){
     event.preventDefault()
     this.setState({oneWay: true, return: false, multiple: false})
  }

  handleReturnClick(event){
     event.preventDefault()
     this.setState({oneWay: false, return: true, multiple: false})
  }

  handleMultipleClick(event){
    event.preventDefault()
    this.setState({oneWay: false, return: false, multiple: true})
  }

  render(){
    var returnDateComponent = this.state.return || this.state.multiple ? <DateComponent text={'Returning on'}/> : null;
    var returnButtonStyle = this.state.return ? "btn btn-primary" : "btn btn-default";
    var oneWayButtonStyle = this.state.oneWay ? "btn btn-primary" : "btn btn-default";
    var multipleButtonStyle = this.state.multiple ? "btn btn-primary" : "btn btn-default";
    
    return(
      <div className="jumbotron">
        <video id="video-background" preload muted autoPlay loop>
          <source src="http://res.cloudinary.com/vishagar/video/upload/v1487093068/City_of_Lakes_Udaipur_4K_small_mrgcz1.mp4" type="video/mp4" />
        </video>
        <div className="row">
            <div className="col-md-6">
               <div className="btn-group btn-group-md" role="group" aria-label="...">
                  <button type="button" className={returnButtonStyle} onClick={this.handleReturnClick}>Return</button>
                  <button type="button" className={oneWayButtonStyle} onClick={this.handleOneWayClick}>One way</button>
                  <button type="button" className={multipleButtonStyle} onClick={this.handleMultipleClick}>Multiple destinations</button>
               </div>
            </div>
        </div>
        <div className="form-group">
          <div className="row">
            <PlaceComponent text={'Flying from'}/>
            <PlaceComponent text={'Flying to'}/>
          </div>
          <div className="row">
            <DateComponent text={'Starting on'}/>
             {returnDateComponent}
          </div>
          <div className="row">
            <DropdownComponent text={'Adults (18+)'} adultCount={6} placeText={'Click to select onward date'}/>
            <DropdownComponent text={'Children'} adultCount={6} placeText={'Click to select return date'}/>
          </div>
          <div className="row">
            <div className="col-sm-6">
                <button type="submit" className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BookingWrapper;
