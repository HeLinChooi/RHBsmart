/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import customer6CreditCardTxn from "layouts/dashboard/data/creditcard_txn_cust_id_6.json";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import PieChart from "examples/Charts/PieChart";
import { Divider } from "@mui/material";

function compare(a, b) {
  if (a.txn_date < b.txn_date) {
    return 1;
  }
  if (a.txn_date > b.txn_date) {
    return -1;
  }
  // a must be equal to b
  return 0;
}
function Dashboard() {
  const { tasks } = reportsLineChartData;
  const [txnArr, setTxnArr] = useState([]);
  console.log(customer6CreditCardTxn);

  const getDateObj = (dateStr) => {
    const dateParts = dateStr.split("/");

    // month is 0-based, that's why we need dataParts[1] - 1
    const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    return dateObject;
  };
  const get5LatestTxn = () => {
    const arr = customer6CreditCardTxn.map((txn) => ({
      ...txn,
      txn_date: getDateObj(txn.TRANSACTION_DATE),
    }));
    // console.log(arr.map(item => item.txn_date));
    arr.sort(compare);
    // console.log(arr.map(item => item.txn_date));
    setTxnArr(arr);
  };

  useEffect(() => {
    get5LatestTxn();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4} mb={1.5}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Spendings"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
              <br />
              <ComplexStatisticsCard
                icon="savings"
                title="Savings"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ReportsLineChart
                color="primary"
                title="Spending Projection"
                description="Estimated January 2023: "
                date="just updated"
                chart={tasks}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ReportsBarChart
                color="success"
                title="Saving Projection"
                description="Estimated January 2023: "
                date="campaign sent 2 days ago"
                chart={reportsBarChartData}
              />
            </MDBox>
          </Grid>
        </Grid>
        {/* <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox> */}
        <Divider sx={{ mb: 3 }} />
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <PieChart
                icon={{ color: "info", component: "leaderboard" }}
                title="Monthly Spendings"
                description="Categories"
                chart={{
                  labels: ["Facebook", "Direct", "Organic", "Referral"],
                  datasets: {
                    label: "Projects",
                    backgroundColors: ["info", "primary", "dark", "secondary", "primary"],
                    data: [15, 20, 12, 60],
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <Projects txnArr={txnArr}/>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
