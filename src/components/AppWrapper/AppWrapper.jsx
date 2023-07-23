import { useSelector } from 'react-redux';
import TopBar from 'components/TopBar/TopBar';
import Test from 'components/Test/Test';
import AppFooter from 'components/AppFooter/AppFooter';

import styles from './AppWrapper.module.scss';

const AppWrapper = () => {
    const openFromReduxStore = useSelector((state) => state.open);
    console.log(openFromReduxStore)

    return (
        <main className={`${styles.appWrapper} ${openFromReduxStore ? styles.appWrapper__active : ''}`}>
            <TopBar />
            <Test />
            <AppFooter />
        </main>
    );
};

export default AppWrapper;
