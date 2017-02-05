import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import Map from './MapComponent';

class GoogleMapContainer extends React.Component {
  
  render(){
    if (!this.props.loaded) {
      return (<div class="test">Loading...</div>);
    }

    const style = {
      width: '100vw',
      height: '100vh'
    };

    return (
      <div style={style} className="map-container">
          <Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDK9vjKgVTlBxHxlJRqWliXSrnRK3YevJw',
  version: '3.26'
})(GoogleMapContainer);
