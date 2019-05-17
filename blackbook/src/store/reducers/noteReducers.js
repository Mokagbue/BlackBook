import {
    FETCH_NOTES_START,
    FETCH_NOTES_SUCCESS,
    FETCH_NOTES_FAILURE,
    ADD_NOTES_START,
    ADD_NOTES_SUCCESS,
    ADD_NOTES_FAILURE,
    EDIT_NOTES_START,
    EDIT_NOTES_SUCCESS,
    EDIT_NOTES_FAILURE,
    DELETE_NOTES_START,
    DELETE_NOTES_SUCCESS,
    DELETE_NOTES_FAILURE,
    SINGLE_NOTES_START,
    SINGLE_NOTES_SUCCESS,
    SINGLE_NOTES_FAILURE
} from '../actions/index';

const initialState = {
    notes: [],
    noteIsFetching: false,
    error: null,
    singleNote: [],
  };
  
  const noteReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NOTES_START:
        return {
          ...state,
          noteIsFetching: true
        };
      case FETCH_NOTES_SUCCESS:
        return {
          ...state,
          noteIsFetching: false,
          notes: action.payload,
          error: null
        };
      case FETCH_NOTES_FAILURE:
        return {
          ...state,
          noteIsFetching: false,
          error: action.payload
        };
      case ADD_NOTES_START:
        return {
          ...state,
          noteIsFetching: true
        };
      case ADD_NOTES_SUCCESS:
        return {
          ...state,
          noteIsFetching: false,
        };
      case ADD_NOTES_FAILURE:
        return {
          ...state,
          noteIsFetching: false,
          error: action.payload
        };
      case EDIT_NOTES_START:
        return {
          ...state,
          noteIsFetching: true
        };
      case EDIT_NOTES_SUCCESS:
        return {
          ...state,
          noteIsFetching: false,
        };
      case EDIT_NOTES_FAILURE:
        return {
          ...state,
          noteIsFetching: false,
          error: action.payload
        };
      case DELETE_NOTES_START:
        return {
          ...state,
          noteIsFetching: true
        };
      case DELETE_NOTES_SUCCESS:
        return {
          ...state,
          noteIsFetching: false,
        };
      case DELETE_NOTES_FAILURE:
        return {
          ...state,
          noteIsFetching: false,
          error: action.payload
        };
      case SINGLE_NOTES_START:
        return {
          ...state,
          noteIsFetching: true
        };
      case SINGLE_NOTES_SUCCESS:
        return {
          ...state,
          noteIsFetching: false,
          singleNote: action.payload
        };
      case SINGLE_NOTES_FAILURE:
        return {
          ...state,
          noteIsFetching: false,
          singleNote: [],
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default noteReducer;