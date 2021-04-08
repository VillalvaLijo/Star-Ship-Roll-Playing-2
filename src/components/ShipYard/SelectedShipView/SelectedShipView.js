import react from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';


class SelectedShipView extends Component{

    render(){

        // if(this.state.selectedShip)
        return(
            <div>
                <h3>Selected Ship View</h3>
                {/* <h3>ShipName {this.state.selectedShip.name}</h3> */}
            </div>

        );
    };
}

const mapStateToProps = state => ({
    selectedShip: state.selectedShip
});

export default connect(mapStateToProps)(SelectedShipView);