import Chart from 'react-apexcharts';
import styles from './LineChart.module.scss'
import classNames from 'classnames/bind';
import { AppContext } from '~/context/authentication/appProvider';
import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, Select, Space } from 'antd';


const cx = classNames.bind(styles);

function LineChart() {

    const { setShowTableData, chartList, setChartType, chartTitleSelected, setChartTitleSelected } = useContext(AppContext)

    const [drawChart, setDrawChart] = useState(false)
    const [title, setTitle] = useState('')
    const [xAxisTitle, setxAxisTitle] = useState('')
    const [yAxisTitle, setyAxisTitle] = useState('')
    const [xAxis, setxAxis] = useState([])
    const [finalData, setFinalData] = useState({})

    useEffect(() => {
        setChartType('LineChart');
    })

    const handleDrawChart = () => {
        const chartTitle = chartList.find((chart) => chart.id === chartTitleSelected)

        const finalDataTemp = []
        setDrawChart(true)

        setxAxisTitle(chartTitle.TitleOfx)
        setyAxisTitle(chartTitle.TitleOfy)
        setTitle(chartTitle.Title)
        setxAxis(chartTitle.xTitle.split(' '))
        console.log(xAxis)

        chartTitle.Data.forEach((value) => {

            finalDataTemp.push({
                name: value.lineLabel,
                data: value.lineValues.split(' ').map((string) => Number(string)),
            })
        })

        console.log(finalDataTemp)
        setFinalData(finalDataTemp)
    }


    const handleChangeChartTitle = (value) => {
        setShowTableData(false)
        setChartTitleSelected(value)
    }

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

    console.log(product)


    return (<React.Fragment>
        <div className={cx('linechart')}>
            <h2 className={cx('linechart_title')}>Welcome to Line Chart</h2>

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

            {
                drawChart &&
                <Chart type='line'
                    style={{ display: "block", width: '90%' }}

                    // width={1490}
                    // height={900}
                    series={finalData}
                    options={{
                        chart: {
                            fontFamily: "nunito, sans-serif",
                        },

                        title: {
                            text: title,
                            style: { color: "#6439ff", fontSize: 30 },
                            align: "center"
                        },
                        xaxis: {
                            title: {
                                text: xAxisTitle,

                                style: { color: "#6439ff", fontSize: 20 },
                            },
                            categories: xAxis
                        },
                        yaxis: {
                            title: { text: yAxisTitle, style: { color: "#6439ff", fontSize: 20 } }
                        }
                    }}
                >
                </Chart>
            }

        </div>
    </React.Fragment>);
}

export default LineChart;