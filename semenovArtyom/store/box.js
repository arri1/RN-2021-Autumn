import {createSlice} from '@reduxjs/toolkit';

export const boxSlice = createSlice({
  name: 'boxColor',
  initialState: {
    value: '#FFFFFF' ,
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

export const { changeColor } = boxSlice.actions;

export default boxSlice.reducer;