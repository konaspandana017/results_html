import React from "react";
import { Box } from "@mui/material";
import UserProfile from "./UserProfile";

const StudentForm = () => {
  const students = [
    { firstname: "Alexander", middlename: "James", lastname: "Carter" },
    { firstname: "Sophia", middlename: "Marie", lastname: "Johnson" },
    { firstname: "Daniel", middlename: "Lee", lastname: "Harrison" },
    { firstname: "Olivia", middlename: "Grace", lastname: "Anderson" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#ffffff", // page bg white
      }}
    >
      <UserProfile students={students} />
    </Box>
  );
};

export default StudentForm;
