import ChartWrapper from "components/ChartWrapper/ChartWrapper";
import PieChartExample from "shared/components/PieChartExample/PieChartExample";

import styles from './AnalyticsDashboard.module.scss'

const AnalyticsDashboard = () => {
    return (
        <ChartWrapper>
            <h3 className={styles.title}>Склад портфелю по бумагам</h3>
            <PieChartExample />
        </ChartWrapper>
    )
}

export default AnalyticsDashboard;