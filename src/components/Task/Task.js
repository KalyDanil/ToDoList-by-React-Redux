import {StyledContainer} from './Task.styles.js'
import React from 'react';
import {connect} from 'react-redux';
import {endEditingActionGenerator} from "../../store/ToDoReducers/actionCreater";


class Task0 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hidden: true, type: "button", editingTask: "", isEditing: false};
        this.inputRef = React.createRef();
    }

    showRemoveButton = () => {
        this.setState({hidden: false});
    }

    hideRemoveButton = () => {
        this.setState({hidden: true});
    }

    startEdit = (task) => {
        this.setState({hidden: true});
        this.setState({editingTask: task.text});
        this.setState({type: "text"});
        this.setState({isEditing: true});
    }

    focus = () => {
        this.inputRef.current.focus();
    }

    input = (e) => {
        this.setState({editingTask: e.target.value});
    }

    send = (task, e) => {
        if(e.code === "Enter") {
            this.setState({hidden: false});
            this.setState({type: "button"});
            this.setState({isEditing: false});
            const tasks = this.props.tasks;
            const newTask = tasks.find(item => (item.key === task.key));
            newTask.text = this.state.editingTask;

            this.props.onEnter(tasks);
        }
    }

    onBlur = (task) => {
        this.setState({hidden: false});
        this.setState({type: "button"});
        this.setState({isEditing: false});
        const tasks = this.props.tasks;
        const newTask = tasks.find(item => (item.key === task.key));
        newTask.text = this.state.editingTask;
        this.props.onEnter(tasks);
    }

    render() {
        const {task} = this.props;
        const {remove} = this.props;
        const {change} = this.props;
        return (
            <StyledContainer isCompleted={task.isCompleted} buttonIsHidden={this.state.hidden}  isEditing={this.state.isEditing} onMouseLeave={this.hideRemoveButton}>
                <input className="task__checkbox" type="checkbox" onChange={() => change(task)} checked={task.checked}/>
                <input className="task__edit" ref={this.inputRef} type={this.state.type} value={this.state.editingTask} onMouseEnter={this.focus} onBlur={() => this.onBlur(task)} onInput={this.input} onKeyUp={(e) => this.send(task, e)}/>
                <span className="task__text" onMouseOver={this.showRemoveButton} onDoubleClick={() => this.startEdit(task)}>
                    {task.text}
                </span>
                <label className="task__removeButton" onClick={() => remove(task)} id={task.text}>×</label>
            </StyledContainer >
        );
    };

}

const mapStateToProps=(state)=>({
    tasks: state.todo.tasks
})

const mapDispatchToProps=(dispatch)=>({
    onEnter: (tasks) => dispatch(endEditingActionGenerator(tasks))
})

const Task=connect(
    mapStateToProps,
    mapDispatchToProps
)(Task0);

export default Task;