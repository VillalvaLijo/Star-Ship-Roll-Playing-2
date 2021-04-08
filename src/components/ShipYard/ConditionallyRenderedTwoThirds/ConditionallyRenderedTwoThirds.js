import React from 'react';
import { Component } from 'react';
import { connect } from "react-redux"

import './ConditionallyRenderedTwoThirds.css'

import SelectedShipView from '../SelectedShipView/SelectedShipView';
import BattleStats from '../BattleStats/BattleStats';
import CreateNewShipPage from '../CreateNewShipPage/createNewShipPage';

class ConditionallyRenderedTwoThirds extends Component{

    render(){
        if(this.props.reduxStore.selectedShipReducer == 'create_new_ship'){
            return (
                <CreateNewShipPage/>
            )
        }
        else{
            return(
                <div className = "TwoThirdsDiv">
                <div className ="ShipViewDiv">
                <SelectedShipView/>
                </div>
                <div className = "BattleStats">
                <BattleStats/>
                </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(ConditionallyRenderedTwoThirds)