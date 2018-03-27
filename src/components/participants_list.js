import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteParticipant } from '../actions';
import './App.css';

class ParticipantsList extends Component {

    renderParticipants() {
        return this.props.participants.map(
            participant => {
                return (
                    <tr key={participant.id} >
                        <td>{participant.name}</td>
                        <td>{participant.email}</td>
                        <td>{participant.phone}</td>
                        <td>
                            <i className="fa fa-pencil"></i>
                        </td>
                        <td>
                            <i className="fa fa-trash" onClick={() => this.props.deleteParticipant(participant)}></i>
                        </td>
                    </tr>
                );
            })
    }
    

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">E-mail address</th>
                        <th scope="col">Phone number</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderParticipants()}
                </tbody>
            </table>

        );
    }
}

function mapStateToProps(state) {
    return {
        participants: state.participants
    };
}

export default connect(mapStateToProps, { deleteParticipant })(ParticipantsList);