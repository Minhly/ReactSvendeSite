import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import CookieConsent from "../components/cookieConsent";

const TopHeader = () => {
  const [cookies] = useCookies(["cookieConsent"]);

  return (
    <AppBar style={{ background: "#5e90c1", width: "100%" }}>
      <Toolbar>
        <Grid container padding={4}>
          <Grid item md="10">
            <Typography variant="h3" fontWeight="bold">
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                Gambleon
              </Link>
            </Typography>
            {!cookies.cookieConsent && <CookieConsent />}
          </Grid>
          <Grid item md="2" align="right" marginTop={1}>
            <Link to="/pages/login">
              <AdminPanelSettingsIcon fontSize="large" />
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopHeader;
