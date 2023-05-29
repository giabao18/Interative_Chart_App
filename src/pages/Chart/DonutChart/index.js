import React from 'react'
import Chart from "react-apexcharts";
import styles from './DonutChart.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DonutChart() {

    const medal = [3, 4, 5, 6, 7, 1]
    const countryNames = ['Vietnam', 'USA', 'Japan', 'Singapore', 'China', 'thailand']

    return (
        <div className={cx('donutchart')}>
            <h2 className={cx('donutchart_title')}>Donut Chart in ReactJS</h2>

            <div className={cx('donutchart_content')}>
                <Chart
                
                    type="donut"
                    style={{ display: "block", width: '60%', height: '60%' }}

                    series={medal}

                    options={{
                        labels: countryNames,
                        title: {
                            text: "Medal Country Name",
                            style: { color: "#6439ff", fontSize: 20 },
                            align: "center",
                        },

                        legend: {
                            show: true,
                            position: "right",
                            fontSize: "15px",
                            fontWeight: "bold",
                            height: "30px",
                            labels: { color: "#6439ff"},
                        },

                        plotOptions: {
                            pie: {
                                donut: {
                                    labels: {
                                        show: true,
                                        total: {
                                            show: true,
                                            showAlways: true,
                                            //formatter: () => '343',
                                            fontSize: 30,
                                            color: '#6439ff',
                                        }
                                    }
                                }
                            }

                        },

                        dataLabels: {
                            enabled: true,
                        }


                    }}

                />
            </div>

        </div>
    )
}

export default DonutChart;