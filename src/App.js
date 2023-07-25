import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import Loader from 'shared/components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const AppPage = lazy(() => import('./pages/AppPage'));
const Portfolio = lazy(() => import('./components/Portfolio/Portfolio'));
const Help = lazy(() => import('./components/Help/Help'));


const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/app" element={<AppPage />}>
            <Route index element={<Portfolio />} />
            <Route path="portfolio" element={<Portfolio />} />
            {/* <Route path="analytics/dashboard" element={<AnalyticsDashboard />} />
            <Route path="analytics/reports" element={<AnalyticsReports />} />
            <Route path="my-results/dashboard" element={<MyResultsDashboard />} />
            <Route path="trades" element={<Trades />} />
            <Route path="portfolio-management" element={<PortfolioManagement />} />
            <Route path="calculations" element={<Calculations />} />
            <Route path="events" element={<Events />} />
            <Route path="rebalancing" element={<Rebalancing />} />
            <Route path="settings/import" element={<SettingsImport />} />
            <Route path="settings/notifications" element={<SettingsNotifications />} />
            <Route path="quotes/stock" element={<QuotesStock />} />
            <Route path="quotes/share-info/:id" element={<QuotesStock />} />
            <Route path="investoteka" element={<Investoteka />} /> */}
            <Route path="help" element={<Help />} />
          </Route>
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense >
  );
};

export default App;