import { createStore } from 'redux'

const WATCH_ACTION = "WATCH_ACTION"

const watchAction = (value) => {
  return {
    type: WATCH_ACTION,
    value
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case WATCH_ACTION:
      return { 
        value: action.value 
      }
    default:
      return state
  }
}

const initialState = {
  value: false
}

const store = createStore(reducer, initialState)

export {
  watchAction, 
  reducer,
  store
}