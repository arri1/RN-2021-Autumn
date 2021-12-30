const initialState = {
    userId: 1,
    tasksId: [],
    signedIn: false,
  };
  
  const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SWITCH_USER':
        return {...state, userId: action.id};
      case 'DROP':
        state.tasksId = [];
        return {...state, userId: 1};
      case 'SELECT_TASK':
        state.tasksId.push(action.taskId);
        return state;
      case 'DESELECT_TASK':
        state.tasksId.splice(state.tasksId.indexOf(action.taskId), 1);
        return state;
      case 'SIGN_IN':
        return {...state, signedIn: action.signedIn};
        return state;
      case 'LOGOUT':
        return {...state, signedIn: action.signedIn};
        return state;
      default:
        return state;
    }
  };
  
  export default toDoReducer;