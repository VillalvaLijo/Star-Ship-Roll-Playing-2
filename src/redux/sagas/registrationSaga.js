import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "register" actions
function* registerUser(action){
    try{
        yield put({ type: 'CLEAR_REGISTRATION_ERROR'});

   //console log action payload to see what you are getting from the 
    //registration page
    console.log("inside registerUser Saga, action.payload:", action.payload);
    
    //passes the username and password from the payload to the server
    yield axios.post('/api/user/register', action.payload);

    //automatically log a user in after registration
    yield put({type: 'LOGIN', payload: action.payload});

    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    yield put({ type: 'SET_TO_LOGIN_MODE'});
    }catch (error){
        console.log('Error with user registration:', error);
        yield put({type: 'REGISTRATION_FAILED'});
    }
}

function* registrationSaga(){
    yield takeLatest('REGISTER', registerUser);
}

export default registrationSaga;