import { ReactComponent as BriefcaseСashIcon } from '../../images/side-bar/briefcase_cash_icon.svg'

import styles from './AppTopBar.module.scss'

const AppTopBar = () => {
    return (
        <div className={styles.appTopBar}>
            <div className={styles.appTopBar__leftPart}>
                <div className={styles.portfolioSelect}>
                    <BriefcaseСashIcon className={styles.portfolioSelect__icon} />
                </div>
                <div className={styles.portfolioSelectNameBlock}>
                    <p className={styles.portfolioSelectNameBlock__title}>Портфель за замовчування</p>
                    <p className={styles.portfolioSelectNameBlock__text}>Фондовий</p>
                </div>
            </div>
            <div className={styles.appTopBar__rightPart}></div>
        </div>
    )
}

export default AppTopBar;