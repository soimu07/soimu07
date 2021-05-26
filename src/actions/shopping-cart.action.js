export const addItemToCart = (id) => {
  return {
    type: "ADD_PRODUCT",
    id,
  };
};

export const removeOneFromCart = (id) => {
  return {
    type: "REMOVE_ONE",
    id,
  };
};
