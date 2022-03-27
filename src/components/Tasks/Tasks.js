import React from 'react';
import Task from '../Task/Task';


class Tasks extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { tasks } = this.props;
        const {remove} = this.props;
        const {change} = this.props;
        const tasksArr = tasks.map((item,index) => {
            return (<Task task={item} key={`${index}-${new Date()}`} remove={remove} change={change}/>);
        })

        return (
            <>
            {tasksArr}
            </>
        )
    };
}
    

export default Tasks;