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
                <button onClick = {shipsClick}>Your Ship Yard</button>
            </div>
        )
    }
}

export default ShipsButton;