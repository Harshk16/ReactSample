import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import geoReducer from "./geoReducer";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    geo: geoReducer
});