import React from "react";
import "../styles/Style.css";
import Header from "../utils/assets/Header";
import Sidenav from "../utils/assets/Sidenav";
import TextField from "@mui/material/TextField";

function AdminHomePage() {
  return (
    <>
      <Header />
      <Sidenav />
      <TextField
        label="search here..."
        sx={{ width: 500, height: 100, margin: "3% auto" }}
      ></TextField>

      <div className="grid-container">
        <div className="grid-item">
          Total Assets <br />
          500
        </div>
        <div className="grid-item">
          Total Employees <br />
          500{" "}
        </div>
        <div className="grid-item">
          Broken Assets <br />
          500
        </div>
        <div className="grid-item">
          Working Assets
          <br />
          500
        </div>
        <div className="grid-item">
          Spare Assets
          <br />
          500
        </div>
      </div>
    </>
  );
}
export default AdminHomePage;
