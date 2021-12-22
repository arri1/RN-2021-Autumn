import {configureStore} from '@reduxjs/toolkit';
import dataSlice from './data';

export default configureStore({
  reducer: {
    data: dataSlice,
  },
});