import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer/combine';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;
export default store;
