import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TopHeader from "./layout/topHeader";
import Home from "./pages/home";
import Footy from "./layout/footerx";
import Login from "./pages/login";
import Admin from "./pages/admin";
import Register from "./pages/register";
import Rules from "./pages/rules";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    //<ThemeProvider>
    //<CssBaseline />
    //<main>This app is using the dark mode</main>
    <BrowserRouter>
      <TopHeader />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pages/login" element={<Login />} />
        <Route exact path="/pages/admin" element={<Admin />} />
        <Route exact path="/pages/register" element={<Register />} />
        <Route exact path="/pages/rules" element={<Rules />} />
        <Route
          exact
          path="/pages/login"
          element={<Navigate to="/pages/admin" />}
        />
      </Routes>
      <Footy />
    </BrowserRouter>
    //</ThemeProvider>
  );
}

export default App;
