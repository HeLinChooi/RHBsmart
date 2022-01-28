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
import ProgressInfoCard from "layouts/dashboard/components/ProgressInfoCard";
import Projects from "layouts/dashboard/components/Projects";
import PieChart from "examples/Charts/PieChart";
import { Divider } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, {
  Lazy, Pagination, Navigation
} from 'swiper';
import MDTypography from "components/MDTypography";

import AchievementBannerSrc from "assets/images/Achievement.png"
import PromotionBannerBg from "assets/images/PromotionBannerBg.png"
import Helin from "assets/images/Helin.png"
import MDAvatar from "components/MDAvatar";

// install Swiper modules
SwiperCore.use([Lazy, Pagination, Navigation]);


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
    // console.log(arr[0]);
    // calculate top 5 spending categories as well
    const arrCopy = arr.map(item => item);
    const spendingCategories = groupBy(arrCopy, "MERCH_CATEGORY");
    // console.log(spendingCategories)
    const categoriesToTotalSpend = []
    Object.keys(spendingCategories).forEach(categoryKey => {
      const total = spendingCategories[categoryKey].map(item => item.TRANSACTION_AMT).reduce((acc, cur) => acc + cur, 0)
      categoriesToTotalSpend.push({ label: categoryKey, total })
    })
    // console.log('categoriesToTotalSpend', categoriesToTotalSpend)
    // sort
    categoriesToTotalSpend.sort(compareTotalSpending);
    // console.log(categoriesToTotalSpend)
    setTopSpendings(categoriesToTotalSpend)
  };

  useEffect(() => {
    getLatestTxn();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        effect="fade"
        navigation
        pagination
        lazy
        autoplay={{
          "delay": 3000,
          "disableOnInteraction": true,
          stopOnLast: true,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <MDBox container display="flex" borderRadius="xl" alignItems="center" mb={5} sx={{
            width: '100%', height: "220px", overflow: 'hidden', backgroundImage: `url(${AchievementBannerSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
          }}>
            <Grid container spacing={4} px={2}>
              <Grid item sm={0} md={3} display={{ xs: 'none', md: 'flex' }} justifyContent="flex-end" >
                <MDAvatar src={Helin} alt="Avatar" size="xxl" />
              </Grid>
              <Grid item sm={12} md={9} display='flex' flexDirection="column" justifyContent="center">
                <MDTypography variant="h3" color="warning">Congratulations, Richard ! </MDTypography>
                <MDTypography color="white">Your net savings have surpassed 51.1% users last month</MDTypography>
              </Grid>
            </Grid>
          </MDBox>
        </SwiperSlide>
        <SwiperSlide>
          <MDBox container borderRadius="xl" mb={5} sx={{
            width: '100%', height: "220px", overflow: 'hidden', backgroundImage: `url(${PromotionBannerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
          }}>
            <MDBox px={3} borderRadius="xl" sx={{ overflow: 'hidden', height: '100%' }}>
              <iframe
                loading="lazy"
                width="auto"
                height="100%"
                src={`https://www.youtube.com/embed/${'7EjWmpvUZFA'}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </MDBox>
          </MDBox>
        </SwiperSlide>
      </Swiper>
      <MDBox py={3}>
        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} md={6} lg={4}>
            <ProgressInfoCard title="Financial Health Score" count="70" countStr="70%" target="100" targetStr="100%" color="warning" />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ProgressInfoCard title="Emergency Fund" count="3000" target="12000" targetStr="RM 12000" color="primary" />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ProgressInfoCard title="Debt Servicing ratio" count="2000" target="3000" targetStr="RM 3000" color="success" />
          </Grid>
        </Grid>
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
