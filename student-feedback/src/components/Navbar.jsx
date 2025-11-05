// src/components/Navbar.jsx
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Brand / Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Student Feedback
        </Typography>

        {/* Navigation Buttons */}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Courses</Button>
          <Button color="inherit">Feedback</Button>
          <Button color="inherit">About</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
