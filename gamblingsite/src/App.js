import "./App.css";
import { Grid } from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./pages/admin";
import TopHeader from "./layout/TopHeader";
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Grid container>
      <TopHeader/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pages/admin">
            <Admin />
          </Route>
        </Switch>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
