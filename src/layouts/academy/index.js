// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import { Divider } from "@mui/material";
import MDButton from "components/MDButton";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import academyResource from "layouts/academy/data";
import { useEffect, useState } from "react";

function Academy() {

  const [investResource, setInvestResource] = useState([]);
  const [loanResource, setLoanResource] = useState([]);
  const [creditCardResource, setCreditCardResource] = useState([]);

  useEffect(() => {
    setInvestResource(academyResource.filter((resource) => resource.category === 'stock'))
    setLoanResource(academyResource.filter((resource) => resource.category === 'loan'))
    setCreditCardResource(academyResource.filter((resource) => resource.category === 'credit_card'))
  }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={2} pb={3}>
        <Grid container direction="row" justifyContent="space-between" spacing={3}>
          <Grid item>
            <MDTypography variant="h4">Invest 101</MDTypography>
          </Grid>
          <Grid item>
            <MDButton variant="text" color="info">
              View All
            </MDButton>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {investResource && investResource.map((resource) => (
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <DefaultProjectCard
                  image={resource.image}
                  label={resource.label}
                  title={resource.title}
                  description={resource.description}
                  action={resource.action}
                />
              </MDBox>
            </Grid>
          ))}
        </Grid>
        <Divider />
        <Grid container direction="row" justifyContent="space-between" spacing={3}>
          <Grid item>
            <MDTypography variant="h4">Loan 101</MDTypography>
          </Grid>
          <Grid item>
            <MDButton variant="text" color="info">
              View All
            </MDButton>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {loanResource && loanResource.map((resource) => (
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <DefaultProjectCard
                  image={resource.image}
                  label={resource.label}
                  title={resource.title}
                  description={resource.description}
                  action={resource.action}
                />
              </MDBox>
            </Grid>
          ))}
        </Grid>
        <Divider />
        <Grid container direction="row" justifyContent="space-between" spacing={3}>
          <Grid item>
            <MDTypography variant="h4">Credit Card 101</MDTypography>
          </Grid>
          <Grid item>
            <MDButton variant="text" color="info">
              View All
            </MDButton>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {creditCardResource && creditCardResource.map((resource) => (
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <DefaultProjectCard
                  image={resource.image}
                  label={resource.label}
                  title={resource.title}
                  description={resource.description}
                  action={resource.action}
                />
              </MDBox>
            </Grid>
          ))}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Academy;
