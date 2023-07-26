// Icons
import { ReactComponent as BarChartIcon } from '../../images/side-bar/bar_chart_icon.svg'
import { ReactComponent as BriefcaseIcon } from '../../images/side-bar/briefcase_icon.svg'
import { ReactComponent as CupIcon } from '../../images/side-bar/cup_icon.svg'
import { ReactComponent as GearIcon } from '../../images/side-bar/gear_icon.svg'
import { ReactComponent as HelpIcon } from '../../images/side-bar/help_icon.svg'
import { ReactComponent as HexagonIcon } from '../../images/side-bar/hexagon_icon.svg'
import { ReactComponent as ListIcon } from '../../images/side-bar/list_icon.svg'
import { ReactComponent as PieIcon } from '../../images/side-bar/pie_icon.svg'
import { ReactComponent as SunIcon } from '../../images/side-bar/sun_icon.svg'
import { ReactComponent as ToolIcon } from '../../images/side-bar/tool_icon.svg'

import styles from './AppSideBar.module.scss';

const AppNavLinkList = [
    {
        title: 'Портфель',
        path: 'portfolio',
        icon: <BriefcaseIcon className={styles.sideBar__navIcon} />,
    },
    {
        title: 'Аналітика',
        path: 'analytics/dashboard',
        icon: <PieIcon className={styles.sideBar__navIcon} />,
    },
    {
        title: 'Мій 2023',
        path: 'my-results/dashboard',
        icon: <SunIcon className={styles.sideBar__navIcon} />,
    },
    {
        title: 'Угоди',
        path: 'trades',
        icon: <ListIcon className={styles.sideBar__navIcon} />,
    },
    {
        title: 'Управління портфелеми',
        path: 'portfolio-management',
        icon: <HexagonIcon className={styles.sideBar__navIcon} />,
    },
    {
        title: 'Інструменти',
        path: '',
        icon: <ToolIcon className={styles.sideBar__navIcon} />,
        submenu: [
            { title: 'Начислення', path: 'calculations' },
            { title: 'Події', path: 'events' },
            { title: 'Ребалансування', path: 'rebalancing' },
        ],
    },
    {
        title: 'Налаштування',
        path: '',
        icon: <GearIcon className={styles.sideBar__navIcon} />,
        submenu: [
            { title: 'Імпорт угод', path: 'import' },
            { title: 'Повідомлення', path: 'notifications' },
            { title: 'Тарифи', path: 'tariffs' },
            { title: 'Управління тегами', path: 'tags' },
            { title: 'Партнерська програма', path: 'promo-codes' },
            { title: 'Профіль', path: 'profile' },
        ],
    },
    {
        title: 'Ринок',
        path: '',
        icon: <BarChartIcon className={styles.sideBar__navIcon} />,
        submenu: [
            { title: 'Котирування', path: 'qoutes' },
            { title: 'Пошук паперів', path: 'share-info' },
        ],
    },
    {
        title: 'Інвестотека',
        path: 'investoteka',
        icon: <CupIcon className={styles.sideBar__navIcon} />,
    },
    {
        title: 'Допомога',
        path: 'help',
        icon: <HelpIcon className={styles.sideBar__navIcon} />,
    },
];

export default AppNavLinkList;