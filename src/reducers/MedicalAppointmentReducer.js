import _ from 'lodash'

import {
    FETCH_MEDICALS,
    UNMOUNT_MEDICALS
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
                        loading:true
                    }
        default:
            return state;
    }
};