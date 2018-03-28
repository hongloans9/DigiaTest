import { SHOW_EDIT_FORM } from '../actions/';

const initialState = {
    selected: {},
}

export default function (state = initialState.selected, action) {
    switch (action.type) {
        case SHOW_EDIT_FORM:       
            return state = action.participant;
        default:
            return state;
    }
}