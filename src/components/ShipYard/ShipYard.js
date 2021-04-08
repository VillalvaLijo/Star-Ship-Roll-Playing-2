import React from 'react';
import { Component} from 'react';
import {connect} from 'react-redux';

import ShipYardSidebar from './ShipYardSidebar/ShipYardSidebar';
import SelectedShipView from './SelectedShipView/SelectedShipView';
import BattleStats from './BattleStats/BattleStats';

import ConditionallyRenderedTwoThirds from './ConditionallyRenderedTwoThirds/ConditionallyRenderedTwoThirds'

import './ShipYard.css';



class ShipYard extends Component{

    render(){
        return(
            <div>
                <h1>SHIP YARD</h1>
                <div className = "Ship-Yard-Container">
                
                    <div className = "shipsSidebar">
                        <ShipYardSidebar/>
                    </div>
                {/* If reduxStore.SelectedShip = create_new_ship render the createNewShipPage Component */}
                    <ConditionallyRenderedTwoThirds/>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(ShipYard);