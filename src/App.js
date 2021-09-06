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

  const updateTask = (id, title, status) => {
    console.log(id, title, status);
    setTasks((existingTask) => {
      return existingTask.map((task) =>{
          if(task.id === id){
            return {...task, title, status}
          }else{
            return task;
          }
      })
    })
  }

  return (
    <div>
      <Navbar/>
      <div className="container">
        <TaskList 
            title={'Pendente'} 
            onAddTask={addTask} 
            tasks={tasks.filter(t => t.state === 'Pendente')} 
            taskState={"Pendente"}
            onTaskUpdate={updateTask}/>

        <TaskList 
            title={'Fazendo'} 
            onAddTask={addTask} 
            tasks={tasks.filter(t => t.state === 'Fazendo')}
            taskState={"Fazendo"} 
            onTaskUpdate={updateTask}/>

        <TaskList 
            title={'Completo'} 
            onAddTask={addTask} 
            tasks={tasks.filter(t => t.state === 'Completo')}
            taskState={"Completo"}
            onTaskUpdate={updateTask}/>

      </div>

    </div>
  );
}

export default App;
