import {
    INPUT, ENDEDITING, SUBMIT, CHECKBOX, CHECKALL, REMOVE, SELECTBUTTON, CLEAR, 
} from "./actions.js";

const InitialState = {
    todoIsStarted: false,
    task: {text: ""}, 
    tasks: [],
    doneTasks: 0,
    activity: true,
    someIsChecked: false,
    selectedButton: "buttonAll"
}

const toDoReducer=(state=InitialState, action)=>{

    switch(action.type){

        case CHECKBOX:
            return {...state, tasks: action.tasks, doneTasks: action.doneTasks,
                activity: action.activity, someIsChecked: action.someIsChecked};

        case INPUT:
            return {...state, task: {text: action.value, key: new Date(), isCompleted: false, checked: false, isEditing: false}};   

        case ENDEDITING:
            return {...state, tasks: action.tasks}

        case REMOVE:
            return {...state, tasks: action.tasks, doneTasks: action.doneTasks,
                 todoIsStarted: action.todoIsStarted, someIsChecked: action.someIsChecked};
        
        case SUBMIT:
            return {
                ...state, tasks: action.tasks,  task: {text: ""},
                activity: action.activity, todoIsStarted: action.todoIsStarted};
            
        case CHECKALL:
            return {...state, tasks: action.tasks, activity: action.activity,
                 doneTasks: action.doneTasks, someIsChecked: action.someIsChecked};
        
        case SELECTBUTTON:
            return {...state, selectedButton: action.selectedButton}

        case CLEAR:
            return {...state, tasks: action.tasks, todoIsStarted: action.todoIsStarted, someIsChecked: action.someIsChecked}
    
        default:
            return state;
    }
}
 
export default toDoReducer;