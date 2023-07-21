import { useDispatch } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { useAuth } from 'shared/hooks/useAuth';
import { removeUser } from 'redux/auth/userSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Test from 'components/Test/Test';

import style from './AppWrapper.module.scss';

const AppWrapper = () => {

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
        <main className={style.appWrapper}>
            <h2>Персональна сторінка</h2>
            <button onClick={handleLogout}>Вийти з {email}</button>
            <Test />
        </main>
    );
};

export default AppWrapper;
