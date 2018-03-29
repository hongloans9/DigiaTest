import { ADD_PARTICIPANT, DELETE_PARTICIPANT, EDIT_PARTICIPANT, SORT_ASC, SORT_DESC } from '../actions/';

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
    isSortAscending: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_PARTICIPANT:
            const newParticipant = Object.assign({ id: state.participants.length + 1 }, action.values);
            return{...state, participants: [newParticipant].concat(state.participants) };
        case EDIT_PARTICIPANT:
            return{...state, participants: state.participants.map((participant) => {
                if (participant.id !== action.participant.id) {
                    return participant;
                }
                return {
                    ...participant,
                    ...action.participant
                }
            })
            };
        case DELETE_PARTICIPANT:
            return {...state, participants: state.participants.filter(participant => participant !== action.participant)};
        case SORT_ASC:
            return {...state, participants: state.participants.sort(dynamicSortAsc(action.value)), isSortAscending: false};
        case SORT_DESC:
            return {...state, participants: state.participants.sort(dynamicSortDesc(action.value)), isSortAscending: true};
        default:
            return state;
    }
}

function dynamicSortAsc(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

function dynamicSortDesc(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        var result = (a[property] < b[property]) ? 1 : (a[property] > b[property]) ? -1 : 0;
        return result * sortOrder;
    }
}