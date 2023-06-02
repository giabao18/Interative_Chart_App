import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { Button, Form, Input, Select, Space, Radio, Divider, Table } from 'antd';
import { AppContext } from "~/context/authentication/appProvider";
import classNames from 'classnames/bind';
import styles from "./dataTable.module.scss";
import { data } from 'autoprefixer';

const cx = classNames.bind(styles)


export default function DataTable() {
    const { showTableData, setShowTableData, chartData, setChartData, chartList, chartType,
        setChartType, chartTitleSelected, setChartTitleSelected } = useContext(AppContext)
    const [columns, setColumns] = useState([])

    useEffect(() => {
    }, [chartType])

    const handleChangeChartTitle = (value) => {
        setShowTableData(false)
        setChartTitleSelected(value)
    }

    const handleShowTable = () => {
        if (chartTitleSelected != '') {
            setShowTableData(true)
            const chartTitle = chartList.find((chart) => chart.id === chartTitleSelected)
            const list = []

            // for LineChart

            if (chartType !== 'LineChart') {
                setColumns([
                    { title: chartTitle.xTitle, dataIndex: 'x', render: (text) => <a>{text}</a>, },
                    { title: chartTitle.yTitle, dataIndex: 'y' }
                ])

                chartTitle.Data.forEach((data, index) => {
                    list.push({
                        ...data,
                        key: index,
                    })
                })
                console.log(columns)
                console.log(list)
            }

            else {
                const tempData = []
                const LineChartLabels = [{ title: 'Data Labels', dataIndex: 'DataLabels' }]

                chartTitle.Data.forEach((data, index) => {
                    LineChartLabels.push(
                        {
                            title: data.lineLabel,
                            dataIndex: `value${index + 1}`,
                        }
                    )

                    tempData.push(
                        (data.lineValues.split(' ').map((value) => Number(value)))
                    )
                })
                setColumns(LineChartLabels)
                console.log(LineChartLabels)
                const DataLabels = chartTitle.xTitle.split(' ')

                DataLabels.forEach((label, index) => {
                    const temps = []
                    tempData.forEach((data) => {
                        temps.push(data[index]);
                    })

                    var newStringArray = temps.map(String)
                    const newArray = [label, ...newStringArray]
                    const newArrayObject = newArray.map(function (value, index) {
                        if (index === 0) {
                            return { DataLabels: value }
                        }
                        else {
                            var property = `value${index}`;
                            var obj = {};
                            obj[property] = value;
                            return obj;
                        }
                    })
                    var combinedObject = newArrayObject.reduce(function (result, currentObject) {
                        return Object.assign(result, currentObject);
                    }, {});
                    list.push(combinedObject);
                })

            }

            setChartData(list)
        }
    }




    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };



    return (
        <div className={cx('wrapper')}>
            <Form>
                <Form.Item>

                    <Space>
                        <Select
                            // defaultValue={chartList[0].BarChartTitle}
                            style={{
                                width: 400,
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
                    <Button onClick={handleShowTable}>Show Table of Data</Button>
                </Form.Item>
            </Form>
            {
                showTableData &&
                <div className={cx('chartTitle_table')}>

                    <Divider />

                    <Table
                        style={{
                            maxWidth: 800,
                        }}
                        rowSelection={{
                            type: 'checkbox',
                            ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={chartData}
                    />
                </div>
            }
        </div>
    )
}
