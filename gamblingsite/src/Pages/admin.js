import { Button, Grid, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Admin() {
  return (
    <Grid container md="12" marginTop={20} marginLeft={10} marginBottom={20}>
      <Grid item md="4">
        <TextField
          label="Sign up for newsletter!"
          value="Your@Email.Now"
          color="primary"
          focused
        />
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          style={{
            padding: "15px",
            marginLeft: "10px",
            backgroundColor: "#5e90c1",
          }}
        >
          Sign up{" "}
        </Button>
      </Grid>
      <Grid
        item
        md="4"
        marginTop={5}
        marginLeft={20}
        justifyContent="center"
      ></Grid>
      <Grid item md="4"></Grid>
    </Grid>
  );
}

export default Admin;
