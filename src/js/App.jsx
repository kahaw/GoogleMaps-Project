import React from 'react';
import ReactDOM from 'react-dom';

import MapControls from './mapControl.jsx'

class App extends React.Component {
  
  constructor(props){
    super(props);
    
    this.state={
      map:  this.props.map,
    }
    
    this.props = {
      travelMode: 'walking',
      from: 'Katowice',
      to:   'Sosnowiec'
    }
  }

  render(){
    return (
      <div>
          <div id="map">
          </div>
          <div>
            <MapControls/>
          </div>
      </div>
    )
  }
}

document.addEventListener("DOMContentLoaded",function(){
  ReactDOM.render(
    <App map={map}/>,
    document.getElementById('app')
  )
})
