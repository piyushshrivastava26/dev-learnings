
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../Features/counter/counterSlice';



// Define the store
const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});

// Export the store
export default store;


/*
first, import the slice folder from the slice directory

const store1 = configureStore({
  reducer : {}
})

export default store1
*/