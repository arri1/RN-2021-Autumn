import {configureStore} from '@reduxjs/toolkit';
import dataSlice from './tasks';
import userData from './tasks';

export default configureStore({
  reducer: {
    data: dataSlice,
    user: userData,
    st: 'true',
  },
});

