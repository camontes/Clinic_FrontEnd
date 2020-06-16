import _ from 'lodash'

import {
    VALIDATE_CREDENTIALS,
    FETCH_USERS,
    ERROR_LOGIN,
    CREATE_USER,
    DELETE_USER,
    DETAIL_USER,
    LOGOUT_USER
} from '../actions/type'

const initialState = {
    data: {},
    currentUser : null,
    error: false,
    messageError: null
}

export default  (state = initialState, action) => {

    switch(action.type){
        case FETCH_USERS:
            return {
                ...state,
                data:{...state.data,..._.mapKeys(action.payload,'username')},
                }
        case VALIDATE_CREDENTIALS:
            return {
                ...state,
                currentUser: action.payload,
                error: false,
                messageError: null
            }
        case ERROR_LOGIN:
            return {
                ...state,
                error: true,
                messageError: "invalid credentials"
            }
        case CREATE_USER:
            return {
                ...state,
                data:{...state.data, [action.payload.username]:action.payload}
            }
        case DELETE_USER:
            return {
                ...state,
                data: _.omit(state.data, action.payload)
            };
        case DETAIL_USER:
            return {
                ...state,
                data:{...state.data, [action.payload.username]:action.payload}
            };
        case LOGOUT_USER:
            return {
                ...state,
                currentUser: null,
                data: {}
            };
        default:
            return state;
    }
};