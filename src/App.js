import { useState } from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import TaskList from './components/tasklist/TaskList';


let idInc = 0
const generatedId = () => idInc++;


function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
      const newTask = {
        id: generatedId(),
        title,
        state
      };
       setTasks((existingTasks) => { 
         return [ ...existingTasks, newTask];
       });
  }

  const updateTask = (id, title, state) => {
    
    setTasks((existingTask) => {
      
      return existingTask.map((task) =>{
          if(task.id === id){
            console.log({...task, title, state});
            return {...task, title, state}
          }else{
            return task;
          }
      })
    })
  }

  const deleteTask = (id) => {
    setTasks((existingTask) => {
      return existingTask.filter(task => task.id !== id);
    })
  }

  return (
    <div>
      <Navbar/>
      <div className="container">
        <TaskList 
            title={'Pendente'} 
            onAddTask={addTask} 
            taskState={"Pendente"}
            tasks={tasks.filter(t => t.state === 'Pendente')} 
            onTaskUpdate={updateTask}
            onDeleteTask={deleteTask}  
            />

        <TaskList 
            title={'Fazendo'} 
            onAddTask={addTask} 
            taskState={"Fazendo"} 
            tasks={tasks.filter(t => t.state === 'Fazendo')}
            onTaskUpdate={updateTask}
            onDeleteTask={deleteTask}    
            />


        <TaskList 
            title={'Completo'} 
            onAddTask={addTask} 
            taskState={"Completo"}
            tasks={tasks.filter(t => t.state === 'Completo')}
            onTaskUpdate={updateTask}
            onDeleteTask={deleteTask}   
            />

      </div>

    </div>
  );
}

export default App;
