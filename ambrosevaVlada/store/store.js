import React from 'react';
import {createStore} from 'redux';

const initialState = {
  username: 'GUEST',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return {username: action.username};
    case 'DROP':
      return {username: 'GUEST'};

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
