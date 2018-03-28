import { ADD_PARTICIPANT, DELETE_PARTICIPANT, EDIT_PARTICIPANT } from '../actions/';

const initialState = {
    participants: [
        {
            id: 1,
            name: 'Kelley Fernandez',
            email: 'k.fernandez@gmail.com',
            phone: '0256142565'
        },
        {
            id: 2,
            name: 'Clay	Simon',
            email: 'clay.simon@gmail.com',
            phone: '0456442533'
        },
        {
            id: 3,
            name: 'Regina Rose',
            email: 'regina.rose@gmail.com',
            phone: '0556142125'
        }
    ],
}

export default function (state = initialState.participants, action) {
    switch (action.type) {
        case ADD_PARTICIPANT:
            const newParticipant = Object.assign({ id: state.length + 1 }, action.values);
            return [newParticipant].concat(state);
        case EDIT_PARTICIPANT:
            return state.map((participant) =>{
                if (participant.id !== action.participant.id) {
                    return participant;
                }
                return {
                    ...participant,
                    ...action.participant
                }
            });
               
        case DELETE_PARTICIPANT:
            return state.filter(participant => participant !== action.participant);
        default:
            return state;
    }

}