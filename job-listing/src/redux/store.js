import { configureStore } from '@reduxjs/toolkit';
import job from './slice';

export const store = configureStore({
  reducer: {
    Jobs: job,
  },
});