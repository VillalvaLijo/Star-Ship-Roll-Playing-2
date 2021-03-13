import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

class ShipsButton extends Component{

    shipsClick (){
        console.log("Ships Button clicked");
    }

    render(){
        return (
            <div>
                <button onClick = {this.shipsClick}>These are your ships</button>
            </div>
        )
    }
}

export default ShipsButton;