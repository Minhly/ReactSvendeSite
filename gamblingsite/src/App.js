import "./App.css";
import { Grid } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TopHeader from "./layout/topHeader";
import Home from "./pages/home";
import Footy from "./layout/footerx";
import Login from "./pages/login";
import Admin from "./pages/admin";
import Register from "./pages/register";

function App() {
  return (
    <BrowserRouter>
      <TopHeader />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pages/login" element={<Login />} />
        <Route exact path="/pages/admin" element={<Admin />} />
        <Route exact path="/pages/register" element={<Register />} />
        <Route exact path="/pages/login" element={<Navigate to="/pages/admin" />} />
      </Routes>
      <Footy />
    </BrowserRouter>
  );
}

export default App;
