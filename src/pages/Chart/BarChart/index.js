import React from 'react'
import Sidebar from '~/components/sidebar/Sidebar'
import Chart from "react-apexcharts";
import styles from './Barchart.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function BarChart() {
  return (
    // <React.Fragment>
      <div className={cx('wrapper')}>
        <h2 className={cx('barchart_title')}>Bar Chart in ReactJS</h2>

        <Chart
          type="bar"
          style={{display: "block",width: '100%', height: '100%'}}
          // width={1500}
          // height={900}
          series={[
            {
              name: "Social Media Subscriber",
              data: [6578, 6787, 3245, 9876, 2324, 5123, 2435],
            },
          ]}
          options={{
            // title: {
            //   text: "BarChar Developed by DevOps Team",
            //   style: { fontSize: 30 },
            // },

            // subtitle: {
            //   text: "This is BarChart Graph",
            //   style: { fontSize: 18 },
            // },

            colors: ["#6439ff"],
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: [
                "Facebook",
                "Twitter",
                "Linkedin",
                "Instagram",
                "GitHub",
                "Stackoverflow",
                "Youtube",
              ],
              title: {
                text: "Social Media User",
                style: { color: "#6439ff", fontSize: 30 },
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
                text: "User In (K)",
                style: { color: "#6439ff", fontSize: 15 },
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
        ></Chart>
      </div>
    // </React.Fragment>
  );
}

export default BarChart;