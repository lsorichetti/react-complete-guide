import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {

  const [tasks, setTasks] = useState([]);
  
  const [isLoading, error, fetchTasks] = useHttp();

  useEffect(() => {
    
    const applyDataHandler = (data) => {
      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      if(!ignore){
        setTasks(loadedTasks);        
      }

    };
    
    const startFetching = async () =>{
      await fetchTasks({
        url: 'https://react-complete-guide-cac27-default-rtdb.firebaseio.com/tasks.json', 
      },applyDataHandler);

    }

    let ignore = false;
    startFetching();

    return () => ignore = true;
    
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
