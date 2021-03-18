import { combineReducers } from 'redux';
import loginModeReducer from './loginModeReducer';
import userReducer from './userReducer';
import errors from './errorsReducer';
import selectedShipReducer from './selectedShipReducer';

const rootReducer = combineReducers({
    errors,
    loginModeReducer,
    userReducer,
    selectedShipReducer,
})

export default rootReducer;
