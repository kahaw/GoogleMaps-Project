import React from 'react';
import ReactDOM from 'react-dom';

import DestinationField from './destinationField.jsx';
import DestinationFlip from './directionFlip.jsx'

export default class MapControls extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    handleChange=(e)=>{
        this.setState({travelMode:e.target.value})
        console.log
    }

    render() {
        return (
            <div id="sidebar">
            <header>
              <h1>GoogleMaps in ReactJ</h1>
              <img className="googlemaps" src="https://vignette.wikia.nocookie.net/logopedia/images/e/e1/Googlemapslogo2014.png/revision/latest?cb=20150309221525"></img>
            </header>
            <form className='form-wrapper'>
              <div className="field-section">
                  <select onChange={this.handleChange} >
                    <option value="walking">Walking</option>
                    <option value="by_car">Car</option>
                    <option value="by_bicycle">Bicycling</option>
                  </select>
                    <DestinationField/>
              </div>
              <div id="arrow">
                    <DestinationFlip/>
              </div>
            </form>
          </div>
        )
    }



}