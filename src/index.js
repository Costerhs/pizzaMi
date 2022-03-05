import React from 'react';
import ReactDOM from 'react-dom';

import './scss/app.scss';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// console.log(store.getState());

// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'INCREMENT' });
// console.log(store.getState());
// store.dispatch({ type: 'DECREMENT' });
// console.log(store.getState());
