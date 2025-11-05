import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
            <TextField
  label="Email"
  type="email"
  fullWidth
  margin="normal"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  InputLabelProps={{
    sx: {
      color: "#4B0082", // Dark lavender
      "&.Mui-focused": {
        color: "#4B0082", // Dark lavender when focused
      },
    },
  }}
  sx={{
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "lavender",
      },
      "&:hover fieldset": {
        borderColor: "mediumpurple",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rebeccapurple",
      },
    },
  }}
/>
            <TextField
  label="Password"
  type="password"
  fullWidth
  margin="normal"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
  InputLabelProps={{
    sx: {
      color: "#4B0082", // Dark lavender
      "&.Mui-focused": {
        color: "#4B0082", // Dark lavender when focused
      },
    },
  }}
  sx={{
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "lavender",
      },
      "&:hover fieldset": {
        borderColor: "mediumpurple",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rebeccapurple",
      },
    },
  }}
/>
            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                backgroundColor: "#E6E6FA", // Lavender
                color: "#4B0082",            // Dark purple text
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#d8d8f0",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;
