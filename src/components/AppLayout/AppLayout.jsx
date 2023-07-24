import { useSelector } from 'react-redux';
import SideBar from 'components/AppSideBar/AppSideBar';
import AppTopBar from 'components/AppTopBar/AppTopBar';
import AppFooter from 'components/AppFooter/AppFooter';

import { Outlet } from 'react-router-dom';

import styles from './AppLayout.module.scss';

const AppLayout = () => {
    const openFromReduxStore = useSelector((state) => state.open);

    return (
        <>
            <SideBar />
            <main className={`${styles.appWrapper} ${openFromReduxStore ? styles.appWrapper__active : ''}`}>
                <AppTopBar />
                <Outlet />
                <AppFooter />
            </main>
        </>
    );
};

export default AppLayout;
