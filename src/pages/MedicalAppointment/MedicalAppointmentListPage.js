import React from 'react'
import MedicalAppointmentListContainer from '../../containers/MedicalAppointment/MedicalAppointmentListContainer'
import MedicalAppointmentListAdminContainer from '../../containers/MedicalAppointment/MedicalAppointmentListAdminContainer'
import {connect} from 'react-redux'

class MedicalAppointmentListPage extends React.Component{

    render(){
        if(!this.props.user.currentUser){
            return null;
        }
        if(this.props.user.currentUser.rolId == 1){
            return(
                <MedicalAppointmentListAdminContainer />
            )
        }
        
        if(this.props.user.currentUser.rolId == 2){
            return(
                <MedicalAppointmentListContainer />
            )
        }
    }
}

const mapStateToProps = (state) => {
    return ({ 
        user:state.users
    })
    
}

export default connect(mapStateToProps,null)(MedicalAppointmentListPage);