import "./App.css";
import { Grid } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopHeader from "./layout/topHeader";
import Home from "./pages/home";
import Footy from './layout/footerx';
import Login from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <TopHeader />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pages/login" element={<Login />} />
      </Routes>
      <Footy/>
    </BrowserRouter>
  );
};

export default App;
