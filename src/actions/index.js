export const ADD_PARTICIPANT = 'add_participant';
export const EDIT_PARTICIPANT = 'edit_participant';
export const DELETE_PARTICIPANT = 'delete_participant';
export const SHOW_EDIT_FORM = 'show_edit_form';
export const SORT_ASC = 'sort_asc';
export const SORT_DESC = 'sort_desc';

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

export function sortAsc(value) {
    return {
        type: SORT_ASC,
        value
    };
}

export function sortDesc(value) {
    return {
        type: SORT_DESC,
        value
    };
}
