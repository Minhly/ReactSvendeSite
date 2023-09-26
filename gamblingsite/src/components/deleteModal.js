import { Grid, TextField, Typography, Box, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../layout/register.css";
import EditIcon from "@mui/icons-material/Edit";
import { useLoggedInStore } from "./zustandStore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

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

export default function DeleteModal(props) {
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");
  const bearerToken = useLoggedInStore((state) => state.bearerToken);
  const [data, setData] = useState({
    name: "",
    desc: "",
    gameTypeId: "",
    gameImage: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const gameData = {
      id: props.game.id,
      name:
        data.name == null || data.name.length < 1 ? props.game.name : data.name,
      desc:
        data.description == null || data.description.length < 1
          ? props.game.desc
          : data.description,
      gameTypeId:
        data.gameTypeId == null || data.gameTypeId.length < 1
          ? props.game.gameTypeId
          : data.gameTypeId,
      gameImage:
        data.gameImage == null || data.gameImage.length < 1
          ? props.game.gameImage
          : data.gameImage,
    };

    const config = {
      headers: {
        "ngrok-skip-browser-warning": 1,
        Authorization: `Bearer ${bearerToken}`,
      },
    };

    axios
      .put(
        "https://deep-wealthy-roughy.ngrok-free.app/game/" + props.game.id,
        gameData,
        config
      )
      .then((response) => {
        if (response.status === 204) {
          window.location.reload(false);
        } else {
          console.log("failed" + response.status);
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
      <Button onClick={handleOpen} startIcon={<DeleteForeverIcon />} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit} noValidate>
          <Typography variant="h3">{props.game.name}</Typography>
          <Grid container md="12">
            <Grid item md="12">
              <Typography variant="h6">
                Er du sikker på du vil slette dette spil?
              </Typography>
            </Grid>
            <Grid item md="12">
              <Button
                type="submit"
                fullWidth
                startIcon={<DeleteForeverIcon />}
                variant="contained"
                color="secondary"
                sx={{
                  mt: 3,
                  mb: 2,
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  backgroundColor: "#FF6961",
                }}
              >
                Slet spil
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
