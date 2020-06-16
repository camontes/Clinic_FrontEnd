import React from 'react'
import MedicalAppointmentsAdmin from '../../components/MedicalAppointment/MedicalAppointmentsAdmin'
import {fetchMedicals, UnmountMedicals} from '../../actions/MedicalAppointment'
import {connect} from 'react-redux'

class MedicalAppointmentListAdminContainer extends React.Component{

    componentDidMount(){
        this.props.fetchMedicals();
    }
    render(){
        return(
            <MedicalAppointmentsAdmin
                medicals = {this.props.medicals}
                loading = {this.props.loading}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return ({ 
        medicals:Object.values(state.MedicalAppointments.data),
        loading: state.MedicalAppointments.loading
    })
    
}

export default connect(mapStateToProps, {fetchMedicals, UnmountMedicals})(MedicalAppointmentListAdminContainer);