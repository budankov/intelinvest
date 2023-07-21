import AppWrapper from 'components/AppWrapper/AppWrapper';
import SideBar from 'components/SideBar/SideBar';

import styles from './AppPage.module.scss'

const AppPage = () => {
  return (
    <div className={styles.appPage}>
      <SideBar />
      <AppWrapper />
    </div>
  );
};

export default AppPage;
