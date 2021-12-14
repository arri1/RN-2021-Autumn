import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value: null,
    loading: false,
  },
  reducers: {
    load: (state, action) => {
      state.value = action.payload.map(item => {
        return {
          id: item.id,
          title: item.title,
          completed: item.completed,
        };
      });
    },
    undone: (state, action) => {
      state.value.map(item => {
        if (item.id === action.payload) {
          item.checked = !item.checked;
        }
        return item;
      });
    },
  },
});

export const { load, undone } = dataSlice.actions;

export default dataSlice.reducer;