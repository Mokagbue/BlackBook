import {
    FETCH_PAGES_START,
    FETCH_PAGES_SUCCESS,
    FETCH_PAGES_FAILURE,
    ADD_PAGES_START,
    ADD_PAGES_SUCCESS,
    ADD_PAGES_FAILURE,
    EDIT_PAGES_START,
    EDIT_PAGES_SUCCESS,
    EDIT_PAGES_FAILURE,
    DELETE_PAGES_START,
    DELETE_PAGES_SUCCESS,
    DELETE_PAGES_FAILURE,
    SINGLE_PAGES_START,
    SINGLE_PAGES_SUCCESS,
    SINGLE_PAGES_FAILURE
} from '../actions/index';

const initialState = {
    pages: [],
    pageIsFetching: false,
    error: null,
    singlePage: [],
  };
  
  const pageReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PAGES_START:
        return {
          ...state,
          pageIsFetching: true
        };
      case FETCH_PAGES_SUCCESS:
        return {
          ...state,
          pageIsFetching: false,
          pages: action.payload,
          error: null
        };
      case FETCH_PAGES_FAILURE:
        return {
          ...state,
          pageIsFetching: false,
          error: action.payload
        };
      case ADD_PAGES_START:
        return {
          ...state,
          pageIsFetching: true
        };
      case ADD_PAGES_SUCCESS:
        return {
          ...state,
          pageIsFetching: false,
        };
      case ADD_PAGES_FAILURE:
        return {
          ...state,
          pageIsFetching: false,
          error: action.payload
        };
      case EDIT_PAGES_START:
        return {
          ...state,
          pageIsFetching: true
        };
      case EDIT_PAGES_SUCCESS:
        return {
          ...state,
          pageIsFetching: false,
        };
      case EDIT_PAGES_FAILURE:
        return {
          ...state,
          pageIsFetching: false,
          error: action.payload
        };
      case DELETE_PAGES_START:
        return {
          ...state,
          pageIsFetching: true
        };
      case DELETE_PAGES_SUCCESS:
        return {
          ...state,
          pageIsFetching: false,
        };
      case DELETE_PAGES_FAILURE:
        return {
          ...state,
          pageIsFetching: false,
          error: action.payload
        };
      case SINGLE_PAGES_START:
        return {
          ...state,
          pageIsFetching: true
        };
      case SINGLE_PAGES_SUCCESS:
        return {
          ...state,
          pageIsFetching: false,
          singlePage: action.payload
        };
      case SINGLE_PAGES_FAILURE:
        return {
          ...state,
          pageIsFetching: false,
          singlePage: [],
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default pageReducer;