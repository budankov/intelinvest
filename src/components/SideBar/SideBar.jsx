import { useState } from 'react';

// Icons
import { ReactComponent as ArrowIcon } from '../../images/side-bar/arrow_icon.svg'
import { ReactComponent as Bar_chartIcon } from '../../images/side-bar/bar_chart_icon.svg'
import { ReactComponent as Briefcase_cashIcon } from '../../images/side-bar/briefcase_cash_icon.svg'
import { ReactComponent as BriefcaseIcon } from '../../images/side-bar/search.svg'
import { ReactComponent as CupIcon } from '../../images/side-bar/cup_icon.svg'
import { ReactComponent as GearIcon } from '../../images/side-bar/gear_icon.svg'
import { ReactComponent as HelpIcon } from '../../images/side-bar/help_icon.svg'
import { ReactComponent as HexagonIcon } from '../../images/side-bar/hexagon_icon.svg'
import { ReactComponent as ListIcon } from '../../images/side-bar/list_icon.svg'
import { ReactComponent as LogoutIcon } from '../../images/side-bar/logout_icon.svg'
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
                <button className={styles.sideBar__fastBtn}>
                    <PlusIcon className={styles.fastBtn__img} onClick={() => setOpen(!open)} />
                    <span className={`${styles.fastBtn__title} ${open ? styles.fastBtn__title_hidden : ''}`}>Швидка дія</span>

                </button>
            </div>
            <div className={styles.sideBar__middle}>
                <ul className={styles.sideBar__navList}>
                    <li className={styles.sideBar__navItem}>
                        <a className={styles.sideBar__navLink} href="intelinvest/app" onClick={() => setOpen(!open)}>
                            <BriefcaseIcon className={styles.sideBar__navIcon} />
                            <span className={`${styles.sideBar__navTitle} ${open ? styles.sideBar__navTitle_hidden : ''}`}>Портфель</span>
                        </a>
                    </li>
                </ul>
            </div>
            <button className={styles.sideBar__arrovBtn}>
                <ArrowIcon className={styles.arrovBtn__icon} onClick={() => setOpen(!open)} />
            </button>
        </nav>
    );
};

export default SideBar;
