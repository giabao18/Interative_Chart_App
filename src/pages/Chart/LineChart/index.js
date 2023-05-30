import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import styles from './LineChart.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LineChart() {
    const [product, setProduct] = useState(
        [
            {
                name: "T-shirt",
                data: [234, 45, 67, 987, 345, 456, 87, 321, 45, 569, 76, 890]
            },
            {
                name: "Shirt",
                data: [562, 145, 267, 97, 45, 156, 87, 321, 845, 969, 706, 20]
            },
            {
                name: "Jeans",
                data: [1012, 345, 117, 697, 845, 56, 287, 1321, 1845, 469, 306, 120]
            }
        ]
    );

    const [option, setOption] = useState(
        {
            chart: {
                fontFamily: "nunito, sans-serif",
            },

            title: {
                text: "Product sell in 2021",
                style: { color: "#6439ff", fontSize: 15 },
                align: "center"
            },
            xaxis: {
                title: {
                    text: "Product Sell in Months",

                    style: { color: "#6439ff", fontSize: 20 },
                },
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yaxis: {
                title: { text: "Product in K", style: {color: "#6439ff", fontSize: 20} }
            }
        }
    );

    return (<React.Fragment>
        <div className={cx('linechart')}>
            <h2 className={cx('linechart_title')}>Line Chart in ReactJS</h2>

            <Chart type='line'
                style={{ display: "block", width: '100%' }}

                // width={1490}
                // height={900}
                series={product}
                options={option}
            >
            </Chart>

        </div>
    </React.Fragment>);
}

export default LineChart;