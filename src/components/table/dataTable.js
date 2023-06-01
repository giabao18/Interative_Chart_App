import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { Button, Form, Input, Select, Space, Radio, Divider, Table } from 'antd';
import { AppContext } from "~/context/authentication/appProvider";
import classNames from 'classnames/bind';
import styles from "./dataTable.module.scss";

const cx = classNames.bind(styles)


export default function DataTable(chartTypeString) {
    const { chartData, setChartData, chartList, chartType,
            setChartType, chartTitleSelected, setChartTitleSelected } = useContext(AppContext)
    const [showTable, setShowTable] = useState(false)
    const [columns, setColumns] = useState([])

    useEffect(() => {
        setChartType(chartTypeString.chart)
    }, [chartType])

    const handleChangeChartTitle = (value) => {
        setShowTable(false)
        setChartTitleSelected(value)
    }

    const handleShowTable = () => {
        setShowTable(true)
        const chartTitle = chartList.find((chart) => chart.id === chartTitleSelected)

        setColumns([
            { title: chartTitle.xTitle, dataIndex: 'x', render: (text) => <a>{text}</a>, },
            { title: chartTitle.yTitle, dataIndex: 'y' }
        ])

        const list = []
        chartTitle.Data.forEach((data, index) => {
            list.push({
                ...data,
                key: index,
            })
        })
        console.log(list)

        setChartData(list)
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
                                label: chart.BarChartTitle,
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
                showTable &&
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
