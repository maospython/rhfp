import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import patientReducer from './slices/patientSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    patients: patientReducer,
  },
});

export default store;
