import { useState, useEffect, useRef } from 'react'
import { disablePageScroll } from 'scroll-lock';

import './App.css'
import Task0 from './components/Tasks/Task0/Task0';
import Task1 from './components/Tasks/Task1/Task1';
import Task2 from './components/Tasks/Task2/Task2';
import Task3 from './components/Tasks/Task3/Task3';
import Task4 from './components/Tasks/Task4/Task4';
import Task5 from './components/Tasks/Task5/Task5';

import { useAppDispatch } from './store/store';
import { setCoordinateContainer } from './store/reducers/containerCoordinateReducer';

import { setArrClients } from './store/reducers/arrClientsReducer';
import { getClinets } from './components/utils/clients';

function App() {
  disablePageScroll();
  const [task, setTask] = useState(0);
  const nextLevel = () => {
    setTask(task + 1);
    if (task === 0) return;
    if (task > 3) return;
    dispatch(setArrClients(getClinets(task)))
  }

  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (ref.current) {
      const data = ref.current.getBoundingClientRect();
      dispatch(setCoordinateContainer({ top: data.top, left: data.left, width: ref.current.clientWidth, height: ref.current.offsetHeight }))


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
        {task === 5 && <Task5 />}
      </div>

    </>
  )
}

export default App
