import React from 'react';
import ReactDOM from 'react-dom';


export default class GoogleMaps extends React.Component {
  constructor() {
    super();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.setOptions(
      nextProps.lat,
      nextProps.lng,
      nextProps.zoom
    );

    console.log(nextProps.lat);
  }

  componentDidMount() {
    this.renderMap();
  }

  setOptions(lat, lng, zoom) {
    let mapOptions = {
      center: { lat, lng },
      zoom
    };
    console.log(mapOptions);

    this.map.setOptions(mapOptions);
  }

  renderMap() {
    let mapOptions= {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: this.props.zoom
    }
    this.map = new google.maps.Map(this.map, mapOptions);
  }

  render() {
    return (
      <div id="map" ref={m => this.map = m} />
    );
  }
}
