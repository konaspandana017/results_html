import React from "react";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useThemeMode from "./hooks/useThemeMode";
import { getTheme } from "./theme/theme";
import AppHeader from "./components/AppHeader";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import ExperienceEducation from "./sections/ExperienceEducation";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

import Projects from "./sections/Projects";

import About from "./sections/About";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExperienceEducation />
      <Footer />
      <Contact />



    </>
  );
}



export default function App() {
  const { mode, toggle } = useThemeMode();
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppHeader mode={mode} toggleTheme={toggle} />
        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}
