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

const AppNavLinkList = [
    {
        title: 'Інструменти',
        path: '',
        icon: <ToolIcon className={styles.sideBar__navIcon} />,
        submenu: [
            { title: 'Підменю 1', path: 'submenu1' },
            { title: 'Підменю 2', path: 'submenu2' },
            // Додайте інші елементи підменю, якщо необхідно
        ],
    },
    {
        title: 'Налаштування',
        path: 'settings',
        icon: <GearIcon className={styles.sideBar__navIcon} />,
        submenu: [
            { title: 'Підменю 1', path: 'submenu1' },
            { title: 'Підменю 2', path: 'submenu2' },
            // Додайте інші елементи підменю, якщо необхідно
        ],
    },
    {
        title: 'Ринок',
        path: 'market',
        icon: <BarChartIcon className={styles.sideBar__navIcon} />,
        submenu: [
            { title: 'Підменю 1', path: 'submenu1' },
            { title: 'Підменю 2', path: 'submenu2' },
            // Додайте інші елементи підменю, якщо необхідно
        ],
    },
    {
        title: 'Допомога',
        path: 'help',
        icon: <HelpIcon className={styles.sideBar__navIcon} />,
    },
];

export default AppNavLinkList;