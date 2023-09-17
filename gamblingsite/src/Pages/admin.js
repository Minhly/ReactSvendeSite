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

function Admin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstname: "",
    lastmame: "",
    password: "",
    email: "",
    phonenumber: "",
    address: "",
    postalcode: "",
    password: "",
    username: "",
  });

  const [isDirty, setIsDirty] = useState(false);

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
      firstname: data.firstname,
      lastmame: data.lastmame,
      password: data.password,
      email: data.email,
      phonenumber: data.phonenumber,
      address: data.address,
      postalcode: data.postalcode,
      password: data.password,
      username: data.username,
    };

    const config = {
      headers: {
        "ngrok-skip-browser-warning": 1,
      },
    };

    /*
      const url = "https://deep-wealthy-roughy.ngrok-free.app/user/getusers";
      
      axios.get(url, config)
      .then(res=> console.log(res))
      .catch(err=> console.log(err))
        */

    axios
      .post(
        "https://deep-wealthy-roughy.ngrok-free.app/User/UserLogin",
        userData,
        config
      )
      .then((response) => {
        if (response.status == 200) {
          navigate("/pages/admin");
        } else if (response.status == 423) {
          navigate("/");
        } else {
          navigate("/");
        }
      });
  };

  return (
    <Grid container marginTop={20} marginBottom={20}>
      <Grid item md="2"></Grid>
      <Grid item md="8" padding={15} style={{backgroundColor: "#fff", }}>
        <Box textAlign="center">
          <Typography
            marginBottom={2}
            variant="h3"
            style={{
              color: "#5e90c1",
              fontWeight: "bold",
            }}
          >
            Create Account
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
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                name="username"
                label="Brugernavn"
                onChange={handleChange}
                id="username"
                error={data.username.length === 0}
                helperText={data.username.length === 0 ? "Field is empty" : " "}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                id="firstname"
                label="Fornavn"
                name="firstname"
                onChange={handleChange}
                error={data.firstname.length === 0}
                helperText={data.firstname.length === 0 ? "Field is empty" : ""}
                style={{ width: "45%" }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="lastname"
                label="Efternavn"
                onChange={handleChange}
                id="lastname"
                style={{ width: "45%", marginLeft: "10%" }}
                error={data.lastmame.length === 0}
                helperText={data.lastmame.length === 0 ? "Field is empty" : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Kodeord"
                type="password"
                onChange={handleChange}
                id="password"
                error={data.password.length === 0}
                helperText={data.password.length === 0 ? "Field is empty" : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email"
                onChange={handleChange}
                id="email"
                style={{ width: "45%" }}
                error={data.email.length === 0}
                helperText={data.email.length === 0 ? "Field is empty" : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="phonenumber"
                label="Telefonnummer"
                onChange={handleChange}
                id="phonenumber"
                style={{ width: "45%", marginLeft: "10%" }}
                error={data.phonenumber.length === 0}
                helperText={
                  data.phonenumber.length === 0 ? "Field is empty" : ""
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="postal"
                label="Postnummer"
                onChange={handleChange}
                id="postal"
                style={{ width: "45%", float: "left" }}
                error={data.postalcode.length === 0}
                helperText={
                  data.postalcode.length === 0 ? "Field is empty" : ""
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="address"
                label="Adresse"
                onChange={handleChange}
                id="address"
                error={data.address.length === 0}
                helperText={data.address.length === 0 ? "Field is empty" : ""}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                startIcon={<VpnKeyIcon />}
                sx={{ mt: 3, mb: 2, paddingTop: "20px", paddingBottom: "20px", backgroundColor: "#5e90c1" }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item md="2"></Grid>
    </Grid>
  );
}

export default Admin;
