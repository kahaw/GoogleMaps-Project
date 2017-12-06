import React from 'react';
import ReactDOM from 'react-dom';
class GoogleMaps extends React.Component {
  constructor() {
    super();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this._setOptions(
      nextProps.lat,
      nextProps.lng,
      nextProps.zoom
    );
  }

  componentDidMount() {
    this._renderMap();
  }

  _setOptions(lat, lng, zoom) {
    let mapOptions = {
      center: { lat, lng },
      zoom
    };
    console.log(mapOptions);

    this._map.setOptions(mapOptions);
  }

  _renderMap() {
    let mapOptions= {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: this.props.zoom
    }
    this._map = new google.maps.Map(this._map, mapOptions);
  }

  render() {
    return (
      <div id="map" ref={m => this._map = m} />
    );
  }
}

// Application component ----

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 50.2649,
      lng: 19.023,
      zoom: 8
    }
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }
  //.bind()
  //[[BoundThis]] - the value that is always passed as this value when calling the wrapped function.

  _handleFormSubmit(e) {
    e.preventDefault();
    if (this._lat.value.length > 0)
      this.setState({ lat: parseFloat(this._lat.value) });
    if (this._lng.value.length > 0)
      this.setState({ lng: parseFloat(this._lng.value) });
    if (this._zoom.value.length > 0)
      this.setState({ zoom: parseInt(this._zoom.value) });
  }

  render() {
    return (
      <div>
        <header>
          <h1>GoogleMaps in ReactJ</h1>
          <img className="googlemaps" src="https://vignette.wikia.nocookie.net/logopedia/images/e/e1/Googlemapslogo2014.png/revision/latest?cb=20150309221525"></img>
        </header>
        <form className>
          <div className>
            <label>Lat</label>
            <input type="number"
              name="lat"
              defaultValue={this.state.lat}
              ref={i => this._lat = i} />
            <label>Lng</label>
            <input type="number"
              name="lng"
              defaultValue={this.state.lng}
              ref={i => this._lng = i} />
            <label>Zoom</label>
            <input type="number"
              name="zoom"
              defaultValue={this.state.zoom}
              ref={i => this._zoom = i} />
          </div>
          <div id="arrow">
            <a href="#" id="flip-direction" onClick={this.handleFlip} title="Flip origin and destination"><img src='http://freevector.co/wp-content/uploads/2011/04/87434-double-arrow-200x200.png' id="arrow"></img></a>
          </div>
          <button onClick={this._handleFormSubmit}>Submit</button>
        </form>
        <GoogleMaps
          lat={this.state.lat}
          lng={this.state.lng}
          zoom={this.state.zoom} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
