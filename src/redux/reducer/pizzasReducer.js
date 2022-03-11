import axios from 'axios';

const SET_PIZZA_ITEMS = 'SET_PIZZA_ITEMS';
const SET_IS_LOAD = 'SET_IS_LOAD';
const initialize = {
  items: [],
  isLoaded: false,
};

const pizzasReducer = (state = initialize, action) => {
  switch (action.type) {
    case SET_PIZZA_ITEMS:
      return {
        ...state,
        items: action.data,
      };
    case SET_IS_LOAD:
      return {
        ...state,
        isLoaded: action.load,
      };
    default:
      return state;
  }
};

//action
export const setItemsPizza = (data) => ({ type: SET_PIZZA_ITEMS, data });
export const setLoad = (load) => ({ type: SET_IS_LOAD, load });
//thunk
export const SetItemsPizzasThunk = (sortBy, category) => async (dispatch) => {
  dispatch(setLoad(true));
  let response = await axios.get(
    `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
      sortBy.order
    }`,
  );

  dispatch(setItemsPizza(response.data));
  dispatch(setLoad(false));
};
export default pizzasReducer;
