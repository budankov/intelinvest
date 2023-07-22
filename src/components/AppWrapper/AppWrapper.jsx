import Test from 'components/Test/Test';

import styles from './AppWrapper.module.scss';

const AppWrapper = () => {
    return (
        <main className={styles.appWrapper}>
            <h2>Персональна сторінка</h2>
            <Test />
        </main>
    );
};

export default AppWrapper;
