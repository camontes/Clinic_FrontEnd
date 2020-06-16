import history from '../history'

export const getMedicalApppointment = (state, user) => {

    if(!user.currentUser || user.currentUser == null){
        history.push("/errors")
    }
    else{
        const medicals = Object.values(state.MedicalAppointments.data);
  
        return medicals.filter((medical) => {
        return medical.username == user.currentUser.username
        });
    }
  }