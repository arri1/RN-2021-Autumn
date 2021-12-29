import { configureStore } from '@reduxjs/toolkit'
import rnReducer from './RNSlice'

export default configureStore({
  reducer: {
    rnSlice: rnReducer,
  },
})