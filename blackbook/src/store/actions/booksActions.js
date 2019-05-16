import axios from 'axios';

export const FETCH_BOOKS_START = 'FETCH_BOOKS_START';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';
export const ADD_BOOKS_START = 'ADD_BOOKS_START';
export const ADD_BOOKS_SUCCESS = 'ADD_BOOKS_SUCCESS';
export const ADD_BOOKS_FAILURE = 'ADD_BOOKS_FAILURE';
export const DELETE_BOOKS_START = 'DELETE_BOOKS_START';
export const DELETE_BOOKS_SUCCESS = 'DELETE_BOOKS_SUCCESS';
export const DELETE_BOOKS_FAILURE = 'DELETE_BOOKS_FAILURE';
export const EDIT_BOOKS_START = 'EDIT_BOOKS_START';
export const EDIT_BOOKS_SUCCESS = 'EDIT_BOOKS_SUCCESS';
export const EDIT_BOOKS_FAILURE = 'EDIT_BOOKS_FAILURE';
export const SINGLE_BOOKS_START = 'SINGLE_BOOKS_START';
export const SINGLE_BOOKS_SUCCESS = 'SINGLE_BOOKS_SUCCESS';
export const SINGLE_BOOKS_FAILURE = 'SINGLE_BOOKS_FAILURE';

export const getBooks = id => dispatch => {
    dispatch({ type: FETCH_BOOKS_START });
    axios
    .get(`https://localhost:3000/api/books/${id}`)
    .then(response => {
        dispatch({ type: FETCH_BOOKS_SUCCESS, payload: response.data })
    })
    .catch(err => dispatch({ type: FETCH_BOOKS_FAILURE, payload: err }))
}

export const addBooks = book => dispatch => {
    dispatch({ type: ADD_BOOKS_START });
    axios
        .post("https://localhost:3000/api/books/feelings", book)
        .then(response => {
            dispatch({ type: ADD_BOOKS_SUCCESS, payload: response.data });
        })
        .catch(err => dispatch({ type: ADD_BOOKS_FAILURE, payload: err }));
};

export const editBooks = (id, book) => dispatch => {
    dispatch({ type: EDIT_BOOKS_START });
    axios
        .put(`https://localhost:3000/api/books/${id}`, book)
        .then(response => {
            dispatch({ type: EDIT_BOOKS_SUCCESS, payload: response.data });
        })
        .catch(err => dispatch({ type: EDIT_BOOKS_FAILURE, payload: err }));
};

export const deleteBooks = id => dispatch => {
    dispatch({ type: DELETE_BOOKS_START });
    axios
        .delete(`https://localhost:3000/api/books/${id}`)
        .then(response => {
            dispatch({ type: DELETE_BOOKS_SUCCESS, payload: response.data })
        })
        .catch(err => dispatch({ type: DELETE_BOOKS_FAILURE, payload: err }));
};

export const fetchSingleBooks = id => dispatch => {
    dispatch({ type: SINGLE_BOOKS_START });
    axios
        .get(`https://localhost:3000/api/books/${id}`)
        .then(response => {
            dispatch({ type: SINGLE_BOOKS_SUCCESS, payload: response.data })
        })
        .catch(err => dispatch({ type: SINGLE_BOOKS_FAILURE, payload: err }));
};