import React from 'react'
import Header from '../components/Header'
import {connect} from 'react-redux'
import {logoutUser} from '../actions/user'

class HeaderContainer extends React.Component{

    onClickLogout = () =>{
        this.props.logoutUser();
    }

    render(){
        return(
            <Header
                currentUser = {this.props.currentUser}
                onClickLogout = {this.onClickLogout}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return ({ 
        currentUser: state.users.currentUser,
    })
    
}

export default connect(mapStateToProps,{logoutUser})(HeaderContainer);