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
            <>
                <div className ="container">
                    <div className = "row justify-content-around">
                            <div className ="col-6">
                                <MedicalAppointmentCreate
                                    onSubmit = {this.onSubmit}
                                    errorMedical = {this.props.errorMedical}
                                />
                            </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return ({ 
        errorMedical: state.MedicalAppointments.error
    })
    
}


export default connect(mapStateToProps, {createMedicalAppointment, UnmountMedicals})(MedicalAppointmentCreateContainer);