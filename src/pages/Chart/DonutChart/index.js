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

            <Chart
                type="donut"
                // style={{ display: "block", width: '100%', height: '60%', margin: '0 0 40px 20px' }}

                series={medal}

                options={{
                    chart: {
                        fontFamily: "nunito, sans-serif",
                    },

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
                        labels: { color: "#6439ff" },
                    },

                    plotOptions: {
                        pie: {
                            customScale: 0.8,
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

    )
}

export default DonutChart;