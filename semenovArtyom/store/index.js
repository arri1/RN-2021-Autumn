import { configureStore } from '@reduxjs/toolkit'
import backgroundSlice from './background'
import boxSlice from './box';
import loginred from './login';

import {combineReducers, createStore} from 'redux';

const com = combineReducers({
  login: loginred,
})

export default configureStore({
  reducer: {
    backgroundColor: backgroundSlice,
    boxColor: boxSlice,
    toDo: com,
  },
}); 