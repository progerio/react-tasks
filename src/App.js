import './App.css';

import Navbar from './components/navbar/Navbar';
import TaskList from './components/tasklist/TaskList';

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <TaskList title={'Pendente'}/>
        <TaskList title="Fazendo"/>
        <TaskList title="Completo"/>
      </div>

    </div>
  );
}

export default App;
