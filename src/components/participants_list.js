import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteParticipant, showEditForm, sortAsc, sortDesc } from '../actions';
import EditForm from './edit_form';
import './App.css';

class ParticipantsList extends Component {

    renderParticipants(participant, index) {
        if (this.props.selected.id === participant.id) {
            return (
                <div key={index} className="row">
                    <EditForm />
                </div>
            );
        } else {
            return (
                <div key={index} className="row align-items-center">
                    <div className="col-3 col-name">{participant.name}</div>
                    <div className="col-4 ">{participant.email}</div>
                    <div className="col-3">{participant.phone}</div>
                    <div className="col" align="right">
                        <i className="fa fa-pencil" onClick={() => this.props.showEditForm(participant)}></i>                  
                        <i className="fa fa-trash" onClick={() => this.props.deleteParticipant(participant)}></i>
                    </div>
                </div>
            );
        }
    }

    sortHandler = (value) => {
        const { isSortAscending } = this.props.participants;
        if (isSortAscending) {
            this.props.sortAsc(value);
        } else {
            this.props.sortDesc(value);
        }
    };

    render() {
        const { participants } = this.props.participants;
        return (
            <div className="container">
                <div className="row align-items-center row-header">
                    <div onClick={() => this.sortHandler("name")} className="col-3 col-name" id="sorting">Name</div>
                    <div onClick={() => this.sortHandler("email")} className="col-4" id="sorting">E-mail address</div>
                    <div onClick={() => this.sortHandler("phone")} className="col-3" id="sorting">Phone number</div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>

                {participants.map((participant, index) => {
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

export default connect(mapStateToProps, { deleteParticipant, showEditForm, sortAsc, sortDesc })(ParticipantsList);