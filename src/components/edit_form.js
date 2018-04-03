import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { editParticipant, showEditForm } from '../actions';
import './App.css';

class EditForm extends Component {

    componentDidMount() {
        this.handleInitialize();
    }

    handleInitialize() {
        const initData = {
            "name": this.props.initialValues.name,
            "email": this.props.initialValues.email,
            "phone": this.props.initialValues.phone
        };
        this.props.initialize(initData);
    }

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-control ${touched && error ? 'is-invalid' : ''}`;
        let class_col = 'form-group col-md-3';
        if (field.type === 'email') {
            class_col = 'form-group col-md-4';
        } else if (field.type === 'number') {
            class_col = 'form-group col-md';
        }
        return (
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
        const newValues = Object.assign({ id: this.props.initialValues.id }, values);
        this.props.editParticipant(newValues);
        this.props.showEditForm({})
    }

    render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <form className="edit-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="form-row form-edit">
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
                        <button type="button" className="btn btn-cancel" onClick={() => this.props.showEditForm({})}>Cancel</button>
                        <button type="submit" className="btn btn-primary" disabled={submitting}>Save</button>
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
    } else if (values.name.length > 35) {
        errors.name = 'Must be less than 35 characters'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    } else if (values.email.length > 35) {
        errors.email = 'Must be less than 35 characters'
    }
    if (!values.phone) {
        errors.phone = 'Required'
    } else if (isNaN(Number(values.phone))) {
        errors.phone = 'Must be a number'
    } else if (values.phone.length < 10) {
        errors.phone = 'Must be at least 10 numbers'
    }else if (values.phone.length >15) {
        errors.phone = "Invalid phone number"
    }
    return errors
}
function mapStateToProps(state) {
    return { initialValues: state.selected }
}

export default reduxForm({
    validate,
    form: 'EditForm'
})(
    connect(mapStateToProps, { editParticipant, showEditForm })(EditForm)
    );