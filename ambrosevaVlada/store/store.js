import toDoReducer from './reducers/toDoReducer';
import backColorReducer from './reducers/backColorReducer';

import {combineReducers, createStore} from 'redux';

const combineReducer = combineReducers({
  toDo: toDoReducer,
  backColor: backColorReducer,
});

const store = createStore(combineReducer);

export default store;
