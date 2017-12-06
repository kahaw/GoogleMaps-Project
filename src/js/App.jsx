import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      map:this.props.map,
      travelMode:'walking',
      from:'',
      to:''

    }
  }

  handleChange=(e)=>{
    this.setState({travelMode:e.target.value})
  }
  handleFlip=()=>{
    this.setState({from:this.state.to,to:this.state.from})
  }
  startChange=(e)=>{
    this.setState({from:e.target.value})
  }
  endChange=(e)=>{
    this.setState({to:e.target.value})
  }


  render(){
    console.log(this.state.travelMode);
    return <div>
        <div id="map"></div>
        <div id="sidebar">
          <header>
            <h1>GoogleMaps in ReactJ</h1>
            <img className="googlemaps" src="https://vignette.wikia.nocookie.net/logopedia/images/e/e1/Googlemapslogo2014.png/revision/latest?cb=20150309221525"></img>
          </header>
          <form className='form-wrapper'>
            <div className="field-section">
                <select onChange={this.handleChange} value={this.state.travelMode}>
                  <option value="walking">Walking</option>
                  <option value="by car">Car</option>
                  <option value="by bicycle">Bicycling</option>
                </select>
              <input type="text" id="direction-start" placeholder="From" onChange={this.startChange} required="true" value={this.state.from}></input>
              <input type="text" id="direction-end" placeholder="To" onChange={this.endChange} required="true" value={this.state.to}></input>
            </div>
            <div id="arrow">
            <a href="#" id="flip-direction" onClick={this.handleFlip} title="Flip origin and destination"><img src='http://freevector.co/wp-content/uploads/2011/04/87434-double-arrow-200x200.png' id="arrow"></img></a>
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
