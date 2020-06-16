import React from 'react';
import {Field, reduxForm} from 'redux-form';

class Login extends React.Component {


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
        this.props.onSubmit(formValues);
    }

    renderErrorLogin = () =>{
        const {errorLogin, messageError} = this.props;

        if(errorLogin){
            return(
                <div>{messageError}</div>
            )
        }

    }

    render(){
        const {pristine, reset, submitting } = this.props
        
        return( 
            <form onSubmit ={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="name" type="text" component={this.renderField} label="Usuario" placeholder ="Enter a Username"/>
                <Field name="password" type="password" component={this.renderField} label="Contraseña" placeholder ="Enter a password"/>
                {this.renderErrorLogin()}
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
    if (!formValues.name){
        errors.name = 'you must enter a Name'
    }
    if (!formValues.password){
        errors.password = 'You must enter a password'
    }
    return errors;
}
export default  reduxForm({
    form: 'subjectForm',
    validate
})(Login);