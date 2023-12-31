import {
  Button,
  Grid,
  TextField,
  Typography,
  Box,
  FormControlLabel,
} from "@mui/material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, Route, redirect, useNavigate } from "react-router-dom";
import { useLoggedInStore } from '../components/zustandStore';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import IconTextField from "../components/iconTextField";

function Login() {
  const setIsLoggedIn = useLoggedInStore((state) => state.setIsLoggedIn)
  const setBearerToken = useLoggedInStore((state) => state.setBearerToken);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: data.email,
      password: data.password,
    };

    const config = {
      headers: {
        "ngrok-skip-browser-warning": 1,
      },
    };

    try {
      axios
        .post(
          "https://deep-wealthy-roughy.ngrok-free.app/User/UserLogin",
          userData,
          config
        )
        .then((response) => {
          if (response.status == 200) {
            setIsLoggedIn(true);
            setBearerToken(response.data.token);
            navigate("/pages/admin");
          } else if (response.status == 423) {
            navigate("/pages/login");
          } else if (response.status == 400) {
            navigate("/pages/login");
          } else {
            navigate("/");
          }
        }).catch(error => { console.log(error.response)});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container marginTop={25} marginBottom={20}>
      <Grid item md="4"></Grid>
      <Grid item md="4" padding={10} style={{ backgroundColor: "#fff" }}>
        <Box textAlign="center">
          <Typography
            marginBottom={2}
            variant="h3"
            style={{
              color: "#5e90c1",
              fontWeight: "bold",
              marginTop: "-20px",
            }}
          >
            Login
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <IconTextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleChange}
                autoFocus
                iconStart={<AlternateEmailIcon/>}
              />
              <IconTextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={handleChange}
                id="password"
                iconStart={<VpnKeyIcon/>}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                startIcon={<VpnKeyIcon />}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item></Grid>
                <Grid item>
                  <Link to="/pages/register" variant="body2">
                    {"Ikke en bruger endnu? Registrere dig her"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item md="4"></Grid>
    </Grid>
  );
}

export default Login;
