import React from 'react'
import UserDetailContainer from '../../containers/users/UserDetailContainer'

class UserDetailPage extends React.Component {

    render(){

        console.log(this.props.match.params.username)
        return(
            <UserDetailContainer
                username = {this.props.match.params.username}
            />
        )
    }
}

export default UserDetailPage;