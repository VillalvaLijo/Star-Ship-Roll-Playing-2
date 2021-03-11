import { combineReducers } from 'redux';
import loginModeReducer from './loginModeReducer';
import userReducer from './userReducer';
import errors from './errorsReducer';

const rootReducer = combineReducers({
    errors,
    loginModeReducer,
    userReducer,
})

export default rootReducer;
