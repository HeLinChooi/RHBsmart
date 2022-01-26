import { Card, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';
import MDButton from 'components/MDButton';
import MDTypography from 'components/MDTypography';
import { useGeneralContextController, submitRiskAssessment } from 'context/general';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import riskAccessmentQuestions from '../data/riskAccessmentQuestions';


function RiskAccessment() {
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();
    const [, dispatch] = useGeneralContextController();

    const selectAnswer = (key, value) => {
        setAnswers((prevState) => ({ ...prevState, [key]: value }))
    }

    const handleSubmit = () => {
        submitRiskAssessment(dispatch, true);
        navigate('/investment');
    }

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Card borderRadius="lg" sx={{ py: 3, px: 5, mb: 8 }} p={3} mb={8}>
                <MDTypography variant="h5" pb={2}>Risk Accessment Form</MDTypography>
                {riskAccessmentQuestions.map((ques, index) => (
                    <>
                        <FormControl sx={{ py: 2 }}>
                            <FormLabel id="demo-radio-buttons-group-label">
                                <MDTypography variant="body2">
                                    {ques.question}</MDTypography>
                            </FormLabel>
                            <RadioGroup
                                value={answers[`q${index + 1}`]}
                                onChange={(e) => selectAnswer(`q${index + 1}`, e.target.value)}
                                name="radio-buttons-group"
                                sx={{ pl: 3 }}
                            >
                                {ques.options.map((option) => (
                                    <FormControlLabel value={option.value} control={<Radio />} label={option.label} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </>
                ))}
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <MDButton variant="gradient" color="info" onClick={handleSubmit}>Submit</MDButton>
                </Grid>
            </Card>
        </DashboardLayout>
    );
}

export default RiskAccessment;
