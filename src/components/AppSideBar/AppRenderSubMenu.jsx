import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import styles from './AppSideBar.module.scss';

const appRenderSubMenu = (submenu) => {
    // const open = useSelector((state) => state.open);


    return (
        <ul className={styles.subMenu}>
            {submenu.map((item) => (
                <li key={item.title}>
                    <NavLink to={item.path} className={styles.sideBar__navLink}>
                        {/* <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}> */}
                        <span className={styles.sideBar__navTitle_hidden}>
                            {item.title}
                        </span>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default appRenderSubMenu;