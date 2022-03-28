import React from 'react';
import {TopLineStyledContainer} from './TopLine.styles.js'
import {connect} from 'react-redux';

class TopLine0 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onInput} = this.props;
        const {value} = this.props;
        const {checkAll} = this.props;
        return (
            <TopLineStyledContainer todoIsStarted={this.props.todoIsStarted}>
                <label className="topLine__CheckAll" id="checkAll"  onClick={checkAll}>❯</label>
                <input className="topLine__input" id="input" type="text" placeholder="What needs to be done?" onInput={onInput} value={value}/>
            </TopLineStyledContainer>
        )
    } 
}

const mapStateToProps=(state)=>({
    todoIsStarted: state.todo.todoIsStarted,
    tasks: state.todo.tasks,
    activity: state.todo.activity,
    doneTasks: state.todo.doneTasks,
    someIsChecked: state.todo.someIsChecked
});

const TopLine=connect(
    mapStateToProps
)(TopLine0);

export default TopLine;