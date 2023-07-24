import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';
import Loader from 'shared/components/Loader/Loader';

const PrivateRoute = () => {
  const { isAuth, token } = useAuth();
  // console.log(isAuth, token);

  if (!isAuth && token) {
    return <Loader />;
  }

  if (!isAuth && !token) {
    return <Navigate to="/app" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
