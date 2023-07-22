import { useDispatch } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
// import { useAuth } from 'shared/hooks/useAuth';
import { removeUser } from 'redux/auth/userSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ReactComponent as LogoutIcon } from '../../images/side-bar/logout_icon.svg'

import styles from './LogoutButton.module.scss';

const LogoutButton = () => {
    const dispatch = useDispatch();
    // const { email } = useAuth();

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
        // <button onClick={handleLogout}>Вийти з {email}</button>
        <button className={styles.logOutBtn} onClick={handleLogout}>
            <LogoutIcon className={styles.logOutBtn__icon} />
        </button>
    );
};

export default LogoutButton;
