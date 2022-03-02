import Header from './components/Header';
import Home from './pages/Home';
import Basket from './pages/Basket';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
