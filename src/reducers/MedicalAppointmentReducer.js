import _ from 'lodash'

import {
    FETCH_MEDICALS,
    UNMOUNT_MEDICALS,
    CREATE_MEDICAL_APPOINTMENT,
    ERROR_EXIST,
    CANCEL_MEDICAL_APPOINTMENT,
    ERROR_CANCEL_MEDICAL_APPOINTMENT
} from '../actions/type'

const initialState = {
    data: {},
    error: false,
    errorCancelMedicalAppointment: false,
    messageError: null,
    loading: true
}

export default  (state = initialState, action) => {

    switch(action.type){
        case FETCH_MEDICALS:
            return {
                ...state,
                data:{...state.data,..._.mapKeys(action.payload,'id')},
                loading: false
                }
            case UNMOUNT_MEDICALS:
                return {
                    ...state,
                    loading:true,
                    error: false,
                    errorCancelMedicalAppointment: false
                }
            case ERROR_EXIST:
                return {
                    ...state,
                    error:true
                }
            case CREATE_MEDICAL_APPOINTMENT:
                return {
                    ...state,
                    data:{...state.data, [action.payload.id]:action.payload}
                }
            case CANCEL_MEDICAL_APPOINTMENT:
                return {
                    ...state,
                    data: _.omit(state.data, action.payload),
                    errorCancelMedicalAppointment: false
                };
            case ERROR_CANCEL_MEDICAL_APPOINTMENT:
                return {
                    ...state,
                    errorCancelMedicalAppointment: true
                };
        default:
            return state;
    }
};