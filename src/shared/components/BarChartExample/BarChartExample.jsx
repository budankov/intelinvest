import {
    BarChart,
    XAxis,
    YAxis,
    Bar,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

import styles from './BarChartExample.module.scss'

const BarChartExample = ({ data }) => {
    return (
        <div>
            <h3 className={styles.title}>Склад портфелю по бумагам</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="quantity" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartExample;