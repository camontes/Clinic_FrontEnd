
import {
    FETCH_SHOWS
} from '../actions/type'

export default  (state = [], action) => {

    switch(action.type){
        case FETCH_SHOWS:
            return action.payload
        default:
            return state;
    }
};