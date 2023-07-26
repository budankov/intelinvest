import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import Loader from 'shared/components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const AppPage = lazy(() => import('./pages/AppPage'));
const Portfolio = lazy(() => import('./components/Portfolio/Portfolio'));
const Help = lazy(() => import('./components/Help/Help'));
const Test = lazy(() => import('./components/Test/Test'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/app" element={<AppPage />}>
            <Route index element={<Portfolio />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="analytics/dashboard" element={<Test />} />
            <Route path="analytics/reports" element={<Test />} />
            <Route path="my-results/dashboard" element={<Test />} />
            <Route path="trades" element={<Test />} />
            <Route path="portfolio-management" element={<Test />} />
            <Route path="calculations" element={<Test />} />
            <Route path="events" element={<Test />} />
            <Route path="rebalancing" element={<Test />} />
            <Route path="settings/import" element={<Test />} />
            <Route path="settings/import" element={<Test />} />
            <Route path="notifications" element={<Test />} />
            <Route path="quotes/stock" element={<Test />} />
            <Route path="quotes/share-info/:id" element={<Test />} />
            <Route path="investoteka" element={<Test />} />
            <Route path="help" element={<Help />} />
          </Route>
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense >
  );
};

export default App;