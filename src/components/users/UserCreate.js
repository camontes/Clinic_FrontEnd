import React from 'react'
import UserForm from '../../components/users/UserForm'

class UserCreate extends React.Component{

    onSubmit = (formValues) =>{
        this.props.onSubmit(formValues);
    }

    render(){

        return(
            <UserForm
                onSubmit = {this.onSubmit}
            />
        )
    }
}

export default UserCreate;