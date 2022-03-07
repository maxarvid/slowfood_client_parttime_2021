const rootReducer = (state, action) => {
  switch (action.type) {
    case "SET_ORDER_IN_PROGRESS":
      debugger;
      return {
        ...state,
        orderInProgress: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
