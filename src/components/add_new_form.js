import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addParticipant } from '../actions';
import './App.css';

class AddNew extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-control ${touched && error ? 'is-invalid' : ''}`;
        let class_col = 'form-group col-md-3';
        if (field.type === 'email') {
            class_col = 'form-group col-md-4';
        } else if (field.type === 'number') {
            class_col = 'form-group col-md';
        } return (
            <div className={class_col}>
                <input className={className}
                    placeholder={field.label}
                    {...field.input} />
                <div className="invalid-feedback">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.addParticipant(values);
        this.props.reset();
    }

    render() {
        const { handleSubmit, submitting, invalid } = this.props;
        const idName = `${invalid ? 'btn-sub' : 'btn-sub-active'}`;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="form-row">
                    <Field
                        label="Fullname"
                        name="name"
                        type="text"
                        component={this.renderField} />
                    <Field
                        label="E-mail address"
                        name="email"
                        type="email"
                        component={this.renderField} />
                    <Field
                        label="Phone number"
                        name="phone"
                        type="number"
                        component={this.renderField} />
                    <div className="form-group col " align="right">
                        <button type="submit" className="btn" id={idName} disabled={submitting} >Add new</button>
                    </div>
                </div>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length < 6) {
        errors.name = 'Must be more than 5 characters'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.phone) {
        errors.phone = 'Required'
    } else if (isNaN(Number(values.phone))) {
        errors.phone = 'Must be a number'
    } else if (values.phone.length < 10) {
        errors.phone = 'Must be at least 10 numbers'
    } else if (values.phone.length >15) {
        errors.phone = "Invalid phone number"
    }
    return errors
}


export default reduxForm({
    validate,
    form: 'AddNewForm'
})(
    connect(null, { addParticipant })(AddNew)
    );