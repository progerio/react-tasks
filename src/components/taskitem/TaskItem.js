import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TaskItem.css';


export default function TaskItem({ id, title, state, onTaskUpdate}){

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
        }
    }

    if(isEditing) {
        return <input type="text" value={editableTitle} onChange={ onTitleChange} onKeyPress={onKeyPressTitle} /> 
    }
    return <div onClick={(ev) => setIsEditing(true)} >{editableTitle}</div>
   
}


TaskItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
}