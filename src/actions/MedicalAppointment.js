import show from '../apis/show'

import {
    FETCH_MEDICALS,
    UNMOUNT_MEDICALS
} from './type'

export const fetchMedicals = () => async dispatch => {

    const response = await show.get('/MedicalAppointments')
    dispatch({type: FETCH_MEDICALS, payload:response.data})
}

export const UnmountMedicals = () => async dispatch => {

    dispatch({type: UNMOUNT_MEDICALS})
}