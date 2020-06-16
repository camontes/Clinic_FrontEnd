import React from 'react'
import {Link} from 'react-router-dom'
import {deleteUser} from '../../actions/user'
import {connect} from  'react-redux'

class UserList extends React.Component {

    render(){
        const{users} = this.props;
        return(
            <div className = "container">
                 {users.map( user => 
                   <>
                    <div className ="row d-flex align-content-center mt-2">
                       <div className ="col-lg-6">
                         <h3><strong>Username: </strong>{user.username}</h3>
                        </div>
                        <div className ="col-lg-6 justify-content-end d-flex">
                            <Link to = {`/users/detail/${user.username}`} className="btn btn-secondary">See Detail</Link>
                            <button className="btn btn-primary ml-2">Edit</button>
                            <button className="btn btn-danger ml-2" onClick={()=>this.props.deleteUser(user.username)}>Eliminar</button>
                        </div>
                   </div>
                   <hr></hr>
                   </>
                )}
                <center><Link to = "/users/create" className="btn btn-success mt-2">Create</Link></center>
            </div>
        )
    }
}

export default connect(null, {deleteUser})(UserList);