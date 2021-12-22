import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadPosts: (state, action) => {
      state.value = action.payload.map(item => {
        return {
          id: item.id,
          imgurl: item.imgurl,
          title: item.title,
          body: item.body,
          fav: false,
        };
      });
    },
    postFav: (state, action) => {
      const newValue = state.value.map(item => {
        if (item.id === action.payload) {
          item.fav = !item.fav;
        }
        return item;
      });
      state.value = newValue;
    },
  },
});

export const {loadPosts, postFav, changeTitle} = postSlice.actions;

export default postSlice.reducer;
