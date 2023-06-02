// please install npm install react-apexcharts apexcharts
import React, { useContext, useEffect, useState } from 'react'
import Chart from "react-apexcharts";
import styles from './Piechart.module.scss'
import classNames from 'classnames/bind';
import { AppContext } from '~/context/authentication/appProvider';
import useFireStoreCollection from '~/hook/useFireStoreCollection';
import { Button, Form, Select, Space } from 'antd';


const cx = classNames.bind(styles);


function PieChart() {

    const { setShowTableData, chartList, setChartType, chartTitleSelected, setChartTitleSelected } = useContext(AppContext)

    const [drawChart, setDrawChart] = useState(false)
    const [title, setTitle] = useState('')
    const [xData, setxData] = useState([])
    const [yData, setyData] = useState([])

    useEffect(() => {
        setChartType('PieChart');
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
        <React.Fragment>
            <div className={cx('wrapper')}>

                <h2 className={cx('piechart_title')}>Welcome to Piechart </h2>

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
                    type="pie"
                    style={{ display: "block", width: '100%', height: '60%' }}


                    series={yData}

                    options={{
                        plotOptions: {
                            pie: {
                                customScale: 0.8
                            }
                        },

                        chart: {
                            fontFamily: "nunito, sans-serif",
                        },

                        title: {
                            text: title,
                            style: { color: "#6439ff", fontSize: 20, textAlign: "center", },
                            align: "center",
                        },
                        noData: { text: "Empty Data" },
                        colors: ["#6439ff", "#f0f"],
                        labels: xData

                    }}
                >
                </Chart>


            </div>
        </React.Fragment>
    );
}
export default PieChart;