import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';

import ShipsButton from '../ShipsButton/ShipsButton';


class ShipYardSidebar extends Component{
    componentDidMount(){
        console.log("ShipYardSideBar, store", this.state)
    }

    render(){
        return(
            <div>
                THIS IS THE SIDE BAR
                <ShipsButton/>
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     userShips: state.userShips
// })

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(ShipYardSidebar);