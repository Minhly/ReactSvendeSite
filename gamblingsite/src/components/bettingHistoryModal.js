import {
  Grid,
  TextField,
  Typography,
  Box,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../layout/register.css";
import EditIcon from "@mui/icons-material/Edit";
import { useLoggedInStore } from "../components/zustandStore";
import Paper from "@mui/material/Paper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BettingHistoryModal(props) {
  const [checked, setChecked] = useState(props.user.active);
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");
  const [date, setDate] = useState(new Date(props.user.dateOfBirth));
  const bearerToken = useLoggedInStore((state) => state.bearerToken);
  const [data, setData] = useState({
    id: "",
    amount: "",
    active: "",
    userId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      id: props.user.wallets[0].id,
      amount:
        data.amount == null || data.amount.length < 1
          ? props.user.wallets[0].amount
          : data.amount,
      active: props.user.wallets[0].active,
      userId: props.user.wallets[0].userId,
    };

    const config = {
      headers: {
        "ngrok-skip-browser-warning": 1,
        Authorization: `Bearer ${bearerToken}`,
      },
    };

    axios
      .put(
        "https://deep-wealthy-roughy.ngrok-free.app/Wallet/" +
          props.user.wallets[0].id,
        userData,
        config
      )
      .then((response) => {
        if (response.status === 204) {
          window.location.reload(false);
        } else {
          console.log("Failed: " + response.status);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen} startIcon={<EditIcon />} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit} noValidate>
          <Typography variant="h5">
            {props.user.firstName} {props.user.lastName}
          </Typography>
          <Grid container md="12">
            <Grid item md="8">
              <TextField
                margin="normal"
                required
                name="amount"
                defaultValue={props.user.wallets[0].amount}
                label="Saldo"
                id="amount"
                onChange={handleChange}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item md="3">
              <Button
                type="submit"
                fullWidth
                startIcon={<EditIcon />}
                variant="contained"
                sx={{
                  mt: 2,
                  mb: 2,
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  marginLeft: "10px",
                  backgroundColor: "#5e90c1",
                }}
              >
                Gem Saldo
              </Button>
            </Grid>
            <Grid item md="12">
              <Typography variant="h5" mt={2}>
                Saldo Historik
              </Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Id</TableCell>
                      <TableCell align="left">Beløb</TableCell>
                      <TableCell align="left">Dato</TableCell>
                      <TableCell align="left"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.user.wallets[0].transactions.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell align="left">{row.amount}</TableCell>
                        <TableCell align="left">{row.actionTime}</TableCell>
                        <TableCell align="left"></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
