import React from 'react';

const ToDo=({tasks, leftOverTasks, doneTasks, onSubmit, onCheckAll, onChangeBox,
    onInput, onRemove, onActive, onCompleted, onAll, onClear, onHideRemoveButton, onShowRemoveButton})=>{

    const tasksArr = tasks.map((item) => {
        return (
        <div className={item.div} key="{item.text}" hidden={item.hidden} onMouseLeave={onHideRemoveButton}>
            <input className="checkbox" type="checkbox" checked={item.checked} onChange={onChangeBox} key="{item.text}"/>
            <span className={item.class} key="{item.text}" name={item.text} onMouseOver={onShowRemoveButton}>
                {item.text}
            </span>
            <label className="removeButton" onClick={onRemove} key="{item.text}" hidden="true">×</label>
        </div>
        );
    });
    
    return (
        <form id="form" className="shadow" onSubmit={onSubmit}>
            <div className="topLine">
                <label  id="checkAll" className="checkAll white" onClick={onCheckAll}>❯</label>
                <input className="input" id="input" type="text" onChange={onInput} placeholder="What needs to be done?"/>
            </div>
            {tasksArr}
            <div id="botLine" hidden="true">
                <span className="count">{leftOverTasks} items left <br/>{doneTasks} items done</span>
                <div className="centralButtons">
                    <input className="botLineButton" id="buttonAll" type="button" value="All" onClick={onAll}/>
                    <input className="botLineButton" id="buttonActive" type="button" value="Active" onClick={onActive}/>
                    <input className="botLineButton" id="buttonCompleted" type="button" value="Completed" onClick={onCompleted}/>
                </div>
                <input className="buttonClear white" id="buttonClear" type="button" value="Clear completed" onClick={onClear}/>
            </div>
        </form>
    )
};

export default ToDo;