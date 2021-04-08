import React from 'react';
import {Component} from 'react'
import {connect} from 'react-redux'


//Player is given averagae of 79 points to assign how
//they like to attributes of the ship

//one dice is three points

//averages for player

//   21 points for hull
// 9 points for sheilds
// 3 points for laser damage
// 5 dice for laser accuracy
// 10 points for torpedo damage
// 2 dice for torpedo accuracy
// 5 dice for agility


//pop up a modal on component did mount that explains how to create
//a new ship and then add a button that a user can click on to 
// re-read guidelines


class CreateNewShipPage extends Component{
    


    state = {
        
        ShipValueTokens: 80,

        ShipName: '',
  
        HullStrength: 0,
        SheildStrength: 0,
        LaserDamage: 0,
        LaserAccuracy: 0,
        TorpedoDamage: 0,
        TorpedoAccuracy: 0,
        Agility: 0,
        
        TotalTokens: 0
    }

    // setInterval(() => {
    //     this.recordShipTokens();
    // }, 0050);

    componentDidMount(){
        this.tokenTimer = setInterval(() => this.recordShipTokens(), 50);
    }

    // componentDidUpdate(prevState){

    //     if (this.state !== prevState){
    //         this.recordShipTokens();
    //     };

    // }

    handleNameChange = (event) =>{
        this.setState({
            ShipName: event.target.value
        });
    }

    handleNumInputChangeFor = propertyName =>(event) =>{
        this.setState({
            [propertyName]: event.target.value,
            // ShipValueTokens: this.state.ShipValueTokens - event.target.value,
            // TotalTokens: this.state.TotalTokens + event.target.value

        })
        this.recordShipTokens()
    }

    handleDiceChangeFor = propertyName =>(event) =>{
        this.setState({
            [propertyName]: event.target.value,

             //TotalTokens: + (event.target.value *3),
             //ShipValueTokens: this.state.ShipValueTokens - (event.target.value *3)
        });
        this.recordShipTokens()
    }

    recordShipTokens (){
        //console.log("inside recordShipTokens: this.state");
        this.setState({
            ShipValueTokens: 80 - this.state.HullStrength - this.state.SheildStrength 
            -this.state.LaserDamage-(this.state.LaserAccuracy*3)-this.state.TorpedoDamage-(this.state.TorpedoAccuracy*3) - (this.state.Agility*3)

            // TotalTokens = this.state.HullStrength + this.state.SheildStrength + this.state.LaserDamage + (this.state.LaserAccuracy*3) + this.state.TorpedoDamage + (this.state.TorpedoAccuracy*3) + (this.state.Agility*3)
        });
    };

    createNewShip =(event)=>{
        event.preventDefault();

        console.log("INSIde create new ship")

        if (this.state.ShipValueTokens == 80){
            //dispatch new ship to reducer

            this.props.dispatch({
                type: 'NEW_SHIP_CREATED',
                payload: {
                ShipName: this.state.ShipName,
                HullStrength: this.state.HullStrength,
                SheildStrength: this.state.SheildStrength,
                LaserDamage: this.state.LaserDamage,
                LaserAccuracy: this.state.LaserAccuracy,
                TorpedoDamage: this.state.TorpedoDamage,
                TorpedoAccuracy: this.state.TorpedoAccuracy,
                Agility: this.state.Agility,
                }
            })
        }
        else if (this.state.TotalTokens<80){
            //pop up a modal to tell the player to add more tokens into ship attributes
        }
        else if(this.state.TotalTokens>80){
            //Pop up a modal to tell the player they used to many tokens
        }
    }

    render(){
        return(
            
            <div className="createNewShipPage">

                <div>
                    <button>Instructions</button>
                    {/* create a modal that pops up to render instructions */}
                    <div>Ship Tokens:{this.state.ShipValueTokens}</div>
                    <div>Total Tokens:{this.state.TotalTokens}</div>
                </div>

                <form onSubmit ={this.createNewShip}>
                    <h1>Create New Ship</h1>
                    <div>
                        <label htmlFor="ShipName">
                           Ship Name:
                            <input
                                type="text"
                                name="ShipName"
                                value = {this.state.ShipName}
                                // onChange={this.handleNameChange, this.recordShipTokens}
                                onChange={this.handleNameChange}
                                // onChange={this.recordShipTokens}
                                />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="HullStrength">
                            Hull Strength:
                            <input
                                type="number"
                                name="HullStrength"
                                value= {this.state.HullStrength}
                                // onChange = {this.handleNumInputChangeFor('HullStrength'), this.recordShipTokens}
                                onChange = {this.handleNumInputChangeFor('HullStrength')}
                                // onChange={this.recordShipTokens}
                                // onChange={e=>{this.handleNumInputChangeFor('HullStrength'), this.recordShipTokens}}
                                />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="ShieldStrength">
                            Shield Strength:
                            <input
                                type="number"
                                name="SheildStrength"
                                value= {this.state.SheildStrength}
                                // onChange = {this.handleNumInputChangeFor('SheildStrength'), this.recordShipTokens}
                                onChange = {this.handleNumInputChangeFor('SheildStrength')}
                                // onChange={this.recordShipTokens}
                                //onChange={e=>{this.handleNumInputChangeFor('SheildStrength'), this.recordShipTokens}}
                                />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="LaserDamage">
                            Laser Damage:
                            <input
                                type="number"
                                name="LaserDamage"
                                value= {this.state.LaserDamage}
                                // onChange = {this.handleNumInputChangeFor('LaserDamage'),this.recordShipTokens}
                                onChange = {this.handleNumInputChangeFor('LaserDamage')}
                                // onChange={this.recordShipTokens}
                                //onChange={e=>{this.handleNumInputChangeFor('LaserDamage'), this.recordShipTokens}}
                                />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="LaserAccuracy">
                            Laser Accuracy:
                            <input
                                type="number"
                                name="LaserAccuracy"
                                value= {this.state.LaserAccuracy}
                                // onChange = {this.handleDiceChangeFor('LaserAccuracy'), this.recordShipTokens}
                                onChange = {this.handleDiceChangeFor('LaserAccuracy')}
                                // onChange={this.recordShipTokens}
                                // onChange={e=>{this.handleDiceChangeFor('LaserAccuracy'); this.recordShipTokens}}
                                />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="TorpedoDamage">
                            Torpedo Damage:
                            <input
                                type="number"
                                name="TorpedoDamage"
                                value= {this.state.TorpedoDamage}
                                // onChange = {this.handleNumInputChangeFor('TorpedoDamage'), this.recordShipTokens}
                                onChange = {this.handleNumInputChangeFor('TorpedoDamage')}
                                // onChange={this.recordShipTokens}
                                // onChange={e=>{this.handleNumInputChangeFor('TorpedoDamage'), this.recordShipTokens}}
                                />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="TorpedoAccuracy">
                            Torpedo Accuracy:
                            <input
                                type="number"
                                name="TorpedoAccuracy"
                                value= {this.state.TorpedoAccuracy}
                                // onChange = {this.handleDiceChangeFor('TorpedoAccuracy'), this.recordShipTokens}
                                onChange = {this.handleDiceChangeFor('TorpedoAccuracy')}
                                // onChange={this.recordShipTokens}
                                //onChange={e=>{this.handleDiceChangeFor('TorpedoAccuracy'); this.recordShipTokens}}
                                />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="Agility">
                            Agility:
                            <input
                                type="number"
                                name="Agility"
                                value= {this.state.Agility}
                                // onChange = {this.handleDiceChangeFor('Agility'),this.recordShipTokens}
                                // onChange={this.recordShipTokens}
                                onChange = {this.handleDiceChangeFor('Agility')}
                                //onChange={e=>{this.handleDiceChangeFor('Agility'); this.recordShipTokens}}
                                />
                        </label>
                    </div>
                    <div>
            <input
              className="createNewShip"
              type="submit"
              name="submit"
              value="createNewShip"
            />
          </div>
                </form>
            </div>
        )
    }

}

export default CreateNewShipPage;