const postFilterReducer = (state='', action) => {
  switch (action.type) {
    case 'SET_POST_FILTER':
      return action.payload;
    default:
      return state;
  }
};

export default postFilterReducer;
