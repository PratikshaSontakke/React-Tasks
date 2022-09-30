import { Paper } from "@mui/material";
import { Tabs, Tab } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Paper>
        <Tabs indicatorColor="secondary" textColor="primary" centered>
          <Tab label="Home" component={Link} to="/" />
          <Tab label="Shop" component={Link} to="/shop" />
          <Tab label="Cart" component={Link} to="/cart" />
          <Tab label="Wishlist" component={Link} to="/wishlist" />
          <Tab label="Admin" component={Link} to="/admin" />
        </Tabs>
      </Paper>
    </>
  );
}

export default Navbar;
