import React from 'react'
import {Component} from 'react';

class StartPage extends Component{
    //on button click of start game, need to
    //send message to register new game and rgister the 
    //number of players

    render(){
        return(
            <div>
                <h1>Star-Ship Roll Playing Game</h1>
                <p>This Game is a exciting roll playing game
                    where start ships batle each other.
                </p>
            </div>
        )
    }
}

export default StartPage;
