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
    todoIsStarted: state.todoIsStarted,
    tasks: state.tasks,
    activity: state.activity,
    doneTasks: state.doneTasks,
    someIsChecked: state.someIsChecked
});

const TopLine=connect(
    mapStateToProps
)(TopLine0);

export default TopLine;