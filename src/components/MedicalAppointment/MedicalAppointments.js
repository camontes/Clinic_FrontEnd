import React from 'react'
import Moment from 'react-moment';
import 'moment-timezone';

class MedicalAppointments extends React.Component{

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
            <div className="row">
                {medicals.map(medical =>
                    <>
                        <h1>{medical.description}</h1>
                        <p>{medical.username}</p>
                        <p><Moment format="YYYY/MM/DD">{medical.createdAt}</Moment></p>
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

export default MedicalAppointments;