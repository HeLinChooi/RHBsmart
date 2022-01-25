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

const merchantCategoryMap = {
  5691: 'Men and Women Clothing Stores',
  5499: 'Food Stores.Convenience',
  5964: 'Direct Marketing.Catalog Merchants',
  6540: 'POI Funding Transactions(Excluding MoneySend)',
  7011: 'Lodging.Hotels, Motels, Resorts',
}

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
function compareTotalSpending(a, b) {
  if (a.total < b.total) {
    return 1;
  }
  if (a.total > b.total) {
    return -1;
  }
  // a must be equal to b
  return 0;
}
function groupBy(xs, key) {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}
function Dashboard() {
  const { tasks } = reportsLineChartData;
  const [txnArr, setTxnArr] = useState([]);
  const [topSpendings, setTopSpendings] = useState([]);

  const getDateObj = (dateStr) => {
    const dateParts = dateStr.split("/");

    // month is 0-based, that's why we need dataParts[1] - 1
    const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    return dateObject;
  };
  const getLatestTxn = () => {
    const arr = customer6CreditCardTxn.map((txn) => ({
      ...txn,
      txn_date: getDateObj(txn.TRANSACTION_DATE),
    }));
    // console.log(arr.map(item => item.txn_date));
    arr.sort(compare);
    // console.log(arr.map(item => item.txn_date));
    setTxnArr(arr);
    console.log(arr[0]);
    // calculate top 5 spending categories as well
    const arrCopy = arr.map(item => item);
    const spendingCategories = groupBy(arrCopy, "MERCH_CATEGORY");
    console.log(spendingCategories)
    const categoriesToTotalSpend = []
    Object.keys(spendingCategories).forEach(categoryKey => {
      const total = spendingCategories[categoryKey].map(item => item.TRANSACTION_AMT).reduce((acc, cur) => {
        // const curTxnAmt = cur.TRANSACTION_AMT ? cur.TRANSACTION_AMT : 0
        // console.log(curTxnAmt)
        // const ret = acc.TRANSACTION_AMT + curTxnAmt;
        console.log("");
        return acc + cur
      }, 0)
      categoriesToTotalSpend.push({ label: categoryKey, total })
    })
    console.log('categoriesToTotalSpend', categoriesToTotalSpend)
    // sort
    categoriesToTotalSpend.sort(compareTotalSpending);
    console.log(categoriesToTotalSpend)
    setTopSpendings(categoriesToTotalSpend)
  };

  useEffect(() => {
    getLatestTxn();
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
                count={9100}
                percentage={{
                  color: "info",
                  amount: "+5%",
                  label: "than last month",
                }}
              />
              <br />
              <ComplexStatisticsCard
                icon="savings"
                title="Net Savings"
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
                title="Spending Records"
                description="Estimated January 2023: "
                date="just updated"
                chart={tasks}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ReportsLineChart
                color="success"
                title="Saving Records"
                description="Estimated January 2023: "
                date="campaign sent 2 days ago"
                chart={reportsBarChartData}
              />
            </MDBox>
          </Grid>
        </Grid>
        <Divider sx={{ mb: 3 }} />
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <PieChart
                icon={{ color: "info", component: "leaderboard" }}
                title="Monthly Spendings (RM)"
                description="Categories"
                chart={{
                  labels: topSpendings.slice(0, 5).map(category => merchantCategoryMap[category.label]),
                  datasets: {
                    label: "Projects",
                    backgroundColors: ["info", "primary", "dark", "secondary", "primary"],
                    data: topSpendings.slice(0, 5).map(category => category.total),
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <Projects txnArr={txnArr} />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
