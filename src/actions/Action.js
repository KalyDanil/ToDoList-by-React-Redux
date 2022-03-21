export const INPUT = "INPUT";
export const SUBMIT = "SUBMIT";
export const EDIT = "EDIT";
export const CHECKBOX = "CHECKBOX";
export const CHECKALL = "CHECKALL";
export const REMOVE = "REMOVE";
export const ACTIVE = "ACTIVE";
export const COMPLETED = "COMPLETED";
export const ALL = "ALL";
export const CLEAR = "CLEAR";
export const HIDEREMOVEBUTTON = "HIDEREMOVEBUTTON";
export const SHOWREMOVEBUTTON = "SHOWREMOVEBUTTON"

export function submitActionGenerator() {
    const input = document.getElementById("input");
    input.value = "";
    return {
        type: SUBMIT,
    }
}

export function hideActionGenerator() {
    const buttons = document.getElementsByClassName("removeButton");
    for (let button of buttons) {
        button.hidden= true;
    }
    return {
        type: HIDEREMOVEBUTTON,
    }
}

export function showActionGenerator(e) {
    const button = e.target.nextElementSibling;
    button.hidden = false;
    return {
        type: SHOWREMOVEBUTTON,
    }
}

export function checkAllActionGenerator(){
    return {
        type: CHECKALL,
    }
}

export function checkboxActionGenerator(e) {
    const task = e.target.nextElementSibling;
    return {
        type: CHECKBOX,
        task: task
    }
}

export function inputActionGenerator(e) {
    return {
        type: INPUT,
        value: e.target.value
    }
}

export function removeActionGenerator(e) {
    const task = e.target.previousElementSibling;
    return {
        type: REMOVE,
        task: task
    }
}

export function allActionGenerator() {
    const buttonAll = document.getElementById("buttonAll");
    const buttonActive = document.getElementById("buttonActive");
    const buttonCompleted = document.getElementById("buttonCompleted");

    buttonAll.classList.add("selectedButton");
    buttonActive.classList.remove("selectedButton");
    buttonCompleted.classList.remove("selectedButton");

    return {
        type: ALL
    }
}

export function activeActionGenerator() {
    const buttonAll = document.getElementById("buttonAll");
    const buttonActive = document.getElementById("buttonActive");
    const buttonCompleted = document.getElementById("buttonCompleted");

    buttonAll.classList.remove("selectedButton");
    buttonActive.classList.add("selectedButton");
    buttonCompleted.classList.remove("selectedButton");

    return {
        type: ACTIVE
    }
}

export function completedActionGenerator() {
    const buttonAll = document.getElementById("buttonAll");
    const buttonActive = document.getElementById("buttonActive");
    const buttonCompleted = document.getElementById("buttonCompleted");

    buttonAll.classList.remove("selectedButton");
    buttonActive.classList.remove("selectedButton");
    buttonCompleted.classList.add("selectedButton");

    return {
        type: COMPLETED
    }
}

export function clearActionGenerator() {
    return {
        type: CLEAR
    }
}