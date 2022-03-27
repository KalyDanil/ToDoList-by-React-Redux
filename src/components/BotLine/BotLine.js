import React from 'react';
import {connect} from 'react-redux';
import {BotLineStyledContainer} from './BotLine.styles.js'

class BotLine0 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {tasks} = this.props;
        const {doneTasks} = this.props;
        return (
            <BotLineStyledContainer todoIsStarted={this.props.todoIsStarted} selectedButton={this.props.selectedButton} someIsChecked={this.props.someIsChecked}>
                <span className="botLine__count">{(tasks.filter(item => (item.isCompleted === false))).length} items left <br/> {doneTasks} items done</span>
                <div className="botLine__centralButtons">
                    <input className="botLine__button" id="buttonAll" type="button" value="All" onClick={this.props.showAll}/>
                    <input className="botLine__button" id="buttonActive" type="button" value="Active" onClick={this.props.showActive}/>
                    <input className="botLine__button" id="buttonCompleted" type="button" value="Completed" onClick={this.props.showCompleted}/>
                </div>
                <input className="botLine__clearButton" id="buttonClear" type="button" value="Clear completed" onClick={this.props.clearCompleted}/>
            </BotLineStyledContainer>
        );
    }
}

const mapStateToProps=(state)=>({
    todoIsStarted: state.todoIsStarted,
    tasks: state.tasks,
    doneTasks: state.doneTasks,
    selectedButton: state.selectedButton,
    someIsChecked: state.someIsChecked
})

const BotLine=connect(
    mapStateToProps
)(BotLine0);

export default BotLine;