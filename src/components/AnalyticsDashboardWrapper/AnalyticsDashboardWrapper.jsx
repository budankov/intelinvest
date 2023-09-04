import AnalyticsDashboard from "components/AnalyticsDashboard/AnalyticsDashboard";
import ChartWrapper from "components/ChartWrapper/ChartWrapper";
import PieChartExample from "shared/components/PieChartExample/PieChartExample";
import AreaChartExample from "shared/components/AreaChartExample/AreaChartExample";
import BarChartExample from "shared/components/BarChartExample/BarChartExample";

import { useSelector } from 'react-redux';

import styles from './AnalyticsDashboardWrapper.module.scss'

const AnalyticsDashboardWrapper = () => {
    const stocks = useSelector(state => state.stocks.stocks);

    return (
        <div className={styles.dashboardWWrapper}>
            <AnalyticsDashboard />
            <div className={styles.chartsWrapper}>
                <ChartWrapper>
                    <PieChartExample />
                </ChartWrapper>
                <ChartWrapper>
                    <BarChartExample data={stocks} />
                </ChartWrapper>
            </div>
            <ChartWrapper>
                <AreaChartExample data={stocks} />
            </ChartWrapper>
        </div>
    )
}

export default AnalyticsDashboardWrapper;