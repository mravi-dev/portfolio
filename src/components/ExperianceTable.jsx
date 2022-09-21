import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(projects, language, tools, date, type) {
  return { projects, language, tools, date, type };
}

const rows = [
  createData(
    "Sampark",
    "JavaScript",
    "React, Express, MongoDB",
    "20-09-2022",
    "Web"
  ),
  createData(
    "Disconnection Dashboard",
    "JavaScript",
    "React, Express, MongoDB",
    "12-09-2022",
    "Web"
  ),
  createData(
    "LogIn SignUp",
    "javascript",
    "React, React-Router, Express",
    "",
    "Web"
  ),
  createData("Load Calculator", "javascript", "", "", "Web"),
  createData("Others", "", "", "", ""),
];

const ExperianceTable = () => {
  return (
    <TableContainer component={Paper} sx={{ width: "90%", margin: "auto" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Projects</TableCell>
            <TableCell align="right">Language</TableCell>
            <TableCell align="right">Tools</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.projects}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.projects}
              </TableCell>
              <TableCell align="right">{row.language}</TableCell>
              <TableCell align="right">{row.tools}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExperianceTable;
