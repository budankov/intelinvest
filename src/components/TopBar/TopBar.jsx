import { ReactComponent as BriefcaseСashIcon } from '../../images/side-bar/briefcase_cash_icon.svg'

import styles from './TopBar.module.scss'

const TopBar = () => {
    return (
        <div className={styles.topBar}>
            <div className={styles.topBar__leftPart}>
                <div className={styles.portfolioSelect}>
                    <BriefcaseСashIcon className={styles.portfolioSelect__icon} />
                </div>
            </div>
            <div className={styles.topBar__rightPart}></div>
        </div>
    )
}

export default TopBar;