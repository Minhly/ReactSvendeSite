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
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../layout/register.css";
import EditIcon from "@mui/icons-material/Edit";
import UserModal from "./userModal";
import { useLoggedInStore } from "../components/zustandStore";
import BettingHistoryModal from "./bettingHistoryModal";

function createData(
  id,
  firstName,
  lastName,
  email,
  dateOfBirth,
  addressId,
  active,
  userName
) {
  return {
    id,
    firstName,
    lastName,
    email,
    dateOfBirth,
    addressId,
    active,
    userName,
  };
}

function GetBettingHistory() {
  const [users, SetUsers] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const bearerToken = useLoggedInStore((state) => state.bearerToken);

  const config = {
    headers: {
      "ngrok-skip-browser-warning": 1,
      Authorization: `Bearer ${bearerToken}`,
    },
  };

  const url = "https://deep-wealthy-roughy.ngrok-free.app/User/";
  useEffect(() => {
    axios
      .get(url, config)
      .then((res) => {
        SetUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(url, config)
      .then((res) => {
        setFilteredList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(filteredList);
  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...users];
    updatedList = updatedList.filter((item) => {
      return (
        (item.email || "").toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    });
    setFilteredList(updatedList);
  };

  createData(users);
  return (
    <>
      <TextField
        id="search-box"
        label="Filtrere efter email"
        onChange={filterBySearch}
        style={{ marginBottom: "20px" }}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", color: "#5e90c1" }}
              >
                Id
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", color: "#5e90c1" }}
              >
                Brugernavn
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", color: "#5e90c1" }}
              >
                Fornavn
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", color: "#5e90c1" }}
              >
                Efternavn
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", color: "#5e90c1" }}
              >
                Email
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", color: "#5e90c1" }}
              >
                Fødselsdag
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", color: "#5e90c1" }}
              >
                Aktiv
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", color: "#5e90c1" }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredList.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.username}</TableCell>
                <TableCell align="left">{row.firstName}</TableCell>
                <TableCell align="left">{row.lastName}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.dateOfBirth}</TableCell>
                <TableCell align="left">{row.active.toString()}</TableCell>
                <TableCell align="left">
                  <BettingHistoryModal user={row} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default GetBettingHistory;
