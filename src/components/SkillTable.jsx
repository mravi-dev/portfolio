import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(skill, language, tools, framework, level) {
  return { skill, language, tools, framework, level };
}

const rows = [
  createData("Front End", "JavaScript", "", "React", "Beginner"),
  createData("Back End", "JavaScript", "", "Express", "Beginner"),
  createData("Database", "sql", "", "", "Beginner"),
  createData("Styles", "css", "", "", "Beginner"),
  createData("Others", "", "", "", ""),
];

const SkillTable = () => {
  return (
    <TableContainer component={Paper} sx={{ width: "90%", margin: "auto" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Skills</TableCell>
            <TableCell align="right">Language</TableCell>
            <TableCell align="right">Tools</TableCell>
            <TableCell align="right">Frameworks</TableCell>
            <TableCell align="right">Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.skill}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.skill}
              </TableCell>
              <TableCell align="right">{row.language}</TableCell>
              <TableCell align="right">{row.tools}</TableCell>
              <TableCell align="right">{row.framework}</TableCell>
              <TableCell align="right">{row.level}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SkillTable;
