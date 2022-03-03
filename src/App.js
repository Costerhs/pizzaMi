import Header from './components/Header';
import Home from './pages/Home';
import Basket from './pages/Basket';

import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pizzas, setPizzaItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzaItems(data.pizzas);
    });
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

export default App;
