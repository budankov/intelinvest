import Dashboard from 'components/Dashboard/Dashboard';
import Stocks from 'components/Stocks/Stocks';

import styles from './Portfolio.module.scss'

const Portfolio = () => {

    return (
        <div className={styles.testWrapper}>
            <Dashboard />
            <Stocks />
        </div>
    );
}

export default Portfolio;