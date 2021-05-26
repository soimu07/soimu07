const filter = (state = {}, action) => {
  switch (action.type) {
    case "SET_CATEGORY_FILTER": {
      const { categoryName } = action;
      if (state.categoryName.find((e) => e === categoryName) !== undefined) {
        return state;
      }

      return {
        ...state,
        categoryName: [...state.categoryName, categoryName],
      };
    }
    case "SET_MANUFACTURER_FILTER": {
      const manufacturer = action.manufacturer;
      if (state.manufacturer.find((e) => e === manufacturer) !== undefined) {
        return state;
      }
      return {
        ...state,
        manufacturer: [...state.manufacturer, manufacturer],
      };
    }
    case "DELETE_MANUFACTURER_FILTER": {
      const { manufacturer } = action;
      const filterManufacturer = state.manufacturer.filter(
        (e) => e !== manufacturer
      );

      return {
        ...state,
        manufacturer: filterManufacturer,
      };
    }

    case "DELETE_CATEGORY_FILTER": {
      const { categoryName } = action;
      const filterCategory = state.categoryName.filter(
        (e) => e !== categoryName
      );

      return {
        ...state,
        categoryName: filterCategory,
      };
    }

    default:
      return state;
  }
};

export default filter;
