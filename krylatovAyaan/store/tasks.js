import {createSlice} from '@reduxjs/toolkit';

const initialState = [];
export const dataSlice = createSlice({
    name: 'history',
    initialState,
    reducers:{
        addItem: (state, action) => {
            state.push(action.payload);
        },
        deleteItem: (state, action) => {
            return state.filter(item => item.id !== action.payload)
        }
    },
});

export const {addItem, deleteItem} = dataSlice.actions;

export default dataSlice.reducer;