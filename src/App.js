import { useState } from 'react';
import './App.css';
import Banner from './Components/Banner';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';

function App() {

  const [tasks, setTasks] = useState(['Wake up', 'Make breakfast', 'Go to school'])

  const linkCheck = () =>{
    console.log('Linked!')
  }

  return (
    <div /*className="App"*/ id='main-content'>
      <Banner />
      <TaskForm tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks} linkCheck={linkCheck}/>
    </div>
  );
}

export default App;
