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
    }
}