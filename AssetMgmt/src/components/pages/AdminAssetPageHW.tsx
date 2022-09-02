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

function AdminAssetPageHW() {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  function createData(
    id: string,
    modelname: string,
    modelno: string,
    type: string,
    brand: string,
    status: string,
    usability: string
  ) {
    return { id, modelname, modelno, type, brand, status, usability };
  }

  const rows = [
    createData(
      "1",
      "Thinkpad",
      "THK252",
      "Laptop",
      "Lenovo",
      "Alloted",
      "Usable"
    ),
    createData(
      "2",
      "Thinkpad",
      "THK252",
      "Laptop",
      "Lenovo",
      "Alloted",
      "Usable"
    ),
    createData(
      "3",
      "Thinkpad",
      "THK252",
      "Laptop",
      "Lenovo",
      "Alloted",
      "Usable"
    ),
    createData(
      "4",
      "Thinkpad",
      "THK252",
      "Laptop",
      "Lenovo",
      "Alloted",
      "Usable"
    ),
    createData(
      "5",
      "Thinkpad",
      "THK252",
      "Laptop",
      "Lenovo",
      "Alloted",
      "Usable"
    ),
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

                <TableCell align="right">Model Name</TableCell>
                <TableCell align="right">Model No.</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Brand</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Usability</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.modelname}</TableCell>
                  <TableCell align="right">{row.modelno}</TableCell>
                  <TableCell align="right">{row.type}</TableCell>
                  <TableCell align="right">{row.brand}</TableCell>
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

export default AdminAssetPageHW;
