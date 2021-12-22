import {createSlice} from '@reduxjs/toolkit';

export const colorSlice = createSlice({
  name: 'background',
  initialState: {
    value: '#' +  Math.floor(Math.random()*16581375).toString(16),
    counter: 0,
  },
  reducers: {
    load: (state) => {      
      state.value =  '#' + Math.floor(Math.random()*16581375).toString(16)
  },
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