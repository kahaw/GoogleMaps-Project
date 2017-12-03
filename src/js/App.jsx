import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      map:this.props.map,
      value:''
    }
  }

  handleChange=(e)=>{
    this.setState({selected:e.target.value})
  }

  render(){
    console.log(this.state.map);
    return <div>
        <div id="map"></div>
        <div id="sidebar">
          <header>
            <h1>GoogleMaps in ReactJ</h1>
            <img className="googlemaps" src="https://vignette.wikia.nocookie.net/logopedia/images/e/e1/Googlemapslogo2014.png/revision/latest?cb=20150309221525"></img>
          </header>
          <form className='form-wrapper'>
            <div className="field-section">
              <label>
                <select onChange={this.handleChange} value={this.state.selected}>
                  <option value="walking">Walking</option>
                  <option value="by car">Car</option>
                  <option value="by bicycle">Bicycling</option>
                </select>
                <span>from</span>
              </label>
            </div>
          </form>
        </div>
      </div>
  }
}
document.addEventListener("DOMContentLoaded",function(){
  ReactDOM.render(
    <App map={map}/>,
    document.getElementById('app')
  )
})
