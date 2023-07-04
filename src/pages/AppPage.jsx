import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../shared/hooks/useAuth';
import { removeUser } from 'redux/auth/userSlice';

const AppPage = () => {
  const dispatch = useDispatch();

  const { isAuth, email } = useAuth();
  console.log('isAuth', isAuth);

  return isAuth ? (
    <div className="container">
      <h2>Персональна сторінка</h2>
      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default AppPage;
