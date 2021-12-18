import { configureStore } from '@reduxjs/toolkit'
import colorReducer from './RNColorSlice'

export default configureStore({
  reducer: {
    bgColor: colorReducer,
  },
})