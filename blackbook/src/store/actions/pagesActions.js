import axios from 'axios';

export const FETCH_PAGES_START = 'FETCH_PAGES_START';
export const FETCH_PAGES_SUCCESS = 'FETCH_PAGES_SUCCESS';
export const FETCH_PAGES_FAILURE = 'FETCH_PAGES_FAILURE';
export const ADD_PAGES_START = 'ADD_PAGES_START';
export const ADD_PAGES_SUCCESS = 'ADD_PAGES_SUCCESS';
export const ADD_PAGES_FAILURE = 'ADD_PAGES_FAILURE';
export const DELETE_PAGES_START = 'DELETE_PAGES_START';
export const DELETE_PAGES_SUCCESS = 'DELETE_PAGES_SUCCESS';
export const DELETE_PAGES_FAILURE = 'DELETE_PAGES_FAILURE';
export const EDIT_PAGES_START = 'EDIT_PAGES_START';
export const EDIT_PAGES_SUCCESS = 'EDIT_PAGES_SUCCESS';
export const EDIT_PAGES_FAILURE = 'EDIT_PAGES_FAILURE';
export const SINGLE_PAGES_START = 'SINGLE_PAGES_START';
export const SINGLE_PAGES_SUCCESS = 'SINGLE_PAGES_SUCCESS';
export const SINGLE_PAGES_FAILURE = 'SINGLE_PAGES_FAILURE';

export const getPage = id => dispatch => {
    dispatch({ type: FETCH_PAGES_START });
    axios
    .get(`https://localhost:3000/api/pages/${id}`)
    .then(response => {
        dispatch({ type: FETCH_PAGES_SUCCESS, payload: response.data })
    })
    .catch(err => dispatch({ type: FETCH_PAGES_FAILURE, payload: err }))
}

export const addPage = page => dispatch => {
    dispatch({ type: ADD_PAGES_START });
    axios
        .post("https://localhost:3000/api/pages/feelings", page)
        .then(response => {
            dispatch({ type: ADD_PAGES_SUCCESS, payload: response.data });
        })
        .catch(err => dispatch({ type: ADD_PAGES_FAILURE, payload: err }));
};

export const editPage = (id, page) => dispatch => {
    dispatch({ type: EDIT_PAGES_START });
    axios
        .put(`https://localhost:3000/api/pages/${id}`, page)
        .then(response => {
            dispatch({ type: EDIT_PAGES_SUCCESS, payload: response.data });
        })
        .catch(err => dispatch({ type: EDIT_PAGES_FAILURE, payload: err }));
};

export const deletePage = id => dispatch => {
    dispatch({ type: DELETE_BOOKS_START });
    axios
        .delete(`https://localhost:3000/api/pages/${id}`)
        .then(response => {
            dispatch({ type: DELETE_BOOKS_SUCCESS, payload: response.data })
        })
        .catch(err => dispatch({ type: DELETE_BOOKS_FAILURE, payload: err }));
};

export const fetchSinglePage = id => dispatch => {
    dispatch({ type: SINGLE_PAGES_START });
    axios
        .get(`https://localhost:3000/api/pages/${id}`)
        .then(response => {
            dispatch({ type: SINGLE_PAGES_SUCCESS, payload: response.data })
        })
        .catch(err => dispatch({ type: SINGLE_PAGES_FAILURE, payload: err }));
};