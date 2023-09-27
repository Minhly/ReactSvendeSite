import {
  AppBar,
  Button,
  Grid,
  TextField,
  Toolbar,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import Newsletter from "../components/newsletter";
import DkLogo from "../assets/dsdd.jpg";

function Footer() {
  return (
    <Grid
      container
      md="12"
      style={{
        backgroundColor: "#84bfd1",
        height: "100px",
        width: "100%",
        position: "fixed",
        left: "0",
        bottom: "0",
        right: "0",
        zIndex: "100",
      }}
    >
      <Grid item md="4" xs="0">
        <Box textAlign="center" marginTop={2}>
          <Link to="https://danskespil.dk/">
            <img src={DkLogo} alt="DkLogo" width={"10%"} />
          </Link>
        </Box>
      </Grid>
      <Grid item md="4" xs="6">
        <Newsletter />
      </Grid>
      <Grid item md="4" marginTop={1} xs="6">
        <Box textAlign="center" marginTop={1}>
          <Typography
            variant="h6"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Generel info:
          </Typography>
          <Typography variant="h8">
            <Link
              to="/pages/rules"
              style={{ textDecoration: "none", color: "#c8dbda" }}
            >
              Regler og Vilkår
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer;
