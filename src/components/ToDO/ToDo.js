import React from 'react';
import {FormStyledContainer} from './Form.styles.js'
import BotLine from '../BotLine/BotLine';
import Tasks from '../Tasks/Tasks';
import TopLine from '../TopLine/TopLine';
import {connect} from 'react-redux';
import {inputActionGenerator, submitActionGenerator, selectActionGenerator, checkboxActionGenerator, checkAllActionGenerator,
    removeActionGenerator, clearActionGenerator} from "../../store/ToDoReducers/actionCreater";


class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {renderTasks: this.props.tasks}
    }

    submit = (e) => {
        e.preventDefault();
        const tasks = this.props.tasks.slice();
        const task = this.props.task;
        let todoIsStarted = this.props.todoIsStarted;
        todoIsStarted = true;
        let activity = this.props.activity;
        activity = true;
        tasks.push(task);
        this.props.onSubmit(tasks, activity, todoIsStarted);

        if(this.props.selectedButton !== "buttonCompleted") {
            const renderTasks = this.state.renderTasks;
            renderTasks.push(task);
            this.setState({renderTasks: renderTasks});
        }
    }

    input = (e) => {
        this.props.onInput(e.target.value);
    }

    change = (task) => {
        const tasks = this.props.tasks.slice();
        tasks[tasks.indexOf(task, 0)].isCompleted = !tasks[tasks.indexOf(task, 0)].isCompleted;
        tasks[tasks.indexOf(task, 0)].checked = !tasks[tasks.indexOf(task, 0)].checked;
        let doneTasks = this.props.doneTasks;
        let activity = this.props.activity;
        let someIsChecked = this.props.someIsChecked;

        if(tasks[tasks.indexOf(task, 0)].isCompleted === true) {
            doneTasks += 1;
            someIsChecked = true;
        }
        
        if(tasks[tasks.indexOf(task, 0)].isCompleted === false) {
            doneTasks -= 1;
            activity = true;
            if(tasks.filter(item => (item.isCompleted === true)).length === 0) {
                someIsChecked = false;
            }
        }

        if(tasks.filter(item => (item.isCompleted === false)).length === 0) {
            activity = false;
        }

        this.props.onChangeBox(tasks, doneTasks, activity, someIsChecked);

        if(this.props.selectedButton === "buttonCompleted") {
            const renderTasks = tasks.filter(item => (item.isCompleted === true));
            this.setState({renderTasks: renderTasks});
        }

        if(this.props.selectedButton === "buttonActive") {
            const renderTasks = tasks.filter(item => (item.isCompleted === false));
            this.setState({renderTasks: renderTasks});
        }
    }

    remove = (task) => {
        const tasks = this.props.tasks.slice();
        let doneTasks = this.props.doneTasks;
        let todoIsStarted = this.props.todoIsStarted;
        let someIsChecked = this.props.someIsChecked;
        
        if (task.isCompleted === false) {
            doneTasks += 1;
        }
        
        const newTasks = tasks.filter(item => (item.key !== task.key));

        if(newTasks.length === 0) {
            todoIsStarted = false;
            someIsChecked = false;
        }

        if(newTasks.filter(item => (item.isCompleted === true)).length === 0) {
            someIsChecked = false;
        }

        this.props.onRemove(newTasks, doneTasks, todoIsStarted, someIsChecked);
        const renderTasks = this.state.renderTasks.filter(item => (item.key !== task.key));
        this.setState({renderTasks: renderTasks});
    }

    checkAll = () => {
        const tasks = this.props.tasks.slice();
        let activity = this.props.activity;
        let doneTasks = this.props.doneTasks;
        let someIsChecked = this.props.someIsChecked;

        if (activity === true) {

            for (let task of tasks) {
                task.isCompleted = true;
                task.checked = true;
            }

            if(this.props.selectedButton === "buttonCompleted") {
                const renderTasks = tasks.filter(item => (item.isCompleted === true));
                this.setState({renderTasks: renderTasks});
            }

            if(this.props.selectedButton === "buttonActive") {
                const renderTasks = tasks.filter(item => (item.isCompleted === false));
                this.setState({renderTasks: renderTasks});
            }

            someIsChecked = true;
            doneTasks = tasks.length;
            activity = false;
            return this.props.onCheckAll(tasks, activity, doneTasks, someIsChecked);
        }

        if (activity === false) {

            for (let task of tasks) {
                task.isCompleted = false;
                task.checked = false;
            }

            if(this.props.selectedButton === "buttonCompleted") {
                const renderTasks = tasks.filter(item => (item.isCompleted === true));
                this.setState({renderTasks: renderTasks});
            }

            if(this.props.selectedButton === "buttonActive") {
                const renderTasks = tasks.filter(item => (item.isCompleted === false));
                this.setState({renderTasks: renderTasks});
            }

            someIsChecked = false
            doneTasks = 0;
            activity = true;
            return this.props.onCheckAll(tasks, activity, doneTasks, someIsChecked);
        }
    }

    clearCompleted = () => {
        const tasks = this.props.tasks.slice().filter(item => (item.isCompleted === false));
        let someIsChecked = this.props.someIsChecked;
        let todoIsStarted = this.props.todoIsStarted;
        someIsChecked = false;
        if(tasks.length === 0) {
            todoIsStarted = false;
        }
        this.props.onClear(tasks, todoIsStarted, someIsChecked);
        const renderTasks = this.state.renderTasks.filter(item => (item.isCompleted === false));
        this.setState({renderTasks: renderTasks});
    }

    showAll = () => {
        const tasks = this.props.tasks.slice();
        const selectedButton = "buttonAll";
        this.setState({renderTasks: tasks});
        this.props.onSelectButton(selectedButton);
    }

    showActive = () => {
        const tasks = this.props.tasks.slice().filter(item => (item.isCompleted === false));
        const selectedButton = "buttonActive";
        this.setState({renderTasks: tasks});
        this.props.onSelectButton(selectedButton);
    }

    showCompleted = () => {
        const tasks = this.props.tasks.slice().filter(item => (item.isCompleted === true));
        const selectedButton = "buttonCompleted";
        this.setState({renderTasks: tasks});
        this.props.onSelectButton(selectedButton);
    }

    render() {
        return (
            <FormStyledContainer id="form" onSubmit={this.submit}>
                <TopLine onInput={this.input} value={this.props.task.text} checkAll={this.checkAll}/>
                <Tasks tasks={this.state.renderTasks} onChange={this.props.onChangeBox} remove={this.remove} change={this.change}/>
                <BotLine tasks={this.props.tasks} doneTasks={this.props.doneTasks} clearCompleted={this.clearCompleted}
                 showAll={this.showAll} showActive={this.showActive} showCompleted={this.showCompleted}/>
            </FormStyledContainer>
        );
    }
}

const mapStateToProps=(state)=>({
    todoIsStarted: state.todo.todoIsStarted,
    task: state.todo.task,
    tasks: state.todo.tasks,
    activity: state.todo.activity,
    doneTasks: state.todo.doneTasks,
    editingTask: state.todo.editingTask,
    someIsChecked: state.todo.someIsChecked,
    selectedButton: state.todo.selectedButton,
    someIsChecked: state.todo.someIsChecked
})
 
const mapDispatchToProps=(dispatch)=>({
    onInput:(value) => dispatch(inputActionGenerator(value)),
    onSubmit:(tasks, activity, todoIsStarted) => dispatch(submitActionGenerator(tasks, activity, todoIsStarted)),
    onChangeBox:(tasks, doneTasks, activity, someIsChecked) => dispatch(checkboxActionGenerator(tasks, doneTasks, activity, someIsChecked)),
    onRemove:(tasks, doneTasks, todoIsStarted, someIsChecked) => dispatch(removeActionGenerator(tasks, doneTasks, todoIsStarted, someIsChecked)),
    onCheckAll:(tasks, activity, doneTasks, someIsChecked) => dispatch(checkAllActionGenerator(tasks, activity, doneTasks, someIsChecked)),
    onClear:(tasks, todoIsStarted, someIsChecked) => dispatch(clearActionGenerator(tasks, todoIsStarted, someIsChecked)),
    onSelectButton:(selectedButton) => dispatch(selectActionGenerator(selectedButton))
})
 
const ToDoApp=connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo);
 
export default ToDoApp;