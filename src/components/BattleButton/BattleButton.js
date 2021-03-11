import React from 'react';
import {Component} from 'react'

class BattleButton extends Component{

    battleClick (){
        console.log("Battle Button Clicked");
    }

    render(){
        return(
            <div>
                <button onClick = {battleCLick}>Start Battle</button>
            </div>
        )
    }
}

export default BattleButton;