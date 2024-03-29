import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PieChartIcon from '@mui/icons-material/PieChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { DatasetOutlined } from "@mui/icons-material";
import { AuthContext } from "~/context/authentication/authProvider";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/theme/darkModeContext";
import { useContext } from "react";
import styles from './sidebar.module.scss'
import classNames from 'classnames/bind'
import { auth } from "~/firebase/config";
import { Button } from "antd";


const cx = classNames.bind(styles)

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className={cx('sidebar')}>
      <div className={cx("top")}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className={cx("logo")}>CHART APP</span>
        </Link>
      </div>
      <hr />
      <div className={cx("center")}>
        <ul>

          <p className={cx("title")}>HOME</p>
          <Link to='/' style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className={cx("icon")} />
              <span>Add Data</span>
            </li>
          </Link>

          <p className={cx('title')}>CHART LIST</p>
          <Link to="/barchart " style={{ textDecoration: "none" }}>
            <li>
              <BarChartIcon className={cx('icon')} />
              <span>Bar Chart</span>
            </li>
          </Link>

          <Link to="/piechart" style={{ textDecoration: "none" }}>
            <li>
              <PieChartIcon className={cx('icon')} />
              <span>Pie Chart</span>
            </li>
          </Link>

          <Link to='/donutchart' style={{ textDecoration: "none" }}>
            <li>
              <DonutLargeIcon className={cx('icon')} />
              <span>Donut Chart</span>
            </li>
          </Link>

          <Link to='/linechart' style={{ textDecoration: "none" }}>
            <li>
              <ShowChartIcon className={cx('icon')} />
              <span>Line Chart</span>
            </li>
          </Link>

          <Link to='/data' style={{ textDecoration: "none" }}>
            <p className={cx("title")}>USER</p>
            <li>
              <DatasetOutlined className={cx('icon')} />
              <span>Data</span>
            </li>
          </Link>


          {/* Logout */}
          <li className={cx('logout')}>
            <ExitToAppIcon className={cx('icon')} />
            <span onClick={() => auth.signOut()}>Logout</span>
          </li>
        </ul>

      </div>

      <div className={cx("bottom")}>
        <div
          className={cx("colorOption")}
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className={cx("colorOption")}
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>

    </div>
  );
};

export default Sidebar;
