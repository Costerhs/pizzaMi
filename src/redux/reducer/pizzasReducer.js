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
export const SetItemsPizzasThunk = () => async (dispatch) => {
  let response = await axios.get('http://localhost:3000/db.json');
  dispatch(setItemsPizza(response.data.pizzas));
};
export default pizzasReducer;

// axios.get('http://localhost:3000/db.json').then(({ data }) => {
//   dispatch(setItemsPizza(data.pizzas));
// });
