import Header from './components/Header';
import Home from './pages/Home';
import Basket from './pages/Basket';

import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { SetItemsPizzasThunk } from './redux/reducer/pizzasReducer';
function App({ SetItemsPizzasThunk, pizzas }) {
  useEffect(async () => {
    let response = await axios.get('http://localhost:3000/db.json');
    console.log(response.data.pizzas);
    SetItemsPizzasThunk();
  }, []);

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={pizzas} />} />
          <Route exact path="/basket" element={<Basket />} />
        </Routes>
      </div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas.items,
  };
};
export default connect(mapStateToProps, { SetItemsPizzasThunk })(App);
