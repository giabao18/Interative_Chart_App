import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '~/components/sidebar/Sidebar'
import Chart from "react-apexcharts";
import styles from './Barchart.module.scss'
import classNames from 'classnames/bind';
import { Button, Form, Select, Space } from 'antd';
import { AppContext } from '~/context/authentication/appProvider';
import useFireStoreCollection from '~/hook/useFireStoreCollection';


const cx = classNames.bind(styles);

function BarChart() {

  const { setShowTableData, chartList, setChartType, chartTitleSelected, setChartTitleSelected } = useContext(AppContext)

  const [drawChart, setDrawChart] = useState(false)
  const [title, setTitle] = useState('')
  const [xAxis, setxAxis] = useState('')
  const [yAxis, setyAxis] = useState('')
  const [xData, setxData] = useState([])
  const [yData, setyData] = useState([])

  useEffect(() => {
    setChartType('BarChart');
  })

  const handleDrawChart = () => {
    const chartTitle = chartList.find((chart) => chart.id === chartTitleSelected)

    const xDataTemp = []
    const yDataTemp = []
    setDrawChart(true)

    setTitle(chartTitle.Title)
    setxAxis(chartTitle.xTitle)
    setyAxis(chartTitle.yTitle)

    chartTitle.Data.forEach((data, index) => {
      xDataTemp.push(data.x)

      yDataTemp.push(data.y)
    })


    setxData(xDataTemp)
    setyData(yDataTemp)
    console.log(xData)

  }


  const handleChangeChartTitle = (value) => {
    setShowTableData(false)
    setChartTitleSelected(value)
  }

  return (
    // <React.Fragment>
    <div className={cx('wrapper')}>
      <h2 className={cx('barchart_title')}>Bar Chart in ReactJS</h2>

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

      {drawChart &&
        <Chart
          type="bar"
          style={{ display: "block", width: '100%', height: '100%' }}

          series={[
            {
              // name: "Social Media Subscriber",
              data: yData,
            },
          ]}
          options={{
            chart: {
              fontFamily: "nunito, sans-serif",
            },

            colors: ["#6439ff"],
            theme: { mode: "light" },

            title: {
              text: title,
              style: { fontSize: 30, color: "#6439ff" },
              align: "center",

            },

            xaxis: {
              tickPlacement: "on",
              categories: xData,
              title: {
                text: xAxis,
                style: { color: "#6439ff", fontSize: 20 },
              },
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["#6439ff"] },
              },
              title: {
                text: yAxis,
                style: { color: "#6439ff", fontSize: 20 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#f4f4f4"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>}
    </div>
    // </React.Fragment>
  );
}

export default BarChart;