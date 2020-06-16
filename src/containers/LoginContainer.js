import React from 'react'
import Login from '../components/login/Login'
import {validateCredentials} from '../actions/user'
import {connect} from 'react-redux'

class LoginContainer extends React.PureComponent {

    onSubmit = (formValues) =>{
        this.props.validateCredentials(formValues);
    }
    render(){
        return(
            <Login
                onSubmit = {this.onSubmit}
                errorLogin = {this.props.error}
                messageError = {this.props.messageError}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return ({ 
        error: state.users.error,
        messageError: state.users.messageError
    })
    
}

export default connect(mapStateToProps, {validateCredentials})(LoginContainer);