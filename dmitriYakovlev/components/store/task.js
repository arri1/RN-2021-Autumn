import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value: null,
    loading: false,
  },
  reducers: {
    loadItems: (state, action) => {
      state.value = action.payload.map(item => {
        return {
          id: item.id,
          title: item.title,
          completed: item.completed,
        };
      });
    },
    checkItem: (state, action) => {
      state.value.map(item => {
        if (item.id === action.payload) {
          item.checked = !item.checked;
        }
        return item;
      });
    },
  },
});

export const { loadItems, checkItem } = dataSlice.actions;

export default dataSlice.reducer;