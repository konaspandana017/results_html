import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#212121" : "#000000", // dark gray or pure black navbar
      },
      secondary: {
        main: "#424242", // slightly lighter gray accent
      },
      background: {
        default: mode === "light" ? "#f5f5f5" : "#0a0a0a",
        paper: mode === "light" ? "#ffffff" : "#121212",
      },
      text: {
        primary: mode === "light" ? "#000000" : "#ffffff",
        secondary: mode === "light" ? "#424242" : "#bdbdbd",
      },
    },
    typography: {
      fontFamily: "'Poppins', 'Roboto', sans-serif",
      h4: { fontWeight: 600 },
      h5: { fontWeight: 500 },
      body1: { lineHeight: 1.7 },
    },
  });
