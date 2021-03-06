// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useEffect, useState } from "react";
import MDButton from "components/MDButton";

function ProgressInfoCard({ title, count, countStr, color, target, targetStr, action }) {
  const [percentage, setPercentage] = useState(100);
  const navigate = useNavigate();
  useEffect(() => {
    setPercentage(Math.round(count / target * 100));
  }, [])

  return (
    <Card sx={{ p: 2, pt: 0 }}>
      <MDBox display="flex" justifyContent="space-between" pt={1}>
        <MDBox
          variant="gradient"
          bgColor={color}
          color={color === "light" ? "dark" : "white"}
          coloredShadow={color}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          mt={-3}
        >
          {`${percentage}%`}
        </MDBox>
        <MDBox textAlign="right" lineHeight={1.25}>
          <MDTypography variant="button" fontWeight="light" color="text">
            {title}
          </MDTypography>
          <MDTypography variant="h4">{targetStr}</MDTypography>
        </MDBox>
      </MDBox>
      <MDBox borderRadius="lg" my={2} sx={{ background: '#f0f2f5' }}>
        {/* Progress bar */}
        <MDBox display="flex" justifyContent="center" borderRadius="lg" bgColor={color}
          sx={{ overflow: 'hidden', width: `${percentage}%` }}>
          <small style={{ color: 'white' }}>{countStr || count}</small>
        </MDBox>
      </MDBox>
      <MDButton
        variant="outlined"
        size="small"
        color={color}
        sx={{ width: '100%' }}
        onClick={() => navigate(action)}
      >
        Learn More
      </MDButton>
    </Card >
  );
}

// Setting default values for the props of ComplexStatisticsCard
ProgressInfoCard.defaultProps = {
  color: "info",
};

// Typechecking props for the ComplexStatisticsCard
ProgressInfoCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  countStr: PropTypes.string.isRequired,
  targetStr: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  target: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  // percentage: PropTypes.shape({
  //   color: PropTypes.oneOf([
  //     "primary",
  //     "secondary",
  //     "info",
  //     "success",
  //     "warning",
  //     "error",
  //     "dark",
  //     "white",
  //   ]),
  //   amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  //   label: PropTypes.string,
  // }),
  // eslint-disable-next-line react/no-unused-prop-types
  icon: PropTypes.node.isRequired,
};

export default ProgressInfoCard;
