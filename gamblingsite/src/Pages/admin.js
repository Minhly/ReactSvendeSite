import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import EditUser from "../components/editUser";
import { useLoggedInStore } from "../components/zustandStore";
import EditUserWallet from "../components/editUserWallet";
import GameAdministration from "../components/gameAdministration";
import GameCharacterAdministration from "../components/gameCharacterAdministration";
import GetBettingHistory from "../components/getBettingHistory";

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
  const isLoggedIn = useLoggedInStore((state) => state.isLoggedIn);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container marginTop={23} marginBottom={20}>
      <Grid item md="3"></Grid>
      <Grid item md="6" padding={5} style={{ backgroundColor: "#fff" }}>
        <Typography
          variant="h2"
          align="center"
          marginBottom={2}
          sx={{ color: "#5e90c1" }}
        >
          Administration
        </Typography>
        {isLoggedIn ? (
          <Box textAlign="center">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab sx={{color:"#84bfd1"}} label="Bruger" {...a11yProps(0)} />
                  <Tab sx={{color:"#84bfd1"}} label="Bruger Saldo" {...a11yProps(1)} />
                  <Tab sx={{color:"#84bfd1"}} label="Spil" {...a11yProps(2)} />
                  <Tab sx={{color:"#84bfd1"}} label="Spil karakter" {...a11yProps(3)} />
                  <Tab sx={{color:"#84bfd1"}} label="Spil historik" {...a11yProps(4)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <EditUser />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <EditUserWallet />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <GameAdministration />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <GameCharacterAdministration />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={4}>
                <GetBettingHistory />
              </CustomTabPanel>
            </Box>
          </Box>
        ) : (
          "Oh you sneaky person! Get out!"
        )}
      </Grid>
      <Grid item md="3"></Grid>
    </Grid>
  );
}
