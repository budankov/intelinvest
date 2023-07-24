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
            <Route path="help" element={<Help />} />
          </Route>
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense >
  );
};

export default App;



// {/* <Route element={<PrivateRoute />}> */ }
// {/* <Route path="/app" element={<AppPage />} /> */ }
// {/* <Route path="/app/portfolio" element={<Portfolio />} /> */ }
// {/* <Route path="/app/analytics/dashboard" element={<AnalyticsDashboard />} /> */ }
// {/* <Route path="/app/analytics/reports" element={<AnalyticsReports />} /> */ }
// {/* <Route path="/app/my-results/dashboard" element={<MyResultsDashboard />} /> */ }
// {/* <Route path="/app/trades" element={<Trades/>} /> */ }
// {/* <Route path="/app/portfolio-management" element={<PortfolioManagement/>} /> */ }
// {/* <Route path="/app/calculations" element={<Calculations/>} /> */ }
// {/* <Route path="/app/events" element={<Events/>} /> */ }
// {/* <Route path="/app/rebalancing" element={<Rebalancing/>} /> */ }
// {/* <Route path="/app/settings/import" element={<SettingsImport/>} /> */ }
// {/* <Route path="/app/settings/notifications" element={<SettingsNotifications/>} /> */ }
// {/* <Route path="/app/quotes/stock" element={<QuotesStock/>} /> */ }
// {/* <Route path="/app/quotes/share-info/:id" element={<QuotesStock/>} /> */ }
// {/* <Route path="/app/investoteka" element={<Investoteka/>} /> */ }
// {/* <Route path="/app/help" element={<Help/>} /> */ }