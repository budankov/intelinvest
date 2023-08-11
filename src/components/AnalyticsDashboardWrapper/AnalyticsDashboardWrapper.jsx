import AnalyticsDashboard from "components/AnalyticsDashboard/AnalyticsDashboard";
import ChartWrapper from "components/ChartWrapper/ChartWrapper";
import PieChartExample from "shared/components/PieChartExample/PieChartExample";

import styles from './AnalyticsDashboardWrapper.module.scss'

const AnalyticsDashboardWrapper = () => {
    return (
        <>
            <AnalyticsDashboard />
            <div className={styles.chartsWrapper}>
                <ChartWrapper>
                    <h3 className={styles.title}>Склад портфелю по бумагам</h3>
                    <PieChartExample />
                </ChartWrapper>
                <ChartWrapper>
                    <h3 className={styles.title}>Склад портфелю по бумагам</h3>
                    <PieChartExample />
                </ChartWrapper>
            </div>

        </>
    )
}

export default AnalyticsDashboardWrapper;