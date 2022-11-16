import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getAllProduct } from './feature/productSlice';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail.js/ProductDetail';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <>
        <Routes>
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
