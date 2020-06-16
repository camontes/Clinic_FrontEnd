import React from 'react'
import MedicalAppointments from '../../components/MedicalAppointment/MedicalAppointments'
import {getMedicalApppointment} from '../../selectors/index'
import {fetchMedicals, UnmountMedicals} from '../../actions/MedicalAppointment'
import {connect} from 'react-redux'

class MedicalAppointmentListContainer extends React.Component{

    componentDidMount(){
        this.props.fetchMedicals();
    }
    render(){
        return(
            <MedicalAppointments
                medicals = {this.props.medicals}
                loading = {this.props.loading}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return ({ 
        medicals: getMedicalApppointment(state, state.users),
        loading: state.MedicalAppointments.loading
    })
    
}

export default connect(mapStateToProps, {fetchMedicals, UnmountMedicals})(MedicalAppointmentListContainer);