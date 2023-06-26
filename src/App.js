import { lazy, Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar/AppBar';
import Loader from 'shared/components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />{' '}
      </Routes>
      <Outlet />
    </Suspense>
  );
};

export default App;