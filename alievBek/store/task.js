import {createSlice} from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value: null,
    loading: false,
    isLoggedIn: false,
  },
  reducers: {
    loadItems: (state, action) => {
      state.value = action.payload.map(item => {
        return {
          id: item.id,
          title: item.title,
          body: item.body,
          picture: item.img,
          checked: false,
        };
      });
    },
    checkItem: (state, action) => {
      const newValue = state.value.map(item => {
        if (item.id === action.payload) {
          item.checked = !item.checked;
        }
        return item;
      });
      state.value = newValue;
    },
    checkLoad: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {loadItems, checkItem, checkLoad} = dataSlice.actions;

export default dataSlice.reducer;
