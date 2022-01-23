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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import { Divider } from "@mui/material";
import SimpleStatisticsCard from "examples/Cards/StatisticsCards/SimpleStatisticsCard";
import MDButton from "components/MDButton";
import investmentProducts from "./data/investmentProducts";

function Investment() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="error"
                title="Risk Level"
                count="Low"
                perentage={null}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="savings"
                title="Suggested Investment Period"
                count="8 years"
                perentage={null}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="leaderboard"
                title="Suggested Strategy"
                count="Dolar-cost Averaging"
                perentage={null}
              />
            </MDBox>
          </Grid>
          {/* <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Followers"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid> */}
        </Grid>
        <Divider />
        <Grid container direction="row"
          justifyContent="space-between" spacing={3}>
          <Grid item>
            <MDTypography>Suggested Products</MDTypography>
          </Grid>
          <Grid item>
            <MDButton variant="text" color="info">View All</MDButton>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} md={6} lg={4}>
            <SimpleStatisticsCard
              title="Deposits Fund"
              count="RM230,220"
              percentage={{
                color: "success",
                amount: "+55%",
                label: "since last month",
              }}
            />
          </Grid> */}
          {investmentProducts.map((product) => (
            <Grid item xs={12} md={6} lg={4}>
              <SimpleStatisticsCard
                title={product.name}
                count={product.minimumInitialInvestment}
                percentage={{
                  color: product.oneYearReturn > 0 ? "success" : "error",
                  amount: `${product.oneYearReturn}%`,
                  label: "since last year",
                }}
              />
            </Grid>))}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Investment;
