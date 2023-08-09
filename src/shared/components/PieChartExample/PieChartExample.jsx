import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from 'redux/stocks/opetations';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeSet2 } from 'd3-scale-chromatic';

const PieChartExample = () => {
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

    return (
        <div style={{ width: 'auto', height: '200px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Legend verticalAlign="middle" align="right" />
                    <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colorScale(index)} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div style={{ textAlign: 'right', paddingRight: '120px' }}>
                {pieChartData.map((entry, index) => (
                    <div key={`legend-item-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <div style={{ width: '10px', height: '10px', backgroundColor: colorScale(index), marginRight: '5px' }}></div>
                        {`${entry.name} ${((entry.value * 100).toFixed(0))}%`}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PieChartExample;
