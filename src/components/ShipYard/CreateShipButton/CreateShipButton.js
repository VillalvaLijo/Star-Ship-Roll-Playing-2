import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import { useDispatch } from 'react-redux'

const  CreateShipButton = () => {
  const dispatch = useDispatch()



  return (
    <div>
      {/* <span>{value}</span> */}
      <button onClick={() => dispatch({ type: 'CREATE_NEW_SHIP' })}>
        Create New Ship
      </button>
    </div>
  )
}

export default CreateShipButton;