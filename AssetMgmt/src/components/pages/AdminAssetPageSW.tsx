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

function AdminAssetPageSW() {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  function createData(
    id: string,
    serialno: number,
    name: string,
    status: string,
    usability: string
  ) {
    return { id, serialno, name, status, usability };
  }

  const rows = [
    createData("TORNT101", 159, "John Markel", "Allocated", "usable"),
    createData("TORNT102", 159, "John Markel", "Allocated", "usable"),
    createData("TORNT103", 159, "John Markel", "Allocated", "usable"),
    createData("TORNT104", 159, "John Markel", "Allocated", "usable"),
    createData("TORNT105", 159, "John Markel", "Allocated", "usable"),
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
          Add new Asset
        </Button>{" "}
      </div>
      <div className="btn-group">
        <button>Software</button>
        <button>Hardware</button>
      </div>
      <div
        style={{
          marginTop: "40px",
          marginLeft: "190px",
          marginRight: "30px",
        }}
      >
        <TableContainer style={{ fontSize: "100" }}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Serial No.</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Usability</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.serialno}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.serialno}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.usability}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>{" "}
      </div>
    </>
  );
}

export default AdminAssetPageSW;
