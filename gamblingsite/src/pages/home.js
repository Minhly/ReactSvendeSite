import { Grid, Typography, Button, Box } from "@mui/material";
import SmexyIphones from "../assets/SmexyIphones3.png";
import Googleplay from "../assets/googleplay3.png";
import Appstore from "../assets/appstore3.png";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

function Home() {
  return (
    <Grid container xs="12" md="12">
      <Grid item md="6" sm="12" marginTop={32}>
        <Typography
          variant="h3"
          align="center"
          style={{ color: "#5e90c1", fontWeight: "bold" }}
        >
          Start med at spille idag! <br></br>Download appen på
        </Typography>
        <Grid
          container
          alignItems="center"
          direction="row"
          justifyContent="center"
          spacing={0}
          md="12"
          sm="12"
          marginTop={5}
        >
          <Grid item md="3" marginLeft={5}>
            <Link to="/pages/register">
              <img src={Googleplay} alt="Googleplay" width={200} />
            </Link>
          </Grid>
          <Grid item md="3" marginLeft={5}>
            <Link to="/pages/register">
              <img src={Appstore} alt="Appstore" width={200} />
            </Link>
          </Grid>
        </Grid>
        <Typography
          variant="h3"
          align="center"
          marginTop={4}
          style={{ color: "#5e90c1", fontWeight: "bold" }}
        >
          Eller registrere dig <br></br>
          som bruger her
        </Typography>
        <Box textAlign="center" marginTop={4}>
          <Link to="/pages/register">
            <Button
              variant="contained"
              startIcon={<SendIcon />}
              style={{
                padding: "15px",
                marginLeft: "10px",
                backgroundColor: "#000",
              }}
            >
              Sign up
            </Button>
          </Link>
        </Box>
      </Grid>
      <Grid item md="6" sm="12" marginTop={5}>
        <img src={SmexyIphones} alt="Phone" width={"100%"} />
      </Grid>
    </Grid>
  );
}

export default Home;
