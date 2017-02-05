import React from 'react';
import ReactDOM from 'react-dom';

const evtNames = ['dragend', 'click'];
const camelize = function(str){
  return str.split(' ').map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
};

class MapComponent extends React.Component {
  constructor(props){
    super(props);
    const {lat,lng} = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    };
  }

  componentDidMount(){
    if(this.props.centerAroundCurrentLocation){
      if(navigator && navigator.geoLocation){
        navigator.geolocation.getCurrentPosition((pos) => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
        });
      }
    }
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.google !== this.props.google){
      this.loadMap();
    }

    if(prevState.currentLocation !== this.state.currentLocation){
      this.recenterMap();
    }

  }

  recenterMap(){
    const map = this.map;
    const curr = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
        let center = new maps.LatLng(curr.lat, curr.lng);
        map.panTo(center);
    }
  }

  loadMap(){
    if(this.props && this.props.google){
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let {zoom} = this.props;
      const {lat, lng} = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      });


      this.map = new maps.Map(node, mapConfig);
      evtNames.forEach( e => {
        this.map.addListener(e, this.handleEvent(e));
      });
    }
  }

  handleEvent(evtName){
    let timeout;
    const handlerName = 'on${camelize(evtName)}';

    return (e) => {
      if(timeout){
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(()=> {
        alert(this.props[handlerName]);
        if(this.props[handlerName]){
          this.props[handlerName](this.props, this.map, e);
        }
      }, 0);
    }
  }

  onClick(){
    alert("Onlick");
  }

  dragend(){
    alert("Drag end");
  }

  render(){
    return(
      <div ref="map">
        Loading map..
      </div>
    );
  }
}

MapComponent.propTypes = {
  google: React.PropTypes.object,
  zoom: React.PropTypes.number,
  initialCenter: React.PropTypes.object,
  centerAroundCurrentLocation: React.PropTypes.bool,
  onMove: React.PropTypes.func,
  onClick: React.PropTypes.func,
  onDragend: React.PropTypes.func
};

MapComponent.defaultProps = {
  zoom: 17,
  initialCenter: {
    lat: 51.5073509,
    lng: -0.127758
  },
  centerAroundCurrentLocation: true,
  onMove: function() {},
  onClick: function() {},
  onDragend: function() {}
};

export default MapComponent;
