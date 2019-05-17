import axios from 'axios';

export const FETCH_NOTES_START = 'FETCH_NOTES_START';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_FAILURE = 'FETCH_NOTES_FAILURE';
export const ADD_NOTES_START = 'ADD_NOTES_START';
export const ADD_NOTES_SUCCESS = 'ADD_NOTES_SUCCESS';
export const ADD_NOTES_FAILURE = 'ADD_NOTES_FAILURE';
export const DELETE_NOTES_START = 'DELETE_NOTES_START';
export const DELETE_NOTES_SUCCESS = 'DELETE_NOTES_SUCCESS';
export const DELETE_NOTES_FAILURE = 'DELETE_NOTES_FAILURE';
export const EDIT_NOTES_START = 'EDIT_NOTES_START';
export const EDIT_NOTES_SUCCESS = 'EDIT_NOTES_SUCCESS';
export const EDIT_NOTES_FAILURE = 'EDIT_NOTES_FAILURE';
export const SINGLE_NOTES_START = 'SINGLE_NOTES_START';
export const SINGLE_NOTES_SUCCESS = 'SINGLE_NOTES_SUCCESS';
export const SINGLE_NOTES_FAILURE = 'SINGLE_NOTES_FAILURE';

export const getNote = id => dispatch => {
    dispatch({ type: FETCH_NOTES_START });
    axios
    .get(`https://localhost:3000/api/notes/${id}`)
    .then(response => {
        dispatch({ type: FETCH_NOTES_SUCCESS, payload: response.data })
    })
    .catch(err => dispatch({ type: FETCH_NOTES_FAILURE, payload: err }))
}

export const addNote = note => dispatch => {
    dispatch({ type: ADD_NOTES_START });
    axios
        .post("https://localhost:3000/api/pages/notes", note)
        .then(response => {
            dispatch({ type: ADD_NOTES_SUCCESS, payload: response.data });
        })
        .catch(err => dispatch({ type: ADD_NOTES_FAILURE, payload: err }));
};

export const editNote = (id, note) => dispatch => {
    dispatch({ type: EDIT_NOTES_START });
    axios
        .put(`https://localhost:3000/api/notes/${id}`, note)
        .then(response => {
            dispatch({ type: EDIT_NOTES_SUCCESS, payload: response.data });
        })
        .catch(err => dispatch({ type: EDIT_NOTES_FAILURE, payload: err }));
};

export const deleteNote = id => dispatch => {
    dispatch({ type: DELETE_NOTES_START });
    axios
        .delete(`https://localhost:3000/api/notes/${id}`)
        .then(response => {
            dispatch({ type: DELETE_NOTES_SUCCESS, payload: response.data })
        })
        .catch(err => dispatch({ type: DELETE_NOTES_FAILURE, payload: err }));
};

export const fetchSingleNote = id => dispatch => {
    dispatch({ type: SINGLE_NOTES_START });
    axios
        .get(`https://localhost:3000/api/notes/${id}`)
        .then(response => {
            dispatch({ type: SINGLE_NOTES_SUCCESS, payload: response.data })
        })
        .catch(err => dispatch({ type: SINGLE_NOTES_FAILURE, payload: err }));
};