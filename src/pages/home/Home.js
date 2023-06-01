import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import styles from "./home.module.scss";
import classNames from "classnames/bind";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useEffect, useState } from "react";
import { Button, Form } from "antd";
import BarChartForm from "~/components/form/barChartForm/barChartForm";
import PieChartForm from "~/components/form/pieChartForm/pieChartForm";
import DonutChartForm from "~/components/form/donutChartForm/donutChartForm";
import LineChartForm from "~/components/form/lineChartForm/lineChartForm";


const cx = classNames.bind(styles)


function Home() {
  const chartList = [
    { id: 1, name: "Bar Chart", form: BarChartForm },
    { id: 2, name: "Pie Chart", form: PieChartForm },
    { id: 3, name: "Donut Chart", form: DonutChartForm },
    { id: 4, name: "Line Chart", form: LineChartForm },
  ]

  const [chartType, setChartType] = useState(1)
  console.log(chartType)

  const handleChartType = (chartType) => {
    setChartType(chartType)
  }

  const chartForm = chartList.find(chart => {
    return chart.id == chartType;
  })


  return (
    <>
      {/* <Sidebar />
      <div className={cx("homeContainer")}>
        <Navbar /> */}
      {/* <div className={cx("widgets")}>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className={cx("charts")}>
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className={cx("listContainer")}>
          <div className={cx("listTitle")}>Latest Transactions</div>
          <Table />
        </div> */}

      <div className={cx('wrapper')}>
        <ul className={cx('chartList')}>
          {chartList.map((chart) =>
            <li className={cx('chartList_name')} key={chart.id} onClick={() => handleChartType(chart.id)}>
              {chart.name}
            </li>
          )}
        </ul>
        <div className={cx('chartForm')}>
          <chartForm.form />
        </div>
      </div>

    </>
    // </div>
  );
};

export default Home;
