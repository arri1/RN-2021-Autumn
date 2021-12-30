import {configureStore} from '@reduxjs/toolkit';

import postsReducer from './posData';

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
