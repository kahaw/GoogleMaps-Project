import React from 'react';
import ReactDOM from 'react-dom';

export default class DestinationField extends React.Component {

    constructor(props){
        super(props);
        console.log(this.props);
    }

    startChange=(e)=>{
        this.setState({from:e.target.value})
      }
      endChange=(e)=>{
        this.setState({to:e.target.value})
      }

    render() {
        return (
            <div>
                <input type="text" id="direction-start" placeholder={this.props.from} required="true" onChange={this.startChange} value={this.props.from}></input>
                <input type="text" id="direction-start" placeholder="To"   required="true" onChange={this.endChange}   value={this.props.to}></input>
            </div>
        )
    }
}