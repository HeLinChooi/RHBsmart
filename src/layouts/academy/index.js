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

import { Divider } from "@mui/material";
import MDButton from "components/MDButton";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import academyResource from "layouts/academy/data";

function Academy() {

  const academyKeys = ['invest', 'loan', 'credit_card'];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        {
          academyKeys.map((key) => (
            <>
              <Grid container direction="row" justifyContent="space-between" spacing={3}>
                <Grid item>
                  <MDTypography variant="h4">{academyResource[key].title}</MDTypography>
                </Grid>
                <Grid item>
                  <MDButton variant="text" color="info">
                    View All
                  </MDButton>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                {academyResource[key].resource.map((resource) => (
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
            </>
          ))
        }
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Academy;
