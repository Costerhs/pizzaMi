import { combineReducers, createStore } from 'redux';

import filterReducer from './filterReducer';
import pizzasReducer from './pizzasReducer';

const reducer = combineReducers({
  filter: filterReducer,
  pizzas: pizzasReducer,
});

export default reducer;
