import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ParticipantsReducer from './participants_reducer';
import EditFormReducer from './edit_form_reducer';


const allReducers = combineReducers({
    participants: ParticipantsReducer,
    selected: EditFormReducer,
    form: formReducer
});

export default allReducers;

