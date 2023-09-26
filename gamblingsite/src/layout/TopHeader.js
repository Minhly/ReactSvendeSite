import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import CookieConsent from "../components/cookieConsent";
import { useLoggedInStore } from "../components/zustandStore";
import gambleonlogo from '../assets/gambleonlogo3.png';

const TopHeader = () => {
  const [cookies] = useCookies(["cookieConsent"]);
  const isLoggedIn = useLoggedInStore((state) => state.isLoggedIn);
  const bearerToken = useLoggedInStore((state) => state.bearerToken);
  const setIsLoggedIn = useLoggedInStore((state) => state.setIsLoggedIn)
  const setBearerToken = useLoggedInStore((state) => state.setBearerToken);

  const logOut = () => {
    setIsLoggedIn(false);
    setBearerToken("");
  };
  
  return (
    <AppBar style={{ background: "#5e90c1", width: "100%" }}>
      <Toolbar>
        <Grid container padding={4}>
          <Grid item md="10">
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              <img src={gambleonlogo} alt="gambleonLogo" width={200} />
              </Link>
            {!cookies.cookieConsent && <CookieConsent />}
          </Grid>
          <Grid item md="2" align="right" marginTop={1}>
            {isLoggedIn ? (
              <>
                <Link
                  to="/pages/admin"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Welcome Admin
                </Link>
                <br></br>
                <Button style={{ textDecoration: "none", color: "#fff" }} onClick={logOut}>Log Out</Button>
              </>
            ) : (
              <Link to="/pages/login">
                <AdminPanelSettingsIcon fontSize="large" />
              </Link>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopHeader;
