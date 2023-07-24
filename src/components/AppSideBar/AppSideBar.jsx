import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSideBarOpen } from 'redux/actions';

import LogoutButton from 'components/LogoutButton/LogoutButton';

// Icons
import { ReactComponent as ArrowIcon } from '../../images/side-bar/arrow_icon.svg'
import { ReactComponent as BarChartIcon } from '../../images/side-bar/bar_chart_icon.svg'
import { ReactComponent as BriefcaseIcon } from '../../images/side-bar/briefcase_icon.svg'
import { ReactComponent as CupIcon } from '../../images/side-bar/cup_icon.svg'
import { ReactComponent as GearIcon } from '../../images/side-bar/gear_icon.svg'
import { ReactComponent as HelpIcon } from '../../images/side-bar/help_icon.svg'
import { ReactComponent as HexagonIcon } from '../../images/side-bar/hexagon_icon.svg'
import { ReactComponent as ListIcon } from '../../images/side-bar/list_icon.svg'
import { ReactComponent as PersonIcon } from '../../images/side-bar/person_icon.svg'
import { ReactComponent as PieIcon } from '../../images/side-bar/pie_icon.svg'
import { ReactComponent as PlusIcon } from '../../images/side-bar/plus_icon.svg'
import { ReactComponent as SunIcon } from '../../images/side-bar/sun_icon.svg'
import { ReactComponent as ToolIcon } from '../../images/side-bar/tool_icon.svg'

import styles from './AppSideBar.module.scss';

const AppSideBar = () => {
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch();

    const handleToggleSidebar = () => {
        // Оновлюємо локальний стан компонента SideBar для розуміння відкритий чи закритий Sidebar
        setOpen(!open);

        // Передаємо стан open в Redux-стор за допомогою екшена setSideBarOpen для адаптації шириги AppLayout
        dispatch(setSideBarOpen(!open));
    };

    return (
        <nav className={`${styles.sideBar} ${open ? styles.sideBar__active : ''}`}>
            <div className={styles.sideBar__top}>
                <div className={`${styles.sideBar__wrapper} ${open ? styles.sideBar__wrapper_hidden : ''}`}>
                    <button className={styles.sideBar__fastBtn} >
                        <PlusIcon className={styles.fastBtn__icon} />
                    </button>
                    <span className={`${styles.fastBtn__title} ${open ? styles.fastBtn__title_hidden : ''}`}>Швидка дія</span>
                </div>
            </div>
            <div className={styles.sideBar__middle}>
                <ul className={styles.sideBar__navList}>
                    <li className={`${styles.sideBar__navItem} ${open ? styles.sideBar__navItem_active : ''}`}>
                        <NavLink to="portfolio" className={styles.sideBar__navLink}>
                            <BriefcaseIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Портфель</span>
                        </NavLink>
                    </li>
                    <li className={`${styles.sideBar__navItem} ${open ? styles.sideBar__navItem_active : ''}`}>
                        <NavLink to="portfolio" className={styles.sideBar__navLink}>
                            <PieIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Аналітика</span>
                        </NavLink>
                    </li>
                    <li className={`${styles.sideBar__navItem} ${open ? styles.sideBar__navItem_active : ''}`}>
                        <NavLink to="portfolio" className={styles.sideBar__navLink}>
                            <SunIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Мій 2023</span>
                        </NavLink>
                    </li>
                    <li className={`${styles.sideBar__navItem} ${open ? styles.sideBar__navItem_active : ''}`}>
                        <NavLink to="portfolio" className={styles.sideBar__navLink}>
                            <ListIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Угоди</span>
                        </NavLink>
                    </li>
                    <li className={`${styles.sideBar__navItem} ${open ? styles.sideBar__navItem_active : ''}`}>
                        <NavLink to="portfolio" className={styles.sideBar__navLink}>
                            <HexagonIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Управління портфелеми</span>
                        </NavLink>
                    </li>
                    <li className={`${styles.sideBar__navItem} ${open ? styles.sideBar__navItem_active : ''}`}>
                        <NavLink to="portfolio" className={styles.sideBar__navLink}>
                            <ToolIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Інструменти</span>
                        </NavLink>
                    </li>
                    <li className={`${styles.sideBar__navItem} ${open ? styles.sideBar__navItem_active : ''}`}>
                        <NavLink to="portfolio" className={styles.sideBar__navLink}>
                            <GearIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Налаштування</span>
                        </NavLink>
                    </li>
                    <li className={`${styles.sideBar__navItem} ${open ? styles.sideBar__navItem_active : ''}`}>
                        <NavLink to="portfolio" className={styles.sideBar__navLink}>
                            <BarChartIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Ринок</span>
                        </NavLink>
                    </li>
                    <li className={`${styles.sideBar__navItem} ${open ? styles.sideBar__navItem_active : ''}`}>
                        <NavLink to="portfolio" className={styles.sideBar__navLink}>
                            <CupIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Інвестотека</span>
                        </NavLink>
                    </li>
                    <li className={`${styles.sideBar__navItem} ${open ? styles.sideBar__navItem_active : ''}`}>
                        <NavLink to="help" className={styles.sideBar__navLink}>
                            <HelpIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Допомога</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={styles.sideBar__bottom}>
                <ul className={styles.sideBar__navList}>
                    <li className={styles.sideBar__navItem}>
                        <a className={styles.sideBar__navLink} href="intelinvest/app">
                            <PersonIcon className={styles.sideBar__navIcon} />
                        </a>
                    </li>
                    <li className={styles.sideBar__navItem}>
                        <LogoutButton />
                    </li>
                </ul>
                <a className={`${styles.subscribeStatus} ${open ? styles.subscribeStatus_hidden : ''}`} href="intelinvest/app">
                    <span className={styles.subscribeStatus__title}>Підписка закінчилася</span>
                    <span className={styles.subscribeStatus__info}>Підписка закінчилася 25.07.2023</span>
                </a>
            </div>
            <button className={styles.sideBar__arrovBtn} onClick={handleToggleSidebar}>
                <ArrowIcon className={styles.arrovBtn__icon} />
            </button>
        </nav>
    );
};

export default AppSideBar;
