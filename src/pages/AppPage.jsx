import { useDispatch } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { useAuth } from '../shared/hooks/useAuth';
import { removeUser } from 'redux/auth/userSlice';

const AppPage = () => {
  const dispatch = useDispatch();
  const { email } = useAuth();

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      dispatch(removeUser());
    } catch (error) {
      console.log('Помилка при розлогіненні користувача', error);
    }
  };

  return (
    <div className="container">
      <h2>Персональна сторінка</h2>
      <button onClick={handleLogout}>Вийти з {email}</button>
    </div>
  );
};

export default AppPage;
