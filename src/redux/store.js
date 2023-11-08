import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './feature/greetingsSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
