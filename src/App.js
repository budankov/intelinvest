import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import Loader from 'shared/components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const AppPage = lazy(() => import('./pages/AppPage'));
const Portfolio = lazy(() => import('./components/Portfolio/Portfolio'));
const Analytics = lazy(() => import('./components/Analytics/Analytics'));
const AnalyticsDashboardWrapper = lazy(() => import('./components/AnalyticsDashboardWrapper/AnalyticsDashboardWrapper'));
const Reports = lazy(() => import('./components/Reports/Reports'));
const Help = lazy(() => import('./components/Help/Help'));
const Test = lazy(() => import('./components/Test/Test'));
const Tariffs = lazy(() => import('./components/Tariffs/Tariffs'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/app" element={<AppPage />}>
            <Route index element={<Portfolio />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="analytics" element={<Analytics />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<AnalyticsDashboardWrapper />} />
              <Route path="reports" element={<Reports />} />
            </Route>
            <Route path="my-results/dashboard" element={<Test />} />
            <Route path="trades" element={<Test />} />
            <Route path="portfolio-management" element={<Test />} />
            <Route path="calculations" element={<Test />} />
            <Route path="events" element={<Test />} />
            <Route path="rebalancing" element={<Test />} />
            <Route path="settings" element={<Tariffs />}>
              <Route index element={<Navigate to="tariffs" />} />
              <Route path="tariffs" element={<Tariffs />} />
              <Route path="import" element={<Test />} />
            </Route>
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