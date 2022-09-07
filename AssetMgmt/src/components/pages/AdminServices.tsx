import React from "react";
import Header from "../utils/assets/Header";
import Sidenav from "../utils/assets/Sidenav";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";

function AdminServices() {
  return (
    <>
      <Header />
      <Sidenav />
      <div
        style={{
          display: "flex",
          marginLeft: "20%",
          marginRight: "20%",
          justifyContent: "space-between",
        }}
      >
        <TextField sx={{ width: 300 }} label="search here..."></TextField>
        <FormControl sx={{ width: 300 }}>
          <InputLabel>Category</InputLabel>
          <Select>
            <MenuItem>All</MenuItem>
            <MenuItem>Software</MenuItem>
            <MenuItem>Hardware</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: 300 }}>
          <InputLabel>Status</InputLabel>
          <Select>
            <MenuItem>Inprogress</MenuItem>
            <MenuItem>Active</MenuItem>
            <MenuItem>Completed</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div
        style={{
          marginTop: "40px",
          marginLeft: "190px",
          marginRight: "30px",
        }}
      >
        <TableContainer style={{ fontSize: "100" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Ticket ID</TableCell>
                <TableCell align="right">EMP ID</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Ticket Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  1000
                </TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">TORNT101</TableCell>
                <TableCell align="right">Active</TableCell>
                <TableCell align="right">Usable</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>{" "}
      </div>
    </>
  );
}

export default AdminServices;
