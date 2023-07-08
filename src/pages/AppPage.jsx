import { useDispatch } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { useAuth } from '../shared/hooks/useAuth';
import { removeUser } from 'redux/auth/userSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const AppPage = () => {
  const dispatch = useDispatch();
  const { email } = useAuth();

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      dispatch(removeUser());
      Notify.info('Ви успішно розлогіненні');
    } catch (error) {
      Notify.failure('Помилка при розлогіненні користувача');
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
