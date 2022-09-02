import React from "react";
import Header from "../utils/assets/Header";
import Sidenav from "../utils/assets/Sidenav";
import TextField from "@mui/material/TextField";

function AdminServices() {
  return (
    <>
      <Header />
      <Sidenav />
      <TextField
        label="search here..."
        sx={{ width: 300, height: 100, margin: "2% auto", marginLeft: "-60%" }}
      ></TextField>
    </>
  );
}

export default AdminServices;
