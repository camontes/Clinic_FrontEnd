import React from 'react'
import LoginContainer from '../containers/LoginContainer'

class LoginPage extends React.PureComponent{

    render(){
        return(
           <h1>
               <LoginContainer />
           </h1>
        )
    }
}

export default LoginPage;