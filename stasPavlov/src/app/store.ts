import {combineReducers, configureStore} from '@reduxjs/toolkit'
import itemsReducer from '../features/items-slice'

const rootReducer = combineReducers({
    items: itemsReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
