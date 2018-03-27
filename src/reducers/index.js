import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ParticipantsReducer from './participants_reducer';

const allReducers = combineReducers({
    participants: ParticipantsReducer,
    form: formReducer
});

export default allReducers;

