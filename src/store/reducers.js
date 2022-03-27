import { combineReducers } from 'redux';
import toDoReducer from './ToDoReducers/ToDoReducer.js';

const rootReducer = combineReducers({
    state: toDoReducer
  })
  
  export default rootReducer