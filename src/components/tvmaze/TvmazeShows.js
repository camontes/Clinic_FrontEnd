import React from 'react';
import {Field, reduxForm} from 'redux-form';

class TvmazeShows extends React.Component {


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
        this.props.onClick(formValues);
    }

    renderErrorLogin = () =>{
        const {errorLogin, messageError} = this.props;

        if(errorLogin){
            return(
                <div>{messageError}</div>
            )
        }

    }

    renderShows  = () =>{
        const {shows} = this.props;
        const showsFilter = [];

        for(var i = 0; i<  shows.length; i ++){

            const image = shows[0].show.image.medium;
            const language = shows[0].show.language;
            const rating = shows[0].show.rating.average;
            const summary = shows[0].show.summary;
            const genre = shows[0].show.genres[0];

            const showFormat = {
                image:image,
                language: language,
                rating: rating,
                summary: summary,
                genre: genre
            }
            showsFilter.push(showFormat)
        }
        return(
            showsFilter.map(show =>
                <>
                 <div className ="row d-flex align-content-center mt-3">
                    <div className ="col-lg-6 p-5" style={{backgroundColor:"lightblue", boxShadow:"3px 3px 4px grey"}}>
                        <h3><strong>Image: </strong><img src={show.image} width="200" height="200"/></h3>
                        <h3><strong>Language: </strong>{show.language}</h3>
                        <h3><strong>Rating: </strong>{show.rating}</h3>
                        <h3><strong>Summary: </strong>{show.summary}</h3>
                        <h3><strong>Genre: </strong>{show.genre}</h3>
                     </div>
                </div>
                <hr></hr>
                </>
            )
        )
    }

    render(){
        const {pristine, reset, submitting } = this.props
        return( 
            <>
                <form className="mb-3" onSubmit ={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="name" type="text" component={this.renderField} label="Search a show" placeholder ="Enter a keyword"/>
                    <button type="submit" className ="btn btn-success mt-2" disabled={pristine || submitting}>
                        Search
                    </button>
                    <button type="button" className ="btn btn-primary mt-2 ml-3" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </form>

                {this.renderShows()}
            </>
        );
    }
}

const validate = (formValues) => {

    const errors ={};
    if (!formValues.name){
        errors.name = 'you must enter a keyword'
    }
    return errors;
}
export default  reduxForm({
    form: 'formShows',
    validate
})(TvmazeShows);