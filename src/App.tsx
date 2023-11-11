import { useState } from 'react'

import './App.css'
import Task0 from './components/Tasks/Task0/Task0';
import Task1 from './components/Tasks/Task1/Task1';
import Task2 from './components/Tasks/Task2/Task2';
import Task3 from './components/Tasks/Task3/Task3';
import Task4 from './components/Tasks/Task4/Task4';

function App() {
  const [task, setTask] = useState(0);
  const nextLevel = () => {
    setTask(task + 1);
  }

  return (
    <>
      {task === 0 && <Task0 nextLevel={nextLevel} />}
      {task === 1 && <Task1 nextLevel={nextLevel} />}
      {task === 2 && <Task2 nextLevel={nextLevel} />}
      {task === 3 && <Task3 nextLevel={nextLevel} />}
      {task === 4 && <Task4 nextLevel={nextLevel} />}
    </>
  )
}

export default App
