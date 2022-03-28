import { combineReducers } from 'redux';
import toDoReducer from './ToDoReducers/ToDoReducer.js';

const rootReducer = combineReducers({
    todo: toDoReducer,
  })
  export default rootReducer