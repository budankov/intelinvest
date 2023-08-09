import styles from './ChartWrapper.module.scss'

const ChartWrapper = ({ children }) => {
    return (
        <div className={styles.chartWrapper__container}>{children}</div>
    )
};

export default ChartWrapper;