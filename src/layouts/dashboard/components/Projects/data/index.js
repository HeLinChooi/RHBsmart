/* eslint-disable react/prop-types */
// @mui material components
// import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import MDTypography from "components/MDTypography";

export default function data() {

  return {
    columns: [
      { Header: "date", accessor: "date", align: "center" },
      { Header: "companies", accessor: "companies", width: "45%", align: "left" },
      { Header: "categories", accessor: "categories", width: "10%", align: "left" },
      { Header: "amount", accessor: "amount", align: "center" },
    ],

    rows: [
      {
        companies: <b>Company 1</b>,
        date: "14/01/2022",
        amount: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $14,000
          </MDTypography>
        ),
        categories: "Investment",
      },
      // {
      //   companies: <Company image={logoAtlassian} name="Add Progress Track" />,
      //   members: (
      //     <MDBox display="flex" py={1}>
      //       {avatars([
      //         [team2, "Romina Hadid"],
      //         [team4, "Jessica Doe"],
      //       ])}
      //     </MDBox>
      //   ),
      //   amount: (
      //     <MDTypography variant="caption" color="text" fontWeight="medium">
      //       $3,000
      //     </MDTypography>
      //   ),
      //   completion: (
      //     <MDBox width="8rem" textAlign="left">
      //       <MDProgress value={10} color="info" variant="gradient" label={false} />
      //     </MDBox>
      //   ),
      // },
      // {
      //   companies: <Company image={logoSlack} name="Fix Platform Errors" />,
      //   members: (
      //     <MDBox display="flex" py={1}>
      //       {avatars([
      //         [team1, "Ryan Tompson"],
      //         [team3, "Alexander Smith"],
      //       ])}
      //     </MDBox>
      //   ),
      //   amount: (
      //     <MDTypography variant="caption" color="text" fontWeight="medium">
      //       Not set
      //     </MDTypography>
      //   ),
      //   completion: (
      //     <MDBox width="8rem" textAlign="left">
      //       <MDProgress value={100} color="success" variant="gradient" label={false} />
      //     </MDBox>
      //   ),
      // },
      // {
      //   companies: <Company image={logoSpotify} name="Launch our Mobile App" />,
      //   members: (
      //     <MDBox display="flex" py={1}>
      //       {avatars([
      //         [team4, "Jessica Doe"],
      //         [team3, "Alexander Smith"],
      //         [team2, "Romina Hadid"],
      //         [team1, "Ryan Tompson"],
      //       ])}
      //     </MDBox>
      //   ),
      //   amount: (
      //     <MDTypography variant="caption" color="text" fontWeight="medium">
      //       $20,500
      //     </MDTypography>
      //   ),
      //   completion: (
      //     <MDBox width="8rem" textAlign="left">
      //       <MDProgress value={100} color="success" variant="gradient" label={false} />
      //     </MDBox>
      //   ),
      // },
      // {
      //   companies: <Company image={logoJira} name="Add the New Pricing Page" />,
      //   members: (
      //     <MDBox display="flex" py={1}>
      //       {avatars([[team4, "Jessica Doe"]])}
      //     </MDBox>
      //   ),
      //   amount: (
      //     <MDTypography variant="caption" color="text" fontWeight="medium">
      //       $500
      //     </MDTypography>
      //   ),
      //   completion: (
      //     <MDBox width="8rem" textAlign="left">
      //       <MDProgress value={25} color="info" variant="gradient" label={false} />
      //     </MDBox>
      //   ),
      // },
      // {
      //   companies: <Company image={logoInvesion} name="Redesign New Online Shop" />,
      //   members: (
      //     <MDBox display="flex" py={1}>
      //       {avatars([
      //         [team1, "Ryan Tompson"],
      //         [team4, "Jessica Doe"],
      //       ])}
      //     </MDBox>
      //   ),
      //   amount: (
      //     <MDTypography variant="caption" color="text" fontWeight="medium">
      //       $2,000
      //     </MDTypography>
      //   ),
      //   completion: (
      //     <MDBox width="8rem" textAlign="left">
      //       <MDProgress value={40} color="info" variant="gradient" label={false} />
      //     </MDBox>
      //   ),
      // },
    ],
  };
}
