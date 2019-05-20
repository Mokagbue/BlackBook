import { combineReducers } from 'redux'
import bookReducer  from './bookReducer';
import pageReducer  from './pageReducer';
import noteReducer  from './noteReducer';


export default combineReducers ({
    bookReducer,
    pageReducer,
    noteReducer
})