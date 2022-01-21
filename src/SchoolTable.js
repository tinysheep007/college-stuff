import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

class SchoolTable extends Component {
  constructor(props) {
    super(props);
  }

  createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  createSchoolData(
    schoolName,
    id,
    mid_SAT,
    acceptanceRate,
    studentSize,
    aveCostPerYear
  ) {
    return {
      schoolName,
      id,
      mid_SAT,
      acceptanceRate,
      studentSize,
      aveCostPerYear,
    };
  }

  render() {
    const { schools } = this.props;
    let empty = [];
    schools.forEach((s) => {
      empty.push(
        this.createSchoolData(
          s.name,
          s.id,
          s.mid_SAT,
          s.acceptanceRate,
          s.studentSize,
          s.aveCostPerYear
        )
      );
    });

    return (
      <div>
        table
        <div className="testing">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="school table">
              <TableHead>
                <TableRow>
                  <TableCell>School (Name)</TableCell>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="right">SAT</TableCell>
                  <TableCell align="right">Acceptance Rate</TableCell>
                  <TableCell align="right">Student Size</TableCell>
                  <TableCell align="right">Cost Per Year</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {empty.map((row) => (
                  <TableRow
                    key={row.schoolName}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.schoolName}
                    </TableCell>
                    <TableCell align="right">{row.id || "NULL"}</TableCell>
                    <TableCell align="right">{row.mid_SAT || "NULL"}</TableCell>
                    <TableCell align="right">
                      {row.acceptanceRate || "NULL"}
                    </TableCell>
                    <TableCell align="right">
                      {row.studentSize || "NULL"}
                    </TableCell>
                    <TableCell align="right">
                      {row.aveCostPerYear || "NULL"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  }
}

export default SchoolTable;
