import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link as RouterLink } from "react-router-dom";

export default function AppHeader({ mode, toggleTheme }) {
  const theme = useTheme();

  return (
    <AppBar position="sticky" color="primary" sx={{ mb: 3 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo / Name */}
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: 700,
            letterSpacing: 0.5,
          }}
        >
          Spandana Kona
        </Typography>

        {/* Navigation + Theme toggle */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/projects">
            Projects
          </Button>
          <Button color="inherit" component={RouterLink} to="/contact">
            Contact
          </Button>

          {/* Theme toggle */}
          <IconButton
            sx={{ ml: 1 }}
            color="inherit"
            onClick={toggleTheme}
            aria-label="toggle theme"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
