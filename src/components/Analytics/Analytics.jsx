import { Link, Outlet, useLocation } from "react-router-dom";

import styles from './Analytics.module.scss';

const Analytics = () => {
    const location = useLocation();
    const from = location.state?.from || '/';

    return (
        <div className={styles.analytics__container}>
            <h2 className={styles.analytics__title}>Аналітика</h2>
            <ul className={styles.analytics__navList}>
                <li className={styles.analytics__navItem}>
                    <Link
                        className={`${styles.analytics__navLink} ${location.pathname === '/app/analytics/dashboard' ? styles.activeNavLink : ''
                            }`}
                        to={`dashboard`}
                        state={{ from }}
                    >
                        Дашборд
                    </Link>
                </li>
                <li className={styles.analytics__navItem}>
                    <Link
                        className={`${styles.analytics__navLink} ${location.pathname === '/app/analytics/reports' ? styles.activeNavLink : ''
                            }`}
                        to={`reports`}
                        state={{ from }}
                    >
                        Звіти
                    </Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};

export default Analytics;
