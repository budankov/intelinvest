import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import styles from './Portfolio.module.scss'

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const Portfolio = () => {
    return (
        <div className={styles.testWrapper}>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#246CF9" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
            </div>
            <div className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius voluptate assumenda fuga, beatae temporibus provident animi sequi similique officiis alias odio id, possimus rem, consectetur velit nesciunt illum. Error.
            </div>
        </div>
    );
}

export default Portfolio;