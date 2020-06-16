import React from 'react'
import Moment from 'react-moment';
import 'moment-timezone';

class MedicalAppointmentsAdmin extends React.Component{

    renderData = () => {
        const {medicals, loading} = this.props;

        if(!medicals){
            return null;
        }
        if (medicals.length === 0 && loading) {
            return (
              <>
                <div className="row d-flex align-items-center justify-content-center" style={{ height: "300px" }}>
                    <h1>Loading....</h1>
                </div>
              </>
            )
        }

        if (medicals.length === 0 && !loading) {
            return (
              <>
                <div className="row d-flex align-items-center justify-content-center mb-4" style={{ height: "300px" }}>
                    <h1>There are no records</h1>
                </div>
              </>
            )
          }
        return(
            <div className="row mt-3">
                {medicals.map(medical =>
                    <>
                        <div className="col-6 mb-3">
                            <div className = "card">
                                <img src="/medical.jpg" class="card-img-top img-fluid" alt="Medical" />
                                <div className="card-block">
                                    <h3 className="card-title">Description</h3>
                                    <p class="card-text">{medical.description}</p>
                                    <h3>Date: <span className = "card-subtitle text-muted" style = {{fontSize: '15px'}}><Moment format="YYYY/MM/DD">{medical.createdAt}</Moment></span></h3>
                                    <h3>Type of medical appointment: <span className = "card-subtitle text-muted" style = {{fontSize: '15px'}}>{medical.typeMedicalAppointmentName}</span></h3>
                                    <h3>Pacient: <span className = "card-subtitle text-muted" style = {{fontSize: '15px'}}>{medical.username}</span></h3>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        )
    }
    render(){
        return(
            <div>{this.renderData()}</div>
        )
    }
}

export default MedicalAppointmentsAdmin;