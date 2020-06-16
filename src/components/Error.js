import React from 'react'

class Error extends React.Component{

    render(){
        return(
            <div className = "container">
                <div class="alert alert-danger" role="alert">
                    Something went wrong
                </div>
            </div>
        )
    }
}

export default Error;