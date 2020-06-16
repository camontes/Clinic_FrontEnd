import React from 'react'
import TvmazeShows from '../../components/tvmaze/TvmazeShows'
import {fetchShows} from '../../actions/tvmaze'
import {connect} from 'react-redux'

class TvmazeShowsContainer extends React.Component{

    onClick = (formvalues) =>{
        this.props.fetchShows(formvalues);
    }
    render(){
        return(
            <TvmazeShows
                onClick = {this.onClick}
                shows = {this.props.shows}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return ({ 
        shows: state.shows,
    })
    
}

export default connect(mapStateToProps, {fetchShows})(TvmazeShowsContainer);