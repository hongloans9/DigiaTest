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
        return (
            <div className="form-group form-edit col-3">
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
                        component={this.renderField} />
                    <div className=" form-group col-3 " align="right">
                        <button type="button" className="btn btn-cancel2" onClick={() => this.props.showEditForm({})}>Cancel</button>
                        <button type="submit" className="btn btn-primary btn-1" disabled={submitting}>Save</button>
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