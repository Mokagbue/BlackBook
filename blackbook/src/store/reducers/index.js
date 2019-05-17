import { combineReducers } from 'redux'
import bookReducer  from './bookReducer';
import pageReducer  from './pageReducer';


export default combineReducers ({
    bookReducer,
    pageReducer,
})