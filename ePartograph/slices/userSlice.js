// slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    role: null,
    userInfo: {},
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.role = action.payload.role;
      state.userInfo = action.payload.userInfo;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.role = null;
      state.userInfo = {};
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
