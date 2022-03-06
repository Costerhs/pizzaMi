import Header from './components/Header';
import Home from './pages/Home';
import Basket from './pages/Basket';

import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SetItemsPizzasThunk } from './redux/reducer/pizzasReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SetItemsPizzasThunk());
  }, []);

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/basket" element={<Basket />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
