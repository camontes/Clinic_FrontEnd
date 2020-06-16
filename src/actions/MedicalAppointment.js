import show from '../apis/show'
import history from '../history'
import {store} from '../index'

import {
    FETCH_MEDICALS,
    UNMOUNT_MEDICALS,
    CREATE_MEDICAL_APPOINTMENT,
    ERROR_EXIST
} from './type'

export const fetchMedicals = () => async dispatch => {

    const response = await show.get('/MedicalAppointments')
    dispatch({type: FETCH_MEDICALS, payload:response.data})
}

export const createMedicalAppointment = (form) => async dispatch => {

    const state = store.getState();
    const user = state.users.currentUser;
    
    try{
        if(!user){
            history.push("/Errors")
        }
        else{
            const response = await show.post('/MedicalAppointments', {...form, username: user.username})
            dispatch({type: CREATE_MEDICAL_APPOINTMENT, payload:response.data})
            history.push("/MedicalAppointment/list")
        }
    }
    catch(error){
        if(error.response.status === 409){
            dispatch({type: ERROR_EXIST})
        }
        else{
            history.push("/Errors")
        }
    }
}

export const UnmountMedicals = () => async dispatch => {

    dispatch({type: UNMOUNT_MEDICALS})
}