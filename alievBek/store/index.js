import {configureStore} from '@reduxjs/toolkit';
import dataSlice from './task';

export default configureStore({
  reducer: {
    data: dataSlice,
  },
});