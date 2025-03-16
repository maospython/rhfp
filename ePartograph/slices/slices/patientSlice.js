// slices/patientSlice.js
import { createSlice } from '@reduxjs/toolkit';

const patientSlice = createSlice({
  name: 'patients',
  initialState: {
    list: [],
  },
  reducers: {
    setPatients: (state, action) => {
      state.list = action.payload;
    },
    addPatient: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { setPatients, addPatient } = patientSlice.actions;
export default patientSlice.reducer;
