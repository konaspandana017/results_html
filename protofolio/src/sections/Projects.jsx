// src/sections/Projects.jsx
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Fade,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Projects() {
  const projects = [
    {
      icon: <WorkIcon fontSize="large" color="primary" />,
      title: "Career Guidance & Counseling Platform",
      description:
        "An AI-powered platform that provides personalized career suggestions, counseling sessions, and guidance for students based on interests and skills.",
      link: "#",
    },
    {
      icon: <AgricultureIcon fontSize="large" color="success" />,
      title: "AI Crop Suggestion System",
      description:
        "Smart system using machine learning to recommend best-suited crops based on soil type, weather, and region to maximize yield.",
      link: "#",
    },
    {
      icon: <GitHubIcon fontSize="large" color="secondary" />,
      title: "Open Source Contributions",
      description:
        "Active contributor to various open-source repositories, enhancing AI, front-end frameworks, and Java-based projects on GitHub.",
      link: "https://github.com",
    },
  ];

  return (
    <Fade in timeout={1000}>
      <Box sx={{ mt: 8, py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 4,
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          Projects
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  borderRadius: 3,
                  boxShadow: 4,
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-10px)" },
                }}
              >
                <CardContent>
                  {project.icon}
                  <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }} color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button
                    size="small"
                    href={project.link}
                    target="_blank"
                    sx={{
                      textTransform: "none",
                      fontWeight: "bold",
                    }}
                  >
                    View More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fade>
  );
}
