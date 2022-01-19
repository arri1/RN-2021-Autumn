import {createSlice} from '@reduxjs/toolkit';
import { createStore } from 'redux'

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
          name: item.name,
          email: item.email,
          website: item.website,
          phone: item.phone,
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
  },
});

const user = (state = 'user', action) => {
  switch (action.type) {
    case 'setUser':
      return action.login
    default:
      return state
  }
}

export const auth = createStore(user)

export const {loadItems, checkItem} = dataSlice.actions;

export default dataSlice.reducer;