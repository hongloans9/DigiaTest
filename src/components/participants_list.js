import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteParticipant, showEditForm } from '../actions';
import EditForm from './edit_form';
import './App.css';

class ParticipantsList extends Component {

    renderParticipants(participant, index) {
        if (this.props.selected.id === participant.id) {
            return (
                <div key={index} className="row">
                    <EditForm />
                </div>);
        } else {
            return (
                <div key={index} className="row align-items-center">
                    <div className="col-3">{participant.name}</div>
                    <div className="col-4">{participant.email}</div>
                    <div className="col-3">{participant.phone}</div>
                    <div className="col">
                        <i className="fa fa-pencil" onClick={() => this.props.showEditForm(participant)}></i>
                    </div>
                    <div className="col">
                        <i className="fa fa-trash" onClick={() => this.props.deleteParticipant(participant)}></i>
                    </div>
                </div>

            );
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row align-items-center row-header">
                    <div className="col-3">Name</div>
                    <div className="col-4">E-mail address</div>
                    <div className="col-3">Phone number</div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>

                {this.props.participants.map((participant, index) => {
                    return this.renderParticipants(participant, index);
                })}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        participants: state.participants,
        selected: state.selected
    };
}

export default connect(mapStateToProps, { deleteParticipant, showEditForm })(ParticipantsList);