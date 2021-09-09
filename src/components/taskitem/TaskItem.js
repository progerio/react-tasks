import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TaskItem.css';


export default function TaskItem({ id, title, state, onTaskUpdate, onDeleteTask}){

    const [ isEditing, setIsEditing ] = useState(false);

    const [editableTitle, setEditableTitle] = useState(title)

    const onTitleChange = (event) => {
        const newTitle = event.target.value;
        setEditableTitle(newTitle);
        onTaskUpdate(id, newTitle, state)
    }

    const onKeyPressTitle = (event) => {
        if(event.key  === 'Enter'){
            setIsEditing(false);
            
            if(editableTitle.length === 0){
                onDeleteTask(id)
            }
        }
    }

    const onTaskStateChange = (event) => {
        onTaskUpdate(id, title, event.target.value)
    }

    if(isEditing) {
        return <input type="text" 
                    value={editableTitle} 
                    onChange={ onTitleChange} 
                    onKeyPress={onKeyPressTitle} /> 
    }else{
        return (
            <div className="task-item">
                <div onClick={(ev) => setIsEditing(true)} >{editableTitle}</div>
                <select onChange={onTaskStateChange} value={state}>
                    <option  value="Pendente">Pendente</option>
                    <option  value="Fazendo">Fazendo</option>
                    <option  value="Completo">Completo</option>
                </select>
            </div>
        )
    }
  
   
}


TaskItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
}