/**
=========================================================
* Soft UI Dashboard React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Soft UI Dashboard Materail-UI example components
import DataTable from "examples/Tables/DataTable";

// Data
// import data from "layouts/dashboard/components/Projects/data";
import ToggleButton from '../ToggleButton';

const data = {
  columns: [
    { Header: "date", accessor: "date", align: "center" },
    { Header: "title", accessor: "title", width: "45%", align: "left" },
    { Header: "product", accessor: "product", width: "10%", align: "left" },
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
  ],
};

function Projects({ txnArr }) {
  const { columns } = data;
  const rows = txnArr.map((txn) => ({
    title: <b>{txn.TRAN_DESC_DETAIL}</b>,
    date: txn.TRANSACTION_DATE,
    amount: (
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {txn.TRANSACTION_AMT}
      </MDTypography>
    ),
    product: txn.Product,
  }));

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Transactions
          </MDTypography>
        </MDBox>
        <MDBox>
          <ToggleButton/>
        </MDBox>
        <MDButton variant="text" color="info">
          View More
        </MDButton>
      </MDBox>
      <MDBox>
        <DataTable
          // table={{ columns, rows: rows.slice(0, 5) }}
          table={{ columns, rows }}
          showTotalEntries={false}
          isSorted={false}
          noEndBorder
          entriesPerPage={false}
        />
      </MDBox>
    </Card>
  );
}

export default Projects;
