import React from 'react';
import {Field, reduxForm} from 'redux-form';

class MedicalAppointmentCreate extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            date: null
        };
    }

    componentWillUnmount(){
        this.props.reset();
    }
    renderError({error, touched}){
        if(touched && error){
            return(
                <div className="mt-2 error-message">
                    <i className="d-inline fas fa-exclamation-circle"></i>
                    <p className="d-inline ml-2">{error}</p>
                </div>
            );
        }
    }
    
    renderField= ({input, label, meta, type, placeholder})=> {
        const className =`field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input}  autoComplete="off" type={type} placeholder= {placeholder}/>
                {this.renderError(meta)}
            </div>
        );
    }

    renderSelect= ({input, label, meta, type, placeholder, children})=> {
        const className =`field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <select  {...input}  >
                    {children}
               </select>
                {this.renderError(meta)}
            </div>
        );
    }

    renderErrorMessage = () =>{
        const{errorMedical} = this.props;

        if(errorMedical){
            return(
                <div class="alert alert-danger" role="alert">
                    you cannot create more than one medical appointment for the same day
                </div>
            )
        }
    }
    
    onSubmit = (formValues)=>{
        if(this.state.date == null){
            alert("The date is not valid")
        }
        else{
            this.props.onSubmit({...formValues, createdAt : this.state.date});
        }
    }

    renderTextArea = ({input, label, meta})=> {
        const className =`field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <textarea {...input} placeholder="Description" style={{ height: "100px"}} />
                {this.renderError(meta)}
            </div>
        );
    }

    render(){
        const {pristine, reset, submitting } = this.props
        
        return( 
            <>
                <form onSubmit ={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="description" component={this.renderTextArea} label="Description" />
                    <label><b>Date</b></label>
                    <input onChange ={e => this.setState({date:  e.target.value})} value = {this.state.date} type="datetime-local" id="date" name="date" />
                    <Field name="typeMedicalAppointmentId" component={this.renderSelect} label="Type of appointment">
                        <option>Select Type of appointment</option>
                        <option value= {1}>Medicina General</option>
                        <option value= {2}>Odontología</option>
                        <option value={3}>Pediatría</option>
                        <option value={4}>Neurología</option>
                    </Field>
                    {this.renderErrorMessage()}
                    <button type="submit" className ="btn btn-success mt-2" disabled={pristine || submitting}>
                        Enter
                    </button>
                    <button type="button" className ="btn btn-primary mt-2 ml-3" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </form>
            </>
        );
    }

}

const validate = (formValues) => {

    const errors ={};
    if (!formValues.description){
        errors.description = 'you must enter a description'
    }
    if(!formValues.typeMedicalAppointmentId){
        errors.typeMedicalAppointmentId = 'you must select type of appointment'
    }
    return errors;
}

export default  reduxForm({
    form: 'medicalForm',
    validate
})(MedicalAppointmentCreate);