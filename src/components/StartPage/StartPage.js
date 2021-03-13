import React from 'react'
import {Component} from 'react';

import ShipYardButton from '../ShipYardButton/ShipYardButton'

class StartPage extends Component{
    //on button click of start game, need to
    //send message to register new game and rgister the 
    //number of players

    componentDidMount(){
        console.log("ComponentDidMount StartPage, this.props", this.props);
    }

    render(){
        return(
            <div>
                <h1>Star-Ship Roll Playing Game</h1>
                <p>This Game is a exciting roll playing game
                    where start ships batle each other.
                </p>
                <ShipYardButton history={this.props.history}/>
            </div>
        )
    }
}

export default StartPage;
