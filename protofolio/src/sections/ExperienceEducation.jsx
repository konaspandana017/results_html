// src/sections/ExperienceEducation.jsx
import React from "react";
import {
  Box,
  Typography,
  Paper,
  useTheme,
  Fade,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function ExperienceEducation() {
  const theme = useTheme();

  return (
    <Fade in timeout={1000}>
      <Box
        sx={{
          mt: 8,
          py: 6,
          background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
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
          Experience & Education
        </Typography>

        <Timeline position="alternate">
          {/* Education */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  background: "linear-gradient(45deg, #2196F3, #21CBF3)",
                }}
              >
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector
                sx={{
                  background: "linear-gradient(180deg, #2196F3, #21CBF3)",
                }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={4} sx={{ p: 2, borderRadius: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  B.Tech in Computer Science & Engineering
                </Typography>
                <Typography color="text.secondary">
                  KL University, Vijayawada (2024 - 2028)
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          {/* Smart India Hackathon */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  background: "linear-gradient(45deg, #FF4081, #FF80AB)",
                }}
              >
                <EmojiEventsIcon />
              </TimelineDot>
              <TimelineConnector
                sx={{
                  background: "linear-gradient(180deg, #FF4081, #FF80AB)",
                }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={4} sx={{ p: 2, borderRadius: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  Participant - Smart India Hackathon
                </Typography>
                <Typography color="text.secondary">
                  Developed an innovative project under national innovation
                  initiative (2024)
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          {/* Open Source Contribution */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  background: "linear-gradient(45deg, #00C853, #B2FF59)",
                }}
              >
                <WorkIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={4} sx={{ p: 2, borderRadius: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  Open Source Contributor
                </Typography>
                <Typography color="text.secondary">
                  Actively contributing to AI and front-end community projects
                  on GitHub.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Fade>
  );
}
