const weeksReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_WEEK':
      return state
    case 'ADD_CATEGORIES':
      return state
    case 'LOAD_CATEGORIES':
      return action.payload;
    default:
      return state;
  }
};

export default weeksReducer;
