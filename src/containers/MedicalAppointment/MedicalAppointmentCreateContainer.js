import React from 'react'
import {createMedicalAppointment, UnmountMedicals} from '../../actions/MedicalAppointment'
import MedicalAppointmentCreate from '../../components/MedicalAppointment/MedicalAppointmentCreate'
import {connect} from 'react-redux'

class MedicalAppointmentCreateContainer extends React.Component{

    componentWillUnmount(){
        this.props.UnmountMedicals();
    }
    onSubmit = (form) =>{
        this.props.createMedicalAppointment(form);
    }
    render(){
        return(
            <MedicalAppointmentCreate
                onSubmit = {this.onSubmit}
                errorMedical = {this.props.errorMedical}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return ({ 
        errorMedical: state.MedicalAppointments.error
    })
    
}


export default connect(mapStateToProps, {createMedicalAppointment, UnmountMedicals})(MedicalAppointmentCreateContainer);