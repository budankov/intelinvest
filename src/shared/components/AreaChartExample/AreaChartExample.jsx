import React from 'react';
import {
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts';

import styles from './AreaChartExample.module.scss'

export default function AreaChartExample({ data }) {

    const maxPrice = Math.ceil(Math.max(...data.map(item => parseFloat(item.price))));

    return (
        <div>
            <h3 className={styles.title}>Динаміка по активам</h3>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
                        </linearGradient>
                    </defs>

                    <Area dataKey="price" stroke="#2451B7" fill="url(#color)" />

                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        dy={10}
                    />

                    <YAxis
                        dataKey="price"
                        axisLine={false}
                        tickLine={false}
                        tickCount={8}
                        domain={[0, maxPrice]}
                        tickFormatter={(number) => `$${Math.ceil(number)}`}
                        dx={-10}
                    />

                    <Tooltip content={<CustomTooltip />} />

                    <CartesianGrid opacity={0.1} vertical={false} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

function CustomTooltip({ active, payload, label }) {
    if (active) {
        return (
            <div className="tooltip">
                <h4>{label}</h4>
                <p>${payload[0].value}</p>
            </div>
        );
    }
    return null;
}
