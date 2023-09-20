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
import { useState } from "react";

function createData(
  id,
  firstName,
  lastName,
  email,
  dateOfBirth,
  address,
  active,
  userName
) {
  return { id, firstName, lastName, email, dateOfBirth, address, active, userName };
}

function EditUser() {
  const [users, SetUsers] = useState([]);
  const config = {
    headers: {
      "ngrok-skip-browser-warning": 1,
    },
  };

  const url = "https://deep-wealthy-roughy.ngrok-free.app/User/";
  axios
    .get(url, config)
    .then((res) => SetUsers(res.data))
    .catch((err) => console.log(err));

  createData(users);
  console.log(users)
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Brugernavn</TableCell>
              <TableCell align="right">Fornavn</TableCell>
              <TableCell align="right">Efternavn</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Fødselsdag</TableCell>
              <TableCell align="right">Addresse</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.username}</TableCell>
                <TableCell align="right">{row.firstName}</TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.dateOfBirth}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right"><Button>Edit</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default EditUser;
