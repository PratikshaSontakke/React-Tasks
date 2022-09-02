import React from "react";
import "../styles/Style.css";
import Header from "../utils/assets/Header";
import Sidenav from "../utils/assets/Sidenav";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { grey } from "@mui/material/colors";

function AdminEmployeeList() {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  function createData(id: string, name: string, email: string) {
    return { id, name, email };
  }

  const rows = [
    createData("TORNT100", "John Markel", "John@gmail.com"),
    createData("TORNT101", "John Markel", "John@gmail.com"),
    createData("TORNT102", "John Markel", "John@gmail.com"),
    createData("TORNT103", "John Markel", "John@gmail.com"),
  ];
  const classes = useStyles();

  return (
    <>
      <Header />
      <Sidenav />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "10px",
        }}
      >
        <Button variant="contained" color="primary">
          Add new Employee
        </Button>{" "}
      </div>
      <div
        style={{
          marginTop: "40px",
          marginLeft: "190px",
          marginRight: "30px",
        }}
      >
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Employee ID</TableCell>
                <TableCell align="right">Name </TableCell>
                <TableCell align="right">Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default AdminEmployeeList;
