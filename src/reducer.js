export const initialState = {
  basket: [
    {
      id: "12321341",
      title:
        "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
      price: 11.96,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg",
    },
  ],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      return { state };

    default:
      return state;
  }
};

export default reducer;
