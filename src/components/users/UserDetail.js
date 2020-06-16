import React from 'react'


class UserDetail extends React.Component{

    render(){
        const{user} = this.props;
        if(!user){
            return(
                <div>Loading..........</div>
            )
        }
        else{
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 p-4" style={{boxShadow:"2px 3px 4px grey", backgroundColor:"lightblue"}}>
                             <h2><strong>Name:</strong> {user.name}</h2>
                             <h2><strong>Email:</strong> {user.email}</h2>
                             <h2><strong>Username:</strong> {user.username}</h2>
                             <h2><strong>Rol:</strong> {user.rolName}</h2>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default UserDetail;