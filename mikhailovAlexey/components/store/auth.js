import {createSlice} from '@reduxjs/toolkit';

export const userData = createSlice({
  name: 'user',
  initialState: {
    value: false,
    loading: false,
  },
  reducers: {
    setStatus: (status, action) => {
      if (action.type == 'false')
        state.value = false
      else
        state.value = true
    },
    getStatus: (state) => {
        return state.value
    },
    changeStatus: (state) => {
      const newValue = !state
      state.value = newValue;
    },
  },
});

export const {getStatus, changeStatus, setStatus} = userData.actions;

export default userData.reducer;