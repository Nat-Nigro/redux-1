const initialState = {
  favourite: {
    list: [],
  },
};

const firstReduce = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: [...state.favourite.list, action.payload],
        },
      };
    case "DELETE_ITEM":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: state.favourite.list.filter((fav) => fav !== action.payload),
        },
      };
    default:
      return state;
  }
};
export default firstReduce;
