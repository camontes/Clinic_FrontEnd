import React from 'react';
import {Field, reduxForm} from 'redux-form';
import DateTime from 'react-datetime'
import { DateTimePicker } from 'react-widgets'

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
    
    onSubmit = (formValues)=>{
        if(this.state.date == null || this.state.date < new DateTime){
            alert("The date is not valid")
        }
        //this.props.onSubmit(formValues);
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
            <form onSubmit ={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="description" component={this.renderTextArea} label="Description" />
                <label>Date</label>
                <input onChange ={e => this.setState({date:  e.target.value})} value = {this.state.date} type="datetime-local" id="birthdaytime" name="birthdaytime" />
                <button type="submit" className ="btn btn-success mt-2" disabled={pristine || submitting}>
                    Enter
                </button>
                <button type="button" className ="btn btn-primary mt-2 ml-3" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </form>
        );
    }

}

const validate = (formValues) => {

    const errors ={};
    if (!formValues.description){
        errors.description = 'you must enter a description'
    }
    return errors;
}

export default  reduxForm({
    form: 'medicalForm',
    validate
})(MedicalAppointmentCreate);