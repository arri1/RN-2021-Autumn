import {createSlice} from '@reduxjs/toolkit';

export const colorSlice = createSlice({
  name: 'background',
  initialState: {
    counter: 0,
  },
  reducers: {
    increaseCounter: (state) => {      
    state.counter = state.counter + 1
  },
    increaseCounterDelete: (state) => {
    state.counter = state.counter * 0
    },
  },
})

export const {load, increaseCounter, increaseCounterDelete} = colorSlice.actions

export default colorSlice.reducer;