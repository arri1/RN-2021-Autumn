import { configureStore } from '@reduxjs/toolkit'
import backgroundSlice from './background'
import boxSlice from './box';

export default configureStore({
  reducer: {
    backgroundColor: backgroundSlice,
    boxColor: boxSlice
  },
}); 