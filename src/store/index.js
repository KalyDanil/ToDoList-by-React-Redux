import {createStore} from 'redux';
import toDoReducer from './ToDoReducers/ToDoReducer'

const InitialState = {
    todoIsStarted: false,
    task: {text: ""}, 
    tasks: [],
    doneTasks: 0,
    activity: true,
    someIsChecked: false,
    selectedButton: "buttonAll"
}

const store = createStore (toDoReducer, InitialState);

export default store