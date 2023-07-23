import styles from './AppFooter.module.scss'

const AppFooter = () => {
    return (
        <footer className={styles.appFooter}>
            <p className={styles.appFooter__copyright}>© Intelligent Investments 2012-2023 версія 3.8.1 збірка 262 від 2023-07-20</p>
        </footer>
    )
}

export default AppFooter;