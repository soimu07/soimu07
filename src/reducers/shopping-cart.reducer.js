const shoppingCart = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const { id } = action;
      const productExists = state[id] !== undefined;
      const newState = state;
      if (!productExists) {
        newState[id] = 1;
      } else {
        newState[id] += 1;
      }
      return { ...newState };
    }

    case "REMOVE_ONE": {
      const { id } = action;
      const productExists = state[id] !== undefined;
      const newState = state;
      if (!productExists) {
        return { ...state };
      }
      newState[id] -= 1;
      return { ...newState };
    }

    default:
      return state;
  }
};

export default shoppingCart;
