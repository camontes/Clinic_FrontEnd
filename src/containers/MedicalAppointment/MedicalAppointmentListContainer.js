import React from 'react'
import MedicalAppointments from '../../components/MedicalAppointment/MedicalAppointments'
import {getMedicalApppointment} from '../../selectors/index'
import {fetchMedicals, UnmountMedicals, deleteMedicalAppointment} from '../../actions/MedicalAppointment'
import {connect} from 'react-redux'

class MedicalAppointmentListContainer extends React.Component{

    componentDidMount(){
        this.props.fetchMedicals();
    }

    onDeleteMedicalAppointment = (id) =>{
        this.props.deleteMedicalAppointment(id);
    }
    render(){
        return(
            <>
                <div className = "container">
                    <MedicalAppointments
                        medicals = {this.props.medicals}
                        loading = {this.props.loading}
                        onDeleteMedicalAppointment  = {this.onDeleteMedicalAppointment}
                        errorCancel = {this.props.errorCancel}
                    />
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return ({ 
        medicals: getMedicalApppointment(state, state.users),
        loading: state.MedicalAppointments.loading,
        errorCancel: state.MedicalAppointments.errorCancelMedicalAppointment

    })
    
}

export default connect(mapStateToProps, {fetchMedicals, UnmountMedicals, deleteMedicalAppointment})(MedicalAppointmentListContainer);