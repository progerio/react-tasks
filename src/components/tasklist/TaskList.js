import React, { useState } from 'react';
import "./TaskList.css";
import PropTypes from 'prop-types';
import TaskItem from '../taskitem/TaskItem';
 

export default function TaskList({title ,taskState, onAddTask, tasks, onTaskUpdate}) {

    const addTask = () => {
        onAddTask('Nova Tarefa', taskState);
    }

    return (
        <div className="taskList">
            <div className="title"><span>{title}</span></div>
            <div className="content">
                {tasks.map((task) => {
                    return <TaskItem 
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            state={task.state}
                            onTaskUpdate={onTaskUpdate} />
                })}
            </div>
            <button onClick={addTask}>Adicionar tarefa</button>
        </div>
    )
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
    onTaskUpdate: PropTypes.func.isRequired
}