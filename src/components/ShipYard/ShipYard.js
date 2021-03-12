import React from 'react';
import { Component} from 'react';
import {connect} from 'react-redux';

import ShipYardSidebar from './ShipYardSidebar/ShipYardSidebar';
import SelectedShipView from './SelectedShipView/SelectedShipView';
import BattleStats from './BattleStats/BattleStats';



class ShipYard extends Component{

    render(){
        return(
            <div>
                <h1>SHIP YARD</h1>
                <div>
                    <ShipYardSidebar/>
                </div>
                <div>
                    <SelectedShipView/>
                </div>
                <div>
                    <BattleStats/>
                </div>
            </div>

        )
    }
}

export default ShipYard;