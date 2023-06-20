import React, { useContext, useEffect, useState } from 'react'
import Chart from "react-apexcharts";
import styles from './DonutChart.module.scss'
import classNames from 'classnames/bind';
import { Button, Form, Select, Space } from 'antd';
import { AppContext } from '~/context/authentication/appProvider';
import useFireStoreCollection from '~/hook/useFireStoreCollection';
import { YAxis } from 'recharts';


const cx = classNames.bind(styles);

function DonutChart() {

    const { setShowTableData, chartList, setChartType, chartTitleSelected, setChartTitleSelected } = useContext(AppContext)

    const [drawChart, setDrawChart] = useState(false)
    const [title, setTitle] = useState('')
    const [xData, setxData] = useState([])
    const [yData, setyData] = useState([])

    useEffect(() => {
        setChartType('DonutChart');
    })

    const handleDrawChart = () => {
        const chartTitle = chartList.find((chart) => chart.id === chartTitleSelected)

        const xDataTemp = []
        const yDataTemp = []
        setDrawChart(true)

        setTitle(chartTitle.Title)

        chartTitle.Data.forEach((data, index) => {
            xDataTemp.push(data.x)

            yDataTemp.push(Number(data.y))
        })

        setxData(xDataTemp)
        setyData(yDataTemp)

    }


    const handleChangeChartTitle = (value) => {
        setShowTableData(false)
        setChartTitleSelected(value)
    }

    return (
        <div className={cx('donutchart')}>
            <h2 className={cx('donutchart_title')}>Welcome to Donut Chart</h2>

            <Form style={{ margin: "60px" }}>
                <Form.Item>

                    <Space>
                        <Select
                            // defaultValue={chartList[0].BarChartTitle}
                            style={{
                                width: 200,
                            }}
                            onChange={handleChangeChartTitle}
                            options={chartList.map((chart) => ({
                                label: chart.Title,
                                value: chart.id,
                            }))}
                        />
                    </Space>
                </Form.Item>

                <Form.Item>
                    <Button onClick={handleDrawChart} >Draw Data</Button>
                </Form.Item>
            </Form>

            <Chart
                type="donut"
                style={{ display: "block", width: '70%', height: '60%' }}
                series={yData}

                options={{
                    chart: {
                        fontFamily: "nunito, sans-serif",
                    },

                    labels: xData,
                    title: {
                        text: title,
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