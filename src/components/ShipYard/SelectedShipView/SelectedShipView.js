import react from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';


class SelectedShipView extends Component{

    componentDidMount(){

        //just console.loging Object.entries so I can see whats going on
        console.log("Inside SelectedShipView: Object.entries", Object.entries(this.props.reduxStore.selectedShipReducer))
    
    }

    render(){

        // if(this.state.selectedShip)
        if (Object.entries(this.props.reduxStore.selectedShipReducer).length === 0)
        {
            return(
                <div>
                    <h3>Selected Ship View</h3>
                    <h4>No Ship Selected</h4>
                    {/* <h3>ShipName {this.state.selectedShip.name}</h3> */}
                    {/* <h3> {JSON.stringify(this.state.selectedShip)}</h3> */}
                </div>
    
            );
        }else if (Object.entries(this.props.reduxStore.selectedShipReducer).length >1 ){
            return(
                <div>
                    {/* <h3>A ship has been selected</h3> */}
                    <h3>Ship Name:{this.props.reduxStore.selectedShipReducer.ShipName}</h3>
                    <table>
                        <thead>
                            <tr>
                            <th>Attribute</th>
                            <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hull Strength</td>
                                <td >{this.props.reduxStore.selectedShipReducer.HullStrength}</td>
                            </tr>
                            <tr>
                                <td>Sheild Strength</td>
                                <td>{this.props.reduxStore.selectedShipReducer.SheildStrength}</td>
                            </tr>
                            <tr>
                                <td>Laser Damage</td>
                                <td>{this.props.reduxStore.selectedShipReducer.LaserDamage}</td>
                            </tr>
                            <tr>
                                <td>Laser Accuracy</td>
                                <td>{this.props.reduxStore.selectedShipReducer.LaserAccuracy}</td>
                            </tr>
                            <tr>
                                <td>Torpedo Damage</td>
                                <td>{this.props.reduxStore.selectedShipReducer.TorpedoDamage}</td>
                            </tr>
                            <tr>
                                <td>Torpedo Accuracy</td>
                                <td>{this.props.reduxStore.selectedShipReducer.TorpedoAccuracy}</td>
                            </tr>
                            <tr>
                                <td>Agility</td>
                                <td>{this.props.reduxStore.selectedShipReducer.Agility}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* <h5>Hull Strength: {this.props.reduxStore.selectedShipReducer.HullStrength}</h5>
                    <h5>Sheild : {this.props.reduxStore.selectedShipReducer.HullStrength}</h5>
                    <h5>Hull Strength: {this.props.reduxStore.selectedShipReducer.HullStrength}</h5>
                    <h5>Hull Strength: {this.props.reduxStore.selectedShipReducer.HullStrength}</h5>
                    <h5>Hull Strength: {this.props.reduxStore.selectedShipReducer.HullStrength}</h5>
                    <h5>Hull Strength: {this.props.reduxStore.selectedShipReducer.HullStrength}</h5>
                    <h5>Hull Strength: {this.props.reduxStore.selectedShipReducer.HullStrength}</h5> */}
                </div>
            )
        }
        

        
    };
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(SelectedShipView);