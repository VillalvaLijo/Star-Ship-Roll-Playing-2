import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';

import ShipsButton from '../ShipsButton/ShipsButton';
import CreateShipButton from '../CreateShipButton/CreateShipButton';

class ShipYardSidebar extends Component{
    componentDidMount(){
        console.log("ShipYardSideBar, store", this.state)
    }

    //create a toggle event that creates a new ship creation tool in ship 
    //view section of ship yard page.

    render(){
        return(
            <div>
                THIS IS THE SIDE BAR
                <ShipsButton/>
                <CreateShipButton/>
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     userShips: state.userShips
// })

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(ShipYardSidebar);