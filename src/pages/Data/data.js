import styles from "./data.module.scss";
import classNames from "classnames/bind";
import { useContext, useEffect, useState } from "react";
import { Button, Form } from "antd";
import DataTable from "~/components/table/dataTable";
import { AppContext } from "~/context/authentication/appProvider";

const cx = classNames.bind(styles)


export default function Data() {
    const { setShowTableData, chartType, setChartType } = useContext(AppContext)
    const chartLists = [
        { id: 1, name: "Bar Chart",db: "BarChart"  },
        { id: 2, name: "Pie Chart",db: "PieChart" },
        { id: 3, name: "Donut Chart",db: "DonutChart" },
        { id: 4, name: "Line Chart",db: "LineChart" },
    ]

    // const [chartType, setChartType] = useState(1)

    const handleChartType = (chartType) => {
        setChartType(chartType)
        setShowTableData(false)
    }

    const chartForm = chartLists.find(chart => {
        return chart.db == chartType;
    })


    return (
        <>
            <div className={cx('wrapper')}>
                <ul className={cx('chartList')}>
                    {chartLists.map((chart) =>
                        <li className={cx('chartList_name')} key={chart.id} onClick={() => handleChartType(chart.db)}>
                            {chart.name}
                        </li>
                    )}
                </ul>
                <div className={cx('chartTable')}>
                    {chartForm.name}
                    <DataTable />
                </div>
            </div>

        </>
        // </div>
    );
};

