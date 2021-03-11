import { combineReducers } from 'redux';
import loginModeReducer from './loginModeReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    loginModeReducer(),
    userReducer(),
})

export default rootReducer;
