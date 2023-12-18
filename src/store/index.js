import tetrisReducer from '@/store/slicer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: tetrisReducer,
});
