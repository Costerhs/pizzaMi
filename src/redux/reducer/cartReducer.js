const ADD_PIZZA_BASKET = 'ADD_PIZZA_BASKET';
const CLEAR_BASKET = 'CLEAR_BASKET';
const MINUS_BASKET_ITEM = 'MINUS_BASKET_ITEM';
const PLUS_BASKET_ITEM = 'PLUS_BASKET_ITEM';
const REMOVE_BASKET_ITEM = 'REMOVE_BASKET_ITEM';
const initialize = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};
const getSumPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const basketReducer = (state = initialize, action) => {
  switch (action.type) {
    case ADD_PIZZA_BASKET: {
      const currentPizzaItems = !state.items[action.obj.id]
        ? [action.obj]
        : [...state.items[action.obj.id].items, action.obj];
      const newItems = {
        ...state.items,
        [action.obj.id]: {
          items: currentPizzaItems,
          totalPrice: getSumPrice(currentPizzaItems),
        },
      };
      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case CLEAR_BASKET:
      return {
        ...state,
        totalCount: 0,
        totalPrice: 0,
        items: [],
      };

    case REMOVE_BASKET_ITEM: {
      const newItems = {
        ...state.items,
      };

      const currentTotalPrice = newItems[action.payload].totalPrice;

      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case PLUS_BASKET_ITEM: {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getSumPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case MINUS_BASKET_ITEM: {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getSumPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    default:
      return state;
  }
};

export const removeBasketItem = (id) => ({
  type: REMOVE_BASKET_ITEM,
  payload: id,
});

export const plusBasketItem = (id) => ({
  type: PLUS_BASKET_ITEM,
  payload: id,
});

export const minusBasketItem = (id) => ({
  type: MINUS_BASKET_ITEM,
  payload: id,
});

export const addPizzaBasket = (obj) => ({ type: ADD_PIZZA_BASKET, obj });
export const clearAllCart = () => ({ type: CLEAR_BASKET });
export default basketReducer;
