import { useSelector } from 'react-redux';
import SideBar from 'components/AppSideBar/AppSideBar';
import AppTopBar from 'components/AppTopBar/AppTopBar';
import AppContentWrapper from 'components/AppContentWrapper/AppContentWrapper';
import AppFooter from 'components/AppFooter/AppFooter';

import { Outlet } from 'react-router-dom';

import styles from './AppLayout.module.scss';

const AppLayout = () => {
    const openSideBar = useSelector((state) => state.open);

    return (
        <>
            <SideBar />
            <main className={`${styles.appWrapper} ${openSideBar ? styles.appWrapper__active : ''}`}>
                <AppTopBar />
                <AppContentWrapper>
                    <Outlet />
                </AppContentWrapper>
                <AppFooter />
            </main>
        </>
    );
};

export default AppLayout;
