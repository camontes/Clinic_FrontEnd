import show from '../apis/show'
import history from '../history'

import {
    VALIDATE_CREDENTIALS,
    ERROR_LOGIN,
    FETCH_USERS,
    CREATE_USER,
    DELETE_USER,
    DETAIL_USER,
    LOGOUT_USER
} from './type'

export const validateCredentials = formValues =>async (dispatch) =>{

    const username = formValues.name;

    const loginCommand = {
        password: formValues.password
    }
    try{
        const response = await show.post(`/Users/ValidateCredentiales/${username}`,loginCommand)
        dispatch({type: VALIDATE_CREDENTIALS, payload:response.data})
        history.push('/MedicalAppointment/list');
    }
    catch(e){
        dispatch({type: ERROR_LOGIN})
    }

    //activate programmatic navigation
    //history.push('/');
};

export const fetchUsers = () => async dispatch => {

    const response = await show.get('/Users')
    dispatch({type: FETCH_USERS, payload:response.data})

    
}

export const createUser = (formValues) => async dispatch => {

    const response = await show.post('/Users',formValues)
    dispatch({type: CREATE_USER, payload:response.data})

    history.push('/users/list');
}

export const deleteUser = (username) => async dispatch => {

    try{
        await show.delete(`/Users/${username}`);
        dispatch({type: DELETE_USER, payload:username})
    }
    catch(e){

    }
}

export const getUserByUsername = (username) => async dispatch => {

    try{
        const response = await show.get(`/Users/${username}`);
        dispatch({type: DETAIL_USER, payload:response.data})
    }
    catch(e){

    }
}

export const logoutUser = () => dispatch => {

    dispatch({type: LOGOUT_USER})
    history.push('/');
}