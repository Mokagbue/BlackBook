import {
    FETCH_BOOKS_START,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
    ADD_BOOKS_START,
    ADD_BOOKS_SUCCESS,
    ADD_BOOKS_FAILURE,
    EDIT_BOOKS_START,
    EDIT_BOOKS_SUCCESS,
    EDIT_BOOKS_FAILURE,
    DELETE_BOOKS_START,
    DELETE_BOOKS_SUCCESS,
    DELETE_BOOKS_FAILURE,
    SINGLE_BOOKS_START,
    SINGLE_BOOKS_SUCCESS,
    SINGLE_BOOKS_FAILURE
} from '../actions/index';

const initialState = {
    books: [],
    bookIsFetching: false,
    error: null,
    singleBook: [],
  };
  
  const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BOOKS_START:
        return {
          ...state,
          bookIsFetching: true
        };
      case FETCH_BOOKS_SUCCESS:
        return {
          ...state,
          bookIsFetching: false,
          books: action.payload,
          error: null
        };
      case FETCH_BOOKS_FAILURE:
        return {
          ...state,
          bookIsFetching: false,
          error: action.payload
        };
      case ADD_BOOKS_START:
        return {
          ...state,
          bookIsFetching: true
        };
      case ADD_BOOKS_SUCCESS:
        return {
          ...state,
          bookIsFetching: false,
        };
      case ADD_BOOKS_FAILURE:
        return {
          ...state,
          bookIsFetching: false,
          error: action.payload
        };
      case EDIT_BOOKS_START:
        return {
          ...state,
          bookIsFetching: true
        };
      case EDIT_BOOKS_SUCCESS:
        return {
          ...state,
          bookIsFetching: false,
        };
      case EDIT_BOOKS_FAILURE:
        return {
          ...state,
          bookIsFetching: false,
          error: action.payload
        };
      case DELETE_BOOKS_START:
        return {
          ...state,
          bookIsFetching: true
        };
      case DELETE_BOOKS_SUCCESS:
        return {
          ...state,
          bookIsFetching: false,
        };
      case DELETE_BOOKS_FAILURE:
        return {
          ...state,
          bookIsFetching: false,
          error: action.payload
        };
      case SINGLE_BOOKS_START:
        return {
          ...state,
          bookIsFetching: true
        };
      case SINGLE_BOOKS_SUCCESS:
        return {
          ...state,
          bookIsFetching: false,
          singleBook: action.payload
        };
      case SINGLE_BOOKS_FAILURE:
        return {
          ...state,
          bookIsFetching: false,
          singleBook: [],
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default bookReducer;