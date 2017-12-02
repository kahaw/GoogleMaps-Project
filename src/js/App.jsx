import React from 'react';
import ReactDOM from 'react-dom';


//npm install --save google-maps-react
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      map:this.props.map
    }
  }

  render(){
    console.log(this.state.map);
    return <div id="map"></div>
  }
}
document.addEventListener("DOMContentLoaded",function(){
  ReactDOM.render(
    <App map={map}/>,
    document.getElementById('app')
  )
})
