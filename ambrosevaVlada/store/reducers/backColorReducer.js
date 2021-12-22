const initialState = {
  color: '#E6D899',
};

const backColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {color: action.color};
    default:
      return state;
  }
};

export default backColorReducer;
