import * as React from 'react';
import MDTypography from "components/MDTypography";

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <MDTypography variant="h6" gutterBottom>
          Credit Card
        </MDTypography>
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <MDTypography variant="h6" gutterBottom>
          Current
        </MDTypography>
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <MDTypography variant="h6" gutterBottom>
          Saving
        </MDTypography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
