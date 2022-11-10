import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import SingleProduct from './components/SingleProduct';
import { getAllProduct } from './feature/productSlice';
import Home from './pages/Home/Home';

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
          <Route path="product/:id" element={<SingleProduct />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
