import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Grid container padding={2}>
          <Grid item md="10">
            <Typography variant="h3" fontWeight="bold">
              <Link to="/">Gambleon</Link>
            </Typography>
          </Grid>
          <Grid item md="2" align="right" marginTop={1}>
            <Link to="/pages/admin">
              <AdminPanelSettingsIcon fontSize="large" />
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default TopHeader;