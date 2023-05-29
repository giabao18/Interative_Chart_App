import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import styles from "./home.module.scss";
import classNames from "classnames/bind";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const cx = classNames.bind(styles)

function Home() {
  return (
    <>
      {/* <Sidebar />
      <div className={cx("homeContainer")}>
        <Navbar /> */}
      <div className={cx("widgets")}>
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
      </div>
    </>
    // </div>
  );
};

export default Home;
