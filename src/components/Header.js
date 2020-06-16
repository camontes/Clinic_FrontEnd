import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component{


    onClickLogout = ()=>{
        this.props.onClickLogout();
    }
    renderMenu = () =>{
        const {currentUser} = this.props;
        if(currentUser){

            return(
                <>
                    <div className="left menu">
                        <Link to="#" className="item">
                            <strong>TVMAZE</strong>
                        </Link>
                    </div>
                    {currentUser.rolId == 1 &&
                        <>
                            <div className="right menu">
                                <Link to = "/MedicalAppointment/list" className="item">
                                    Medical Appointments
                                </Link>
                            </div>
                            <div className="right menu">
                                <Link to = "/users/list" className="item">
                                    Manage Users
                                </Link>
                            </div>
                        </>
                    }
                    <div className="right menu">
                        <button className ="btn btn-danger" onClick = {this.onClickLogout}>Logout</button>
                    </div>
                </>
            )
        }
        else{
            return(
                <div className="left menu">
                    <Link to="/" className="item">
                        <strong>HOME</strong>
                    </Link>
                </div>
            )
        }

    }
    render(){
        return(
            <div className="ui secondary pointing menu">
                
                {this.renderMenu()}
            </div>
        );
    }
   
}

export default Header;