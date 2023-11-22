import { useState, useEffect, useRef } from 'react'

import './App.css'
import Task0 from './components/Tasks/Task0/Task0';
import Task1 from './components/Tasks/Task1/Task1';
import Task2 from './components/Tasks/Task2/Task2';
import Task3 from './components/Tasks/Task3/Task3';
import Task4 from './components/Tasks/Task4/Task4';

import { useAppDispatch } from './store/store';
import { setCoordinateContainer } from './store/reducers/containerCoordinateReducer';

function App() {
  console.log("поменять номер таска после теста второго тура");

  const [task, setTask] = useState(2);
  const nextLevel = () => {
    setTask(task + 1);
  }

  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (ref.current) {
      const data = ref.current.getBoundingClientRect();
      dispatch(setCoordinateContainer({ top: data.top, left: data.left, width: ref.current.offsetWidth, height: ref.current.offsetHeight }))


    }

  }, [dispatch])

  return (
    <>
      <div className="container" ref={ref}>
        {task === 0 && <Task0 nextLevel={nextLevel} />}
        {task === 1 && <Task1 nextLevel={nextLevel} />}
        {task === 2 && <Task2 nextLevel={nextLevel} />}
        {task === 3 && <Task3 nextLevel={nextLevel} />}
        {task === 4 && <Task4 nextLevel={nextLevel} />}
      </div>

    </>
  )
}

export default App
