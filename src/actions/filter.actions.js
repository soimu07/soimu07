export const setCategoryFilter = (categoryName) => {
  return {
    type: "SET_CATEGORY_FILTER",
    categoryName,
  };
};

export const deleteCategoryFilter = (categoryName) => {
  return {
    type: "DELETE_CATEGORY_FILTER",
    categoryName,
  };
};

export const setManufacturerFilter = (manufacturer) => {
  return {
    type: "SET_MANUFACTURER_FILTER",
    manufacturer,
  };
};

export const deleteManufacturerFilter = (manufacturer) => {
  return {
    type: "DELETE_MANUFACTURER_FILTER",
    manufacturer,
  };
};
