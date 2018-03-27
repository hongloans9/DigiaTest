import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const ADD_PARTICIPANT = 'add_participant';
export const EDIT_PARTICIPANT = 'edit_participant';
export const DELETE_PARTICIPANT = 'delete_participant';


export function addParticipant(values) {
    return {
        type: ADD_PARTICIPANT,
        values
    };
}

export function deleteParticipant(participant) {
    return {
        type: DELETE_PARTICIPANT,
        participant
    };
}

// export function fetchPostbyID(id) {
//     const request = axios.get(`${BASE_URL}/posts/${id}${API_KEY}`);
//     return {
//         type: FETCH_POST,
//         payload: request
//     };
// }

// export function deletePost(id, callback) {
//     const request = axios.delete(`${BASE_URL}/posts/${id}${API_KEY}`)
//      .then(() => callback());
//     return {
//         type: DELETE_POST,
//         payload: request
//     };
// }