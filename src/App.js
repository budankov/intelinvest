import { lazy, Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar/AppBar';
import Loader from 'shared/components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
      </Routes>
      <Outlet />
    </Suspense>
  );
};

export default App;
