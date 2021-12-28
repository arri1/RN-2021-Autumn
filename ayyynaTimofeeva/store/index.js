import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './postData';

export default configureStore({
    reducer: {
        posts: postsReducer,
    },
});