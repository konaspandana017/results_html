import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Paper,
} from "@mui/material";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 3,
          backgroundColor: "#ffffff",
        }}
      >
        <Box component="form" onSubmit={handleRegister}>
          <TextField
            label="First Name"
            name="firstName"
            fullWidth
            margin="normal"
            value={formData.firstName}
            onChange={handleChange}
            required
            InputLabelProps={{
              sx: {
                color: "#7C6FC4",
                "&.Mui-focused": { color: "#7C6FC4" },
              },
            }}
          />
          <TextField
            label="Last Name"
            name="lastName"
            fullWidth
            margin="normal"
            value={formData.lastName}
            onChange={handleChange}
            required
            InputLabelProps={{
              sx: {
                color: "#7C6FC4",
                "&.Mui-focused": { color: "#7C6FC4" },
              },
            }}
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
            InputLabelProps={{
              sx: {
                color: "#7C6FC4",
                "&.Mui-focused": { color: "#7C6FC4" },
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
            InputLabelProps={{
              sx: {
                color: "#7C6FC4",
                "&.Mui-focused": { color: "#7C6FC4" },
              },
            }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            fullWidth
            margin="normal"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            InputLabelProps={{
              sx: {
                color: "#7C6FC4",
                "&.Mui-focused": { color: "#7C6FC4" },
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 3,
              backgroundColor: "#E6E6FA",
              color: "#4B0082",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#d8d8f0" },
            }}
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;
