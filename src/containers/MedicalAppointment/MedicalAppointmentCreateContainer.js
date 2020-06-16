import React from 'react'
import {createMedicalAppointment} from '../../actions/MedicalAppointment'
import MedicalAppointmentCreate from '../../components/MedicalAppointment/MedicalAppointmentCreate'
import {connect} from 'react-redux'

class MedicalAppointmentCreateContainer extends React.Component{

    onSubmit = (form) =>{
        this.props.createMedicalAppointment(form);
    }
    render(){
        return(
            <MedicalAppointmentCreate
                onSubmit = {this.onSubmit}
            />
        )
    }
}

export default connect(null, {createMedicalAppointment})(MedicalAppointmentCreateContainer);