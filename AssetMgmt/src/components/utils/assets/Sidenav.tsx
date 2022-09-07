import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidenav.css";
const Sidenav = () => {
  return (
    <>
      <div className="sidenav">
        <div className="tab">
          <Button component={Link} to="/">
            <Typography p={2} variant="h6">
              Dashboard
            </Typography>
          </Button>
          <Button component={Link} to="/emp">
            <Typography p={2} variant="h6">
              Employee
            </Typography>
          </Button>
          <Button component={Link} to="/assetsw">
            <Typography p={2} variant="h6">
              Asset
            </Typography>
          </Button>
          <Button component={Link} to="/services">
            <Typography p={2} variant="h6">
              Services
            </Typography>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
