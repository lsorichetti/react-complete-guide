import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  
  const [isLoading, error, sendTaskRequest] = useHttp();

  const applyDataHandler = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {

      await sendTaskRequest({
        url: 'https://react-complete-guide-cac27-default-rtdb.firebaseio.com/tasks.json', 
        method: 'POST',
        body: { text: taskText },
        headers: {
          'Content-Type': 'application/json',
        },
      },applyDataHandler.bind(this, taskText));
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
