// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C79CA9", // light rose gold shade
      light: "#E9D3D8",
      dark: "#A76C7B",
    },
    secondary: {
      main: "#7E4B5C",
    },
    background: {
      default: "#FDF9F9",
      paper: "#FFF9FA",
    },
  },
  shape: {
    borderRadius: 4, // rectangular card edges
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
