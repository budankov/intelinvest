import { useState } from 'react';
import LogoutButton from 'components/LogoutButton/LogoutButton';

// Icons
import { ReactComponent as ArrowIcon } from '../../images/side-bar/arrow_icon.svg'
import { ReactComponent as BarChartIcon } from '../../images/side-bar/bar_chart_icon.svg'
// import { ReactComponent as Briefcase_cashIcon } from '../../images/side-bar/briefcase_cash_icon.svg'
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

import styles from './SideBar.module.scss';

const SideBar = () => {
    const [open, setOpen] = useState(false)

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
                        <a className={styles.sideBar__navLink} href="intelinvest/app" onClick={() => setOpen(!open)}>
                            <BriefcaseIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Портфель</span>
                        </a>
                    </li>
                    <li className={`${styles.sideBar__navItem} ${open ? styles.sideBar__navItem_active : ''}`}>
                        <a className={styles.sideBar__navLink} href="intelinvest/app" onClick={() => setOpen(!open)}>
                            <PieIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Аналітика</span>
                        </a>
                    </li>
                    <li className={`${styles.sideBar__navItem} ${open ? styles.sideBar__navItem_active : ''}`}>
                        <a className={styles.sideBar__navLink} href="intelinvest/app" onClick={() => setOpen(!open)}>
                            <SunIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Мій 2023</span>
                        </a>
                    </li>
                    <li className={`${styles.sideBar__navItem} ${open ? styles.sideBar__navItem_active : ''}`}>
                        <a className={styles.sideBar__navLink} href="intelinvest/app" onClick={() => setOpen(!open)}>
                            <ListIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Угоди</span>
                        </a>
                    </li>
                    <li className={`${styles.sideBar__navItem} ${open ? styles.sideBar__navItem_active : ''}`}>
                        <a className={styles.sideBar__navLink} href="intelinvest/app" onClick={() => setOpen(!open)}>
                            <HexagonIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Управління портфелеми</span>
                        </a>
                    </li>
                    <li className={`${styles.sideBar__navItem} ${open ? styles.sideBar__navItem_active : ''}`}>
                        <a className={styles.sideBar__navLink} href="intelinvest/app" onClick={() => setOpen(!open)}>
                            <ToolIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Інструменти</span>
                        </a>
                    </li>
                    <li className={`${styles.sideBar__navItem} ${open ? styles.sideBar__navItem_active : ''}`}>
                        <a className={styles.sideBar__navLink} href="intelinvest/app" onClick={() => setOpen(!open)}>
                            <GearIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Налаштування</span>
                        </a>
                    </li>
                    <li className={`${styles.sideBar__navItem} ${open ? styles.sideBar__navItem_active : ''}`}>
                        <a className={styles.sideBar__navLink} href="intelinvest/app" onClick={() => setOpen(!open)}>
                            <BarChartIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Ринок</span>
                        </a>
                    </li>
                    <li className={`${styles.sideBar__navItem} ${open ? styles.sideBar__navItem_active : ''}`}>
                        <a className={styles.sideBar__navLink} href="intelinvest/app" onClick={() => setOpen(!open)}>
                            <CupIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Інвестотека</span>
                        </a>
                    </li>
                    <li className={`${styles.sideBar__navItem} ${open ? styles.sideBar__navItem_active : ''}`}>
                        <a className={styles.sideBar__navLink} href="intelinvest/app" onClick={() => setOpen(!open)}>
                            <HelpIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Допомога</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.sideBar__bottom}>
                <ul className={styles.sideBar__navList}>
                    <li className={styles.sideBar__navItem}>
                        <a className={styles.sideBar__navLink} href="intelinvest/app" onClick={() => setOpen(!open)}>
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
            <button className={styles.sideBar__arrovBtn} onClick={() => setOpen(!open)}>
                <ArrowIcon className={styles.arrovBtn__icon} />
            </button>
        </nav>
    );
};

export default SideBar;
