import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
        <Home />
      </>
    </div>
  );
}

export default App;
