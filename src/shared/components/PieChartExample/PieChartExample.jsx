import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from 'redux/stocks/opetations';
import { PieChart, Pie, Cell, ResponsiveContainer, Sector, Legend } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeSet2 } from 'd3-scale-chromatic';

import styles from './PieChartExample.module.scss'

const PieChartExample = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStocks());
    }, [dispatch]);

    const fetchedStocks = useSelector(state => state.stocks.stocks);

    const totalSumOfPositions = fetchedStocks.reduce((total, stock) => {
        const { price, quantity } = stock;
        return total + price * quantity;
    }, 0);

    const pieChartData = fetchedStocks.map(stock => ({
        name: stock.name,
        value: (stock.price * stock.quantity) / totalSumOfPositions,
    }));

    const colorScale = scaleOrdinal(schemeSet2);

    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
            fill, payload, percent, value } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                    {payload.name}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${(percent * 100).toFixed(2)}%`}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={fill}>
                    <tspan>{`${(value * 100).toFixed(0)}%`}</tspan>
                    <tspan x={ex + (cos >= 0 ? 1 : -1) * 12} dy={18}>{`$${(value * totalSumOfPositions).toFixed(2)}`}</tspan>
                </text>
            </g>
        );
    };


    return (
        <div className={styles.pieChart__wrapper}>
            <h3 className={styles.title}>Склад портфелю по бумагам</h3>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={pieChartData}
                        labelLine={false}
                        innerRadius={60}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        activeIndex={activeIndex}
                        activeShape={(props) => renderActiveShape(props)}
                        onMouseEnter={(data, index) => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        {pieChartData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={colorScale(index)}
                            />
                        ))}
                    </Pie>
                    <Legend
                        content={(props) => {
                            const { payload } = props;
                            return (
                                <div>
                                    {payload.map((entry, index) => (
                                        <div key={`legend-item-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', color: '#fff' }}>
                                            <div style={{ width: '10px', height: '10px', backgroundColor: entry.color, marginRight: '10px' }}></div>
                                            {`${entry.value} ${(entry.payload.value * 100).toFixed(0)}%`}
                                        </div>
                                    ))}
                                </div>
                            );
                        }}
                        align="right"
                        verticalAlign="middle"
                        layout="vertical"
                        wrapperStyle={{ paddingRight: '200px' }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PieChartExample;
