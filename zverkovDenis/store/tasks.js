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
          title: item.author,
          title2: '',
          picture: item.download_url,
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

    applyItem: (state, action) => {
      const newValue = state.value.map(item => {
        if (item.id === action.payload) {
          item.checked = !item.checked;
          item.title = item.title2;
        }
        return item;
      });
      state.value = newValue;
    },

    changeTitle: (state, action) => {
      const newValue = state.value.map(item => {
        console.log(action.payload[0]);
        if (item.id === action.payload[0]) {
          item.title2 = action.payload[1];
        }
        return item;
      });
      state.value = newValue;
    },
  },
});

export const {loadItems, checkItem, applyItem, changeTitle} = dataSlice.actions;

export default dataSlice.reducer;
