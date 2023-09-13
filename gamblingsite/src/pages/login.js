import { Button, Grid, TextField, Typography, Box } from "@mui/material";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { lightBlue } from "@mui/material/colors";

function Login() {
  return (
    <Grid container md="12" marginTop={20} marginBottom={20}>
      <Grid item md="4"></Grid>
      <Grid item md="4">
        <Box textAlign="center" marginTop={4}>
                <Typography marginBottom={2} variant="h2" style={{
                  color: "#5e90c1",
                  fontWeight: "bold"
                }}>Login</Typography>
          <Grid md="12" container gap={2} backgroundColor="white" paddingTop={10} paddingBottom={10} border={2} borderColor={"lightBlue"}>
            <Grid item md="12">
              <TextField label="email" color="primary" focused style={{
                  width: "60%"
                }} />
            </Grid>
            <Grid item md="12">
              <TextField label="password" color="primary" style={{
                  width: "60%",
                }}/>
            </Grid>
            <Grid item md="12">
              <Button
                variant="contained"
                startIcon={<VpnKeyIcon />}
                style={{
                  padding: "15px",
                  width: "60%",
                  backgroundColor: "#5e90c1",
                  fontWeight: "bold"
                }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item md="4"></Grid>
    </Grid>
  );
}

export default Login;
