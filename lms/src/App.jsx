import React from "react";
import Register from "./Register";
import Homepage from "./Homepage";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

function App() {
  return (
    <>
      {/* AppBar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Career Guidance Platform
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        sx={{
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ color: "#4B0082", fontWeight: "bold" }}
        >
          Registration
        </Typography>
        <Register />
      </Box>
    </>
  );
}

export default App;
