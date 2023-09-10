import "./App.css";
import Button from "@mui/material/Button";
import { AppBar, Grid, Link, Toolbar, Typography } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { BrowserRouter as Route, Router, Switch } from 'react-router-dom';
import Admin from "./Pages/admin";

function App() {
  return (
    <Router>
      <AppBar position="relative">
        <Toolbar>
          <Grid container padding={2}>
            <Grid item md="10">
              <Typography variant="h3" fontWeight="bold">
                Gambleon
              </Typography>
            </Grid>
            <Grid item md="2" align="right">
              <Switch>
                <Route path="/">
                  <Admin />
                </Route>
              </Switch>
              <AccessAlarmIcon fontSize="large" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Button variant="outlined">Hello world!</Button>
        </div>
      </main>
    </Router>
  );
}

export default App;
