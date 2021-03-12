import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';

class BattleStats extends Component{

    render(){

        return(
            <div>
                <h3>Stats for slected ship displayed here</h3>
            </div>
        );
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps) (BattleStats);