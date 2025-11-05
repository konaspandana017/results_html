import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const UserProfile = ({ students }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: 600,
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
        backgroundColor: "#ffffff",
      }}
    >
      <Typography
        variant="h6"
        align="center"
        sx={{
          p: 2,
          fontWeight: "bold",
          color: "#4B0082", // dark purple
        }}
      >
        User Profile
      </Typography>

      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#ede7f6" }}> 
            <TableCell sx={{ fontWeight: "bold", color: "#4B0082" }}>
              First Name
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "#4B0082" }}>
              Middle Name
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "#4B0082" }}>
              Last Name
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {students.map((student, index) => (
            <TableRow key={index}>
              <TableCell sx={{ color: "#4B0082" }}>{student.firstname}</TableCell>
              <TableCell sx={{ color: "#4B0082" }}>{student.middlename}</TableCell>
              <TableCell sx={{ color: "#4B0082" }}>{student.lastname}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserProfile;
