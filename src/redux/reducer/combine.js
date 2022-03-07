import { combineReducers, createStore } from 'redux';
import basket from './cartReducer';

import filter from './filterReducer';
import pizzas from './pizzasReducer';

const reducer = combineReducers({
  filter,
  pizzas,
  basket,
});

export default reducer;
