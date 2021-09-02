import React, { useState } from 'react';
import "./TaskList.css";
import PropTypes from 'prop-types';


export default function TaskList({title}) {

    const [count , setCount]  = useState(0);

    const increment = () => {
        setCount((currentCount) => {
            return currentCount + 1;
        })
    }
    return (
        <div className="taskList">
            <div className="title"><span>{title}</span></div>
            <div className="content">
                {count}
                <button onClick={increment}>Incrementar</button>
            </div>
        </div>
    )
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired
}