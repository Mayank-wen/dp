import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import Recipes from "./Components/Recipes";
import Menu from "./Components/Menu";
import FixedImage from "./Components/FixedImage";
import Reservation from "./Components/Reservation";
import Footer from "./Components/Footer";
import CopyRight from "./Components/CopyRight";
import DataDisplay from "./Components/DataDisplay";
import "./ex.css";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/DataDisplay" element={<DataDisplay />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <AboutUs />
        <Recipes />
        <Menu />
        <FixedImage />
        <Reservation />
        <Footer />
        <CopyRight />
      </div> */}
    </Router>
  );
}

export default App;

{
  /* <Header />

<FixedImage />

<Footer />
<CopyRight / */
}
