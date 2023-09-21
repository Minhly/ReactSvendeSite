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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../layout/register.css";

function Register() {
  const [date, setDate] = useState(new Date("01/01/1999"));
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    phonenumber: "",
    address2: "",
    postalcode: "",
    username: "",
    dateOfBirth: "",
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
      lastname: data.lastname,
      password: data.password,
      email: data.email,
      phonenumber: data.phonenumber,
      username: data.username,
      dateOfBirth: date,
      address: {
        address1: data.address2,
        postalcode: data.postalcode,
      },
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
    try {
      axios
        .post(
          "https://deep-wealthy-roughy.ngrok-free.app/User/CreateUser",
          userData,
          config
        )
        .then((response) => {
          if (response.status === 201) {
            console.log(response);
            navigate("/");
          } else {
            navigate("/pages/login");
          }
        }).catch(error => { console.log(error.response)});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container marginTop={20} marginBottom={20}>
      <Grid item md="3"></Grid>
      <Grid item md="6" padding={15} style={{ backgroundColor: "#fff" }}>
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
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid item md="12">
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
            </Grid>
            <Grid container md="12">
              <Grid item md="6">
                <TextField
                  margin="normal"
                  required
                  id="firstname"
                  label="Fornavn"
                  name="firstname"
                  fullWidth
                  onChange={handleChange}
                  error={data.firstname.length === 0}
                  helperText={
                    data.firstname.length === 0 ? "Field is empty" : ""
                  }
                />
              </Grid>

              <Grid item md="6">
                <TextField
                  margin="normal"
                  required
                  name="lastname"
                  label="Efternavn"
                  onChange={handleChange}
                  id="lastname"
                  style={{ width: "95%", marginLeft: "10px" }}
                  error={data.lastname.length === 0}
                  helperText={
                    data.lastname.length === 0 ? "Field is empty" : ""
                  }
                />
              </Grid>
            </Grid>

            <Grid item md="12">
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
            </Grid>
            <Grid container md="12">
              <Grid item md="6">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  label="Email"
                  onChange={handleChange}
                  id="email"
                  error={data.email.length === 0}
                  helperText={data.email.length === 0 ? "Field is empty" : ""}
                />
              </Grid>

              <Grid item md="6">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="phonenumber"
                  label="Telefonnummer"
                  onChange={handleChange}
                  id="phonenumber"
                  style={{ width: "95%", marginLeft: "10px" }}
                  error={data.phonenumber.length === 0}
                  helperText={
                    data.phonenumber.length === 0 ? "Field is empty" : ""
                  }
                />
              </Grid>
            </Grid>

            {/*
              <TextField
                margin="normal"
                required
                fullWidth
                name="dateOfBirth"
                label="Fødselsdag"
                onChange={handleChange}
                id="dateOfBirth"
                style={{ width: "45%", marginLeft: "10%" }}
                error={data.dateOfBirth.length === 0}
                helperText={
                    data.dateOfBirth.length === 0 ? "Field is empty" : ""
                }
              />
               */}
            <Grid container md="12">
              <Grid item md="6">
                <TextField
                  margin="normal"
                  required
                  name="postalcode"
                  label="Postnummer"
                  fullWidth
                  onChange={handleChange}
                  id="postalcode"
                  error={data.postalcode.length === 0}
                  helperText={
                    data.postalcode.length === 0 ? "Field is empty" : ""
                  }
                />
              </Grid>
              <Grid item md="6">
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  onCalendarClose={handleCalendarClose}
                  onCalendarOpen={handleCalendarOpen}
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  startDate={date}
                  wrapperClassName="datePicker"
                />
              </Grid>
            </Grid>
            <Grid item md="12">
              <TextField
                margin="normal"
                required
                fullWidth
                name="address2"
                label="Adresse"
                onChange={handleChange}
                id="address2"
                error={data.address2.length === 0}
                helperText={data.address2.length === 0 ? "Field is empty" : ""}
              />
            </Grid>
            <Grid item md="12">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                startIcon={<VpnKeyIcon />}
                sx={{
                  mt: 3,
                  mb: 2,
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  backgroundColor: "#5e90c1",
                }}
              >
                Sign Up
              </Button>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Grid item md="3"></Grid>
    </Grid>
  );
}

export default Register;
