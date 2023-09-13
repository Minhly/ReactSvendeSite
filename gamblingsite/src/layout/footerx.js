import {
  AppBar,
  Button,
  Grid,
  TextField,
  Toolbar,
  Typography,
  Box
} from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <Grid
      container
      md="12"
      style={{ backgroundColor: "#84bfd1", height: "150px", width: "100%" }}
    >
      <Grid item md="4"></Grid>
      <Grid item md="4" marginTop={2} justifyContent="center">
        <Box textAlign="center" marginTop={4}>
          <TextField
            label="Sign up for newsletter!"
            value="Your@Email.Now"
            color="primary"
            focused
          />
          <Button
            variant="contained"
            startIcon={<EmailIcon />}
            style={{
              padding: "15px",
              marginLeft: "10px",
              backgroundColor: "#5e90c1",
            }}
          >
            Sign up
          </Button>
        </Box>
      </Grid>
      <Grid item md="4"></Grid>
    </Grid>
  );
}

export default Footer;
