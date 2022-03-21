import {connect} from 'react-redux'
import ToDo from '../components/ToDo'
import {inputActionGenerator, submitActionGenerator, checkboxActionGenerator, checkAllActionGenerator, hideActionGenerator, showActionGenerator,
    removeActionGenerator, activeActionGenerator, completedActionGenerator, allActionGenerator, clearActionGenerator} from "../actions/Action";
 
const mapStateToProps=(state)=>({
    value:state.value,
    task: state.task,
    tasks: state.tasks,
    activity: state.activity,
    leftOverTasks: state.leftOverTasks,
    doneTasks: state.doneTasks
})
 
const mapDispatchToProps=(dispatch)=>({
    onInput:(e) => dispatch(inputActionGenerator(e)),
    onSubmit:(e) => dispatch(submitActionGenerator(), e.preventDefault()),
    onChangeBox:(e) => dispatch(checkboxActionGenerator(e)),
    onCheckAll:() => dispatch(checkAllActionGenerator()),
    onRemove:(e) => dispatch(removeActionGenerator(e)),
    onAll:() => dispatch(allActionGenerator()),
    onActive:() => dispatch(activeActionGenerator()),
    onCompleted:() => dispatch(completedActionGenerator()),
    onClear:() => dispatch(clearActionGenerator()),
    onHideRemoveButton:() => dispatch(hideActionGenerator()),
    onShowRemoveButton:(e) => dispatch(showActionGenerator(e)),
})
 
const ToDoApp=connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo);
 
export default ToDoApp;