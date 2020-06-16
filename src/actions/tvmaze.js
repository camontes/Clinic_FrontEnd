import tvmaze from '../apis/tvmaze'

import {
    FETCH_SHOWS
} from './type'


export const fetchShows = (formvalues) => async dispatch => {

    const response = await tvmaze.get(`/search/shows?q=${formvalues.name}`)
   dispatch({type: FETCH_SHOWS, payload:response.data})
    
}