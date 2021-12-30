import {createSlice} from '@reduxjs/toolkit';

export const backgroundSlice = createSlice({
  name: 'backgroundColor',
  initialState: {
    value: '#121212' ,
  },
  reducers: {
    changeColor: (state) => {      
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        state.value = color;
    },
},
})

export const { changeColor } = backgroundSlice.actions;

export default backgroundSlice.reducer;