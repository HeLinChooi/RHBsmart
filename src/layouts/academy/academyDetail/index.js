
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import academyResource from "layouts/academy/data";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import MDBox from "components/MDBox";

function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
}

function AcademyDetail() {
    const query = useQuery();
    const [content, setContent] = useState();
    useEffect(() => {
        setContent(academyResource.find((resource) => resource.id === query.get("id")))
    }, [query])

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDTypography variant="h4">{content?.title}</MDTypography>
            <MDBox borderRadius="xl" mt={1} mb={2} sx={{
                width: '100%', height: "250px", overflow: 'hidden', backgroundImage: `url(${content?.image})`,
                backgroundSize: "cover",
                backgroundPosition: "50%",
            }} />
            <MDTypography variant="body1">{content?.description}</MDTypography>
            <MDTypography variant="body2">{content?.description}</MDTypography>
            <Footer />
        </DashboardLayout>
    );
}

export default AcademyDetail;
