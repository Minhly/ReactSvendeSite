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
            color="primary"
            InputProps={{
              endAdornment: (
                <IconButton edge="end" color="primary">
                  {<EmailIcon fontSize="large" />}
                </IconButton>
              ),
            }}
          />
        </Box>
      </Grid>
      <Grid item md="4"></Grid>
    </Grid>
  );
}

export default Footer;
