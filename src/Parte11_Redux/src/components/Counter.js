import classes from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter-slice';

const Counter = () => {

  const dispatch = useDispatch();

  // Extract the state that we want
  // useSelector sets an automatically subscription for the store, for this Component instance
  // every change in the state will re-render this Component
  // if the Component instance is unmount, Redux will end the subscription
  const counter = useSelector((state)=>{ return state.counter.counter });
  const showCounter = useSelector((state)=>{ return state.counter.showCounter });

  const incrementHandler = () => {
    //dispatch({type:'INCREMENT'});
    dispatch(counterActions.increment());
  }
  const decrementHandler = () => {
    //dispatch({type:'DECREMENT'});
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    //dispatch({type:'TOGGLE'});
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>  
        <button onClick={decrementHandler}>Decrement</button>  
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
