import React from 'react';
import { Component } from 'react';
import connect from 'react-redux';

import ShipsButton from './ShipsButton/ShipsButton';


class ShipYardSidebar extends Component{

    render(){
        return(
            <div>
                THIS IS THE SIDE BAR
                <ShipsButton/>
            </div>
        )
    }
}

const marStateToProps = state => ({
    userShips: state.userShips
})

export default connect(mapStateToProps)(ShipYardSidebar);