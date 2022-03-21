import {
    INPUT, SUBMIT, CHECKBOX, CHECKALL, REMOVE, ACTIVE, COMPLETED, ALL, CLEAR, HIDEREMOVEBUTTON, SHOWREMOVEBUTTON
} from "../actions/Action";

const InitialState = {
    task: "", 
    tasks: [],
    leftOverTasks: 0,
    doneTasks: 0,
    activity: "active",
}

const toDoReducer=(state=InitialState, action)=>{
    const tasks = state.tasks.slice();
    const form = document.getElementById("form");
    const checkAll = document.getElementById("checkAll");
    const botLine = document.getElementById("botLine");
    const buttonActive = document.getElementById("buttonActive");
    const buttonCompleted = document.getElementById("buttonCompleted");
    const buttonClear = document.getElementById("buttonClear");
    let leftCount = state.leftOverTasks;
    let doneCount = state.doneTasks;

    switch(action.type){

        case CHECKBOX:
            const checking = tasks.find(item => item.key === action.task.innerText);
            buttonClear.classList.add("botLineButton");

            if (checking.class === "active task") {
                checking.class = "completed task";
                checking.checked = "checked";
                buttonClear.classList.remove("white");
                leftCount -= 1;
                doneCount +=1;
                return {...state, leftOverTasks: leftCount, doneTasks: doneCount};
            }

            if (checking.class === "completed task") {

                if (tasks.filter(item => item.class === "completed task").length === 1) {
                    buttonClear.classList.add("white");
                    buttonClear.classList.remove("botLineButton");
                }

                checking.class = "active task";
                checking.checked = "";
                leftCount += 1;
                doneCount -=1;
                return {...state, leftOverTasks: leftCount, doneTasks: doneCount, activity: "active"};
            }

        case INPUT:
            return {...state, task: action.value};
           
        case REMOVE:
            const removing = tasks.find(item => item.key === action.task.innerText);
            const removeIndex = tasks.indexOf(removing);
            
            if (removing.class === "active task") {
                leftCount -= 1;
                doneCount +=1;
            }

            tasks.splice(removeIndex, 1);

            if (tasks.filter(item => item.class === "completed task").length === 1) {
                buttonClear.classList.add("white");
                buttonClear.classList.remove("botLineButton");
            }

            if (tasks.length === 0) {
                botLine.classList.remove("botLine");
                checkAll.classList.add("white");
                form.classList.add("shadow");
            }

            return {...state, tasks: tasks, leftOverTasks: leftCount, doneTasks: doneCount};


        case SUBMIT:
            leftCount += 1;
            const task = {text: state.task, div:"taskLine", class: "active task", key: state.task, checked: ""};
            checkAll.classList.remove("white");
            botLine.classList.add("botLine");
            form.classList.remove("shadow");

            if (buttonActive.classList.contains("selectedButton")) {
                task.hidden = false;
            }
            
            if (buttonCompleted.classList.contains("selectedButton")) {
                task.hidden = true;
                task.div = ""
            }

            tasks.push(task);

            return {...state, tasks: tasks, task:"", leftOverTasks: leftCount};

        case HIDEREMOVEBUTTON:
            return state;

        case SHOWREMOVEBUTTON:
            return state;
            
        case CHECKALL:

            if (state.activity === "active") {
                for (let task of tasks) {
                    task.checked = "checked";
                    task.class = "completed task";
                }

                leftCount = 0;
                doneCount = tasks.length;
                buttonClear.classList.remove("white");

                return {...state, activity: "completed", leftOverTasks: leftCount, doneTasks: doneCount};
            }

            if (state.activity === "completed") {
                for (let task of tasks) {
                    task.checked = "";
                    task.class = "active task";
                }
                
                leftCount = tasks.length;
                doneCount = 0;
                buttonClear.classList.add("white");

                return {...state, activity: "active", leftOverTasks: leftCount, doneTasks: doneCount};
            }
        
        case ALL:
            for (let task of tasks) {
                task.hidden = false;
                task.div = "taskLine"
            }

            return {...state, tasks: tasks }

        case ACTIVE:    
            for (let task of tasks) {
                if (task.class === "completed task") {
                    task.hidden = true;
                    task.div = ""
                }

                if (task.class === "active task") {
                    task.hidden = false;
                    task.div = "taskLine"
                }
            }

            return {...state, tasks: tasks }

        case COMPLETED:
            for (let task of tasks) {
                if (task.class === "active task") {
                    task.hidden = true;
                    task.div = ""
                }

                if (task.class === "completed task") {
                    task.hidden = false;
                    task.div = "taskLine"
                }
            }

            return {...state, tasks: tasks }

        case CLEAR:
            for (let task of tasks.filter(item => item.class === "completed task")) {
                tasks.splice(tasks.indexOf(task),1);
            }

            if (tasks.length === 0) {
                botLine.classList.remove("botLine");
                checkAll.classList.add("white");
                form.classList.add("shadow");
            }

            return {...state, tasks: tasks}
        default:
            return state;
    }
}
 
export default toDoReducer;