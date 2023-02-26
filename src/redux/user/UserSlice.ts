import { createSlice } from '@reduxjs/toolkit';

export const ReposSlice = createSlice({
  name: 'user',
  initialState: {
    user: ''
  },
  reducers: {
    loadUserData(state, { payload }) {
      return {...state, user: payload };
    }
  }
});

export const { loadUserData } = ReposSlice.actions;

export const selectUser = (state: {user: string}) => state.user;

export default ReposSlice.reducer;
