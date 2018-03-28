export const ADD_PARTICIPANT = 'add_participant';
export const EDIT_PARTICIPANT = 'edit_participant';
export const DELETE_PARTICIPANT = 'delete_participant';
export const SHOW_EDIT_FORM = 'show_edit_form';

export function addParticipant(values) {
    return {
        type: ADD_PARTICIPANT,
        values
    };
}

export function editParticipant(participant) {
    return {
        type: EDIT_PARTICIPANT,
        participant
    };
}
export function showEditForm(participant) {
    return {
        type: SHOW_EDIT_FORM,
        participant
    };
}

export function deleteParticipant(participant) {
    return {
        type: DELETE_PARTICIPANT,
        participant
    };
}

