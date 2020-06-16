import _ from 'lodash'

import {
    FETCH_MEDICALS,
    UNMOUNT_MEDICALS,
    CREATE_MEDICAL_APPOINTMENT,
    ERROR_EXIST
} from '../actions/type'

const initialState = {
    data: {},
    error: false,
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
                    error: false
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
        default:
            return state;
    }
};