import {configureStore} from '@reduxjs/toolkit'
import colorReducer from './tasks'

export default configureStore({
  reducer: {
    background: colorReducer,
  },
  
}) 