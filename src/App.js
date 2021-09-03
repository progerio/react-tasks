import { useState } from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import TaskList from './components/tasklist/TaskList';

const task  = {
    id: 0,
    title:'Nova Tarefa',
    status: 'pendente'
}

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
  return (
    <div>
      <Navbar/>
      <div className="container">
        <TaskList title={'Pendente'} onAddTask={addTask} tasks={tasks} />
        {/* <TaskList title="Fazendo"/> */}
        {/* <TaskList title="Completo"/> */}
      </div>

    </div>
  );
}

export default App;
