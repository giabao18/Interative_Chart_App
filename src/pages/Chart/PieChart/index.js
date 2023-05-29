// please install npm install react-apexcharts apexcharts
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import styles from './Piechart.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


function PieChart() {
    // const [stdudentSubject, setStudentsubject] = useState([]);
    // const [studentMarks, setStudentMarks] = useState([]);

    // useEffect(() => {
    //     const sSubject = [];
    //     const sMarks = [];
    //     const getStudentdata = async () => {
    //         const reqData = await fetch("http://localhost/reactgraphtutorial/marks");
    //         const resData = await reqData.json();
    //         for (let i = 0; i < resData.length; i++) {
    //             sSubject.push(resData[i].subject);
    //             sMarks.push(parseInt(resData[i].marks));
    //         }
    //         setStudentsubject(sSubject);
    //         setStudentMarks(sMarks);
    //         //console.log(resData); 
    //     }

    //     getStudentdata();

    // }, []);

    const studentMarks = [5, 6, 7, 8, 9, 10]
    const studentSubject = ['writing', 'speaking', 'History', 'Math', 'Physics', 'HCM though']

    return (
        <React.Fragment>
            <div className={cx('wrapper')}>
                <h2 className={cx('piechart_title')}>Welcome to Piechart </h2>
                <Chart
                    type="pie"
                    style={{ display: "block", width: '60%', height: '60%' }}


                    series={studentMarks}

                    options={{
                        title: {
                            text: "Student PieChart",
                            style: { color: "#6439ff", fontSize: 15, textAlign: "center",},
                            align: "center",
                        },
                        noData: { text: "Empty Data" },
                        colors: ["#6439ff", "#f0f"],
                        labels: studentSubject

                    }}
                >
                </Chart>


            </div>
        </React.Fragment>
    );
}
export default PieChart;