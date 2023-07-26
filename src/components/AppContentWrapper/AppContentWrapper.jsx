import styles from './AppContentWrapper.module.scss'

const AppContentWrapper = ({children}) => {
    return (
        <div className={styles.contentWrapper}>
            {children}
        </div>
    )
};

export default AppContentWrapper;