import {combineReducers} from 'redux'
import userReducer from '../reducers/userReducer'
import MedicalAppointmentReducer from '../reducers/MedicalAppointmentReducer'
import {reducer as formReducer} from 'redux-form'

export default combineReducers ({
    form: formReducer,
    users: userReducer,
    MedicalAppointments: MedicalAppointmentReducer
});