import React from 'react';
import {Component} from 'react'
import {connect} from 'react-redux'

class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    };

    login = (event) => {
        event.preventDefault();

        if (this.state.username && this.state.password){
            this.props.dispatch({
                type: 'LOGIN'
                payload: {
                    username: this.state.username,
                    password: this.state.password,
                },
            });
        }else {
            this.props.dispatch({ type: 'LOGIN_INPUT_ERROR'});
        }
        //navigate to user home on login
        this.props.history.push("/home")
    }
    
}