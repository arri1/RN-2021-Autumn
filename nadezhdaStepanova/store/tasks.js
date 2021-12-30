import {createSlice} from '@reduxjs/toolkit';

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
          title: item.name,
          body: item.body,
          email: item.email,
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
    changeTitle: (state, action) => {
      const newValue = state.value.map(item => {
        if (item.id === action.payload[0]) {
          item.title = action.payload[1];
          item.body = action.payload[2];
        }
        return item;
      });
      state.value = newValue;
    },
    applyItem: (state, action) => {
      const newValue = state.value.map(item => {
        if (item.id === action.payload) {
          item.checked = !item.checked;
        }
        return item;
      });
      state.value = newValue;
    },
  },
});

export const {loadItems, checkItem, changeTitle, applyItem} = dataSlice.actions;

export default dataSlice.reducer;