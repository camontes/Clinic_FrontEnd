import React from 'react'
import UserDetail from '../../components/users/UserDetail'
import {getUserByUsername} from '../../actions/user'
import {connect} from 'react-redux'

class UserDetailContainer extends React.Component{


    componentDidMount(){
        this.props.getUserByUsername(this.props.username)
    }

    render(){
        return(
            <UserDetail
                user = {this.props.user}
            />
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return ({ 
        user: state.users.data[ownProps.username]
    })
    
}

export default connect(mapStateToProps, {getUserByUsername})(UserDetailContainer);