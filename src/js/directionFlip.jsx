import React from 'react';
import ReactDOM from 'react-dom';

export default class DestinationFlip extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    handleFlip=()=>{
        this.setState({
            from: this.props.to, 
            to: this.props.from}
        )
    }

    render() {
        return (
            <a href="#" 
                id="flip-direction" 
                onClick={this.handleFlip} 
                title="Flip origin and destination">
                <img src='http://freevector.co/wp-content/uploads/2011/04/87434-double-arrow-200x200.png' id="arrow"></img>
            </a>
        )
    }



}