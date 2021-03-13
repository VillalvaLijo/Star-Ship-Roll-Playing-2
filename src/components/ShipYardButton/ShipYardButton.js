import React from 'react'
import { connect } from 'react-redux'

function ShipYardButton(props){

   function shipYardClick(){
        console.log("ShipYard Button Clicked");
        // console.log("this.props: ", this.props); //props undefined
        // this.props.history.push("/shipyard");
        // this.props.history.push("/shipyard");
        console.log("this.history", props)
        props.history.push('/shipyard');

    }

    return(
        <div>
            <button onClick={shipYardClick}>Ship Yard</button>
        </div>
    )
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps) (ShipYardButton);