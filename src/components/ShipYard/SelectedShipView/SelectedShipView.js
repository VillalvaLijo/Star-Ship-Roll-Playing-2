import react from 'react';
import {Component} from 'react';
import connect from 'react-redux';


class SelectedShipView extends Component{

    render(){
        return(
            <div>
                <h3>Selected Ship View</h3>
            </div>

        );
    };
}

const mapStateToProps = state => ({
    selectedShip: state.selectedShip
});

export default connect(mapStateToProps)(SelectedShipView);