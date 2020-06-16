import {combineReducers} from 'redux'
import userReducer from '../reducers/userReducer'
import {reducer as formReducer} from 'redux-form'
import tvmazeReducer from './tvmazeReducer';

export default combineReducers ({
    form: formReducer,
    users: userReducer,
    shows: tvmazeReducer
});