import {
    INPUT, ENDEDITING, SUBMIT, CHECKBOX, CHECKALL, REMOVE, SELECTBUTTON, CLEAR, 
} from "./actions.js";

export function submitActionGenerator(tasks, activity, todoIsStarted) {
    return {
        type: SUBMIT,
        tasks,
        activity, 
        todoIsStarted
    }
}

export function checkAllActionGenerator(tasks, activity, doneTasks, someIsChecked){
    return {
        type: CHECKALL,
        tasks,
        activity,
        doneTasks,
        someIsChecked
    }
}

export function checkboxActionGenerator(tasks, doneTasks, activity, someIsChecked) {
    return {
        type: CHECKBOX,
        tasks,
        doneTasks,
        activity,
        someIsChecked
    }
}

export function inputActionGenerator(value) {
    return {
        type: INPUT,
        value
    }
}

export function endEditingActionGenerator(tasks) {
    return{
        type: ENDEDITING,
        tasks
    }
}

export function removeActionGenerator(tasks, doneTasks, todoIsStarted, someIsChecked) {
    return {
        type: REMOVE,
        tasks,
        doneTasks,
        todoIsStarted,
        someIsChecked
    }
}

export function selectActionGenerator(selectedButton) {
    return {
        type: SELECTBUTTON,
        selectedButton
    }
}

export function clearActionGenerator(tasks, todoIsStarted, someIsChecked) {
    return {
        type: CLEAR,
        tasks,
        todoIsStarted,
        someIsChecked
    }
}