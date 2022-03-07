const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const ADD_PIZZA_BASKET = 'ADD_PIZZA_BASKET';
const initialize = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const basketReducer = (state = initialize, action) => {
  switch (action.type) {
    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.price,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.count,
      };
    case ADD_PIZZA_BASKET: {
      const newItems = {
        ...state.items,
        [action.obj.id]: !state.items[action.obj.id]
          ? [action.obj]
          : [...state.items[action.obj.id], action.obj],
      };

      const allPizzas = [].concat.apply([], Object.values(newItems));
      const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };
    }

    default:
      return state;
  }
};

export const setTotalPrice = (price) => ({
  type: SET_TOTAL_PRICE,
  price,
});
export const setTotalCount = (count) => ({
  type: SET_TOTAL_COUNT,
  count,
});
export const addPizzaBasket = (obj) => ({ type: ADD_PIZZA_BASKET, obj });

export default basketReducer;
