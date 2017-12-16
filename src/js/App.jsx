import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMaps from './googleMaps.jsx'


// Application component ----

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 50.2649,
      lng: 19.023,
      zoom: 15,
      cities:'Katowice'
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
    var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow;
    this.geocodeLatLng(geocoder, parseInt(this._lng.value), parseInt(this._lat.value));
  }
  geocodeLatLng=(geocoder, lng, lat)=>{
    var latlng = {lat, lng};
    geocoder.geocode({'location': latlng}, (results, status) =>{
          if (status === 'OK') {
              var city=results[0].address_components[2].long_name;
              console.log(city);
              if (city.length!=0) {
                this.setState({cities:city},()=>this._city.value=this.state.cities)
              }
            }  else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });
  }

  handleFlip=(e)=>{
    e.preventDefault();
    this.setState({ lat: parseFloat(this._lng.value), lng: parseFloat(this._lat.value)});
    let tmp = this._lng.value;
    this._lng.value = this._lat.value;
    this._lat.value = tmp;
    console.log(this._lat.value,this._lng.value);
  }

  render() {
    return (
      <div>
        <header>
          <h1>GoogleMaps in ReactJ</h1>
          <img className="googlemaps" src="https://vignette.wikia.nocookie.net/logopedia/images/e/e1/Googlemapslogo2014.png/revision/latest?cb=20150309221525"></img>
        </header>
        <form id="sidebar">
          <div>
            <div id="input-wrapper">
               <div  className="field-section">
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
                    <input type="text"
                    defaultValue={this.state.cities}
                    ref={i=>this._city=i}/>
                  </div>
                  <div id="arrow">
                      <a href="#" id="arrow" onClick={this.handleFlip} title="Flip origin and destination"><img src='http://freevector.co/wp-content/uploads/2011/04/87434-double-arrow-200x200.png' id="arrow"></img></a>
                  </div>
              </div>
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
