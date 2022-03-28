import {createStore} from 'redux';
import toDoReducer from './ToDoReducers/ToDoReducer'
import rootReducer from './reducers'

const store = createStore (rootReducer);

export default store