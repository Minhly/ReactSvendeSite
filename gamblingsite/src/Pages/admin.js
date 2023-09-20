import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Admin() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container marginTop={20} marginBottom={20}>
      <Grid item md="3"></Grid>
      <Grid item md="6" padding={5} style={{ backgroundColor: "#fff" }}>
        <Box textAlign="center">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="User" {...a11yProps(0)} />
                <Tab label="Wallet" {...a11yProps(1)} />
                <Tab label="Betting History" {...a11yProps(2)} />
                <Tab label="Game Management" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              User
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Wallet
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Betting History
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
            Game Management
            </CustomTabPanel>
          </Box>
        </Box>
      </Grid>
      <Grid item md="3"></Grid>
    </Grid>
  );
}
