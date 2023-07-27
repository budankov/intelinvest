import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSideBarOpen } from 'redux/actions';

import LogoutButton from 'components/LogoutButton/LogoutButton';
import appRenderSubMenu from './AppRenderSubMenu';
import AppNavLinkList from './AppNavLinkList';

// Icons
import { ReactComponent as ArrowIcon } from '../../images/side-bar/arrow_icon.svg'
import { ReactComponent as PersonIcon } from '../../images/side-bar/person_icon.svg'
import { ReactComponent as PlusIcon } from '../../images/side-bar/plus_icon.svg'

import styles from './AppSideBar.module.scss';


const AppSideBar = () => {
    const [open, setOpen] = useState(false)
    const [activeSubMenus, setActiveSubMenus] = useState({});

    const dispatch = useDispatch();

    const handleToggleSidebar = () => {
        // Оновлюємо локальний стан компонента SideBar для розуміння відкритий чи закритий Sidebar
        setOpen(!open);
        // Передаємо стан open в Redux-стор за допомогою екшена setSideBarOpen для адаптації шириги AppLayout
        dispatch(setSideBarOpen(!open));
    };

    const handleSubMenuToggle = (title) => {
        if (open === false) {
            setOpen(true);
            dispatch(setSideBarOpen(!open));
        }

        setActiveSubMenus((prevState) => ({
            ...prevState,
            [title]: !prevState[title],
        }));
    };


    return (
        <nav className={`${styles.sideBar} ${open ? styles.active : ''}`}>
            <div className={styles.sideBar__top}>
                <div className={`${styles.sideBar__wrapper} ${open ? styles.hidden : ''}`}>
                    <button className={styles.sideBar__fastBtn} >
                        <PlusIcon className={styles.fastBtn__icon} />
                    </button>
                    <span className={`${styles.fastBtn__title} ${open ? styles.fastBtn__title_hidden : ''}`}>Швидка дія</span>
                </div>
            </div>
            <div className={styles.sideBar__middle}>
                <ul className={styles.sideBar__navList}>
                    {AppNavLinkList.map(({ title, icon, path, submenu }) => (
                        <li key={title} className={`${styles.sideBar__navItem} ${open ? styles.active : ''}`}>
                            {submenu ? (
                                <div className={styles.sideBar__navLink} onClick={() => handleSubMenuToggle(title)}>
                                    {icon}
                                    <span className={`${styles.sideBar__navTitle} ${open ? styles.hidden : ''}`}>
                                        {title}
                                    </span>
                                    <ArrowIcon className={`${styles.sideBar__subMenuIcon} ${open ? styles.hidden : ''} ${activeSubMenus[title] ? styles.reverse : ''}`} />
                                </div>
                            ) : (
                                <NavLink to={path} className={styles.sideBar__navLink}>
                                    {icon}
                                    <span className={`${styles.sideBar__navTitle} ${open ? styles.hidden : ''}`}>{title}</span>
                                </NavLink>
                            )}
                            {submenu && open && activeSubMenus[title] && appRenderSubMenu(submenu)}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.sideBar__bottom}>
                <ul className={styles.sideBarBottom__navList}>
                    <li className={styles.sideBarBottom__navItem}>
                        <a className={styles.sideBarBottom__navLink} href="intelinvest/app">
                            <PersonIcon className={styles.sideBarBottom__navIcon} />
                        </a>
                    </li>
                    <li className={styles.sideBarBottom__navItem}>
                        <LogoutButton />
                    </li>
                </ul>
                <a className={`${styles.subscribeStatus} ${open ? styles.subscribeStatus_hidden : ''}`} href="intelinvest/app">
                    <span className={styles.subscribeStatus__title}>Підписка закінчилася</span>
                    <span className={styles.subscribeStatus__info}>Підписка закінчилася 25.07.2023</span>
                </a>
            </div>
            <button className={`${styles.sideBar__arrovBtn} ${open ? styles.rotate : ''}`} onClick={handleToggleSidebar}>
                <ArrowIcon className={styles.arrovBtn__icon} />
            </button>
        </nav >
    );
};

export default AppSideBar;
