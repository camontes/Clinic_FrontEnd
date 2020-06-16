import React from 'react'
import {createUser} from '../../actions/user'
import UserCreate from '../../components/users/UserCreate'
import {connect} from 'react-redux'

class UserCreateContainer extends React.Component{

    onSubmit = (formValues) =>{
        this.props.createUser(formValues);
    }
    render(){
        return(
            <UserCreate
                onSubmit = {this.onSubmit}
            />
        )
    }
}

export default connect(null, {createUser})(UserCreateContainer);