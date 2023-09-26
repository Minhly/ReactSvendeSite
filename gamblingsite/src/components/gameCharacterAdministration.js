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
import { useLoggedInStore } from "./zustandStore";
import GameEditModal from "./gameEditModal";
import GameCreateModal from "./gameCreateModal";
import GameCreateCharacterModal from "./gameCreateCharacterModal";
import GameEditCharacterModal from "./gameEditCharacterModal";
import DeleteModal from "./deleteModal";

function createData(id, name, odds, gameId) {
  return {
    id,
    name,
    odds,
    gameId,
  };
}

function GameCharacterAdministration() {
  const [character, Setcharacter] = useState([]);
  const bearerToken = useLoggedInStore((state) => state.bearerToken);

  const config = {
    headers: {
      "ngrok-skip-browser-warning": 1,
      Authorization: `Bearer ${bearerToken}`,
    },
  };

  const url = "https://deep-wealthy-roughy.ngrok-free.app/Character/";
  useEffect(() => {
    axios
      .get(url, config)
      .then((res) => {
        Setcharacter(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  createData(character);
  return (
    <>
      <GameCreateCharacterModal />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{fontWeight: "bold", color: "#5e90c1"}}>Id</TableCell>
              <TableCell align="left" sx={{fontWeight: "bold", color: "#5e90c1"}}>Navn</TableCell>
              <TableCell align="left" sx={{fontWeight: "bold", color: "#5e90c1"}}>Odds</TableCell>
              <TableCell align="left" sx={{fontWeight: "bold", color: "#5e90c1"}}>Spil Id</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {character.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.odds}</TableCell>
                <TableCell align="left">{row.gameId}</TableCell>
                <TableCell align="left">
                  <DeleteModal game={row} />
                </TableCell>
                <TableCell align="left">
                  <GameEditCharacterModal character={row} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default GameCharacterAdministration;
