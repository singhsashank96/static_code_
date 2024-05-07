import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

  const Index = lazy(() => import('./components/Index'));
  const Checkout = lazy(() => import('./components/Checkout'));
  const Finalpage = lazy(() => import('./components/Finalpage'));

  function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/finalpage' element={<Finalpage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div >
  );
}

export default App;
