import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "./components/pages/AdminHomePage";
import AdminEmployeeList from "./components/pages/AdminEmployeeList";
import AdminAssetPageSW from "./components/pages/AdminAssetPageSW";
//import AdminAssetPageHW from "./components/pages/AdminAssetPageHW";
import AdminServices from "./components/pages/AdminServices";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminHomePage />} />

        <Route path="/emp" element={<AdminEmployeeList />} />

        <Route path="/assetsw" element={<AdminAssetPageSW />} />
        <Route path="/services" element={<AdminServices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
