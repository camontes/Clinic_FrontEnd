import React from 'react'
import UserList from '../../components/users/UserList'
import {fetchUsers} from '../../actions/user'
import {connect} from 'react-redux'

class UserListContainer extends React.Component{

    componentDidMount(){
        this.props.fetchUsers();
    }
    render(){
        return(
            <UserList
                users = {this.props.users}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return ({ 
        users: Object.values(state.users.data)
    })
    
}

export default connect(mapStateToProps, {fetchUsers})(UserListContainer);