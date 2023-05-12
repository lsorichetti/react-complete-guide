
import { createSlice } from '@reduxjs/toolkit';

const initialState= {counter:0 , showCounter: true};

// Slice of a global state
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    decrease(state, action) {
      // action always return a .payload
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;

/*
import { createStore } from 'redux';

const counterReducer = (state = initialState, action) => {
  
  if(action.type === 'INCREMENT'){
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }
  if(action.type === 'DECREMENT'){
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
        };
      }
      
      if(action.type === 'TOGGLE'){
        return {
          counter: state.counter,
          showCounter: !state.showCounter
        }
      }
      
      return state;
    }
    
    const store = createStore(counterReducer);
    */