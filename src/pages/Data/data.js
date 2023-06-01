import styles from "./data.module.scss";
import classNames from "classnames/bind";
import { useContext, useEffect, useState } from "react";
import { Button, Form } from "antd";
import DataTable from "~/components/table/dataTable";

const cx = classNames.bind(styles)


export default function Data() {
    const chartLists = [
        { id: 1, name: "Bar Chart",db: "BarChart"  },
        { id: 2, name: "Pie Chart",db: "PieChart" },
        { id: 3, name: "Donut Chart",db: "DonutChart" },
        { id: 4, name: "Line Chart",db: "LineChart" },
    ]

    const [chartType, setChartType] = useState(1)

    const handleChartType = (chartType) => {
        setChartType(chartType)
    }

    const chartForm = chartLists.find(chart => {
        return chart.id == chartType;
    })


    return (
        <>
            <div className={cx('wrapper')}>
                <ul className={cx('chartList')}>
                    {chartLists.map((chart) =>
                        <li className={cx('chartList_name')} key={chart.id} onClick={() => handleChartType(chart.id)}>
                            {chart.name}
                        </li>
                    )}
                </ul>
                <div className={cx('chartTable')}>
                    <DataTable chart={chartForm.db} />
                </div>
            </div>

        </>
        // </div>
    );
};

