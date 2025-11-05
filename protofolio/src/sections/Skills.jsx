import React from "react";
import { Box, Typography, Chip, Grid, Paper } from "@mui/material";

const skills = [
  { category: "Frontend", items: ["HTML", "CSS", "React"] },
  { category: "Programming", items: ["Java"] },
  { category: "Tools", items: ["Git"] },
];

export default function Skills() {
  return (
    <Box sx={{ my: 8 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Skills
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skills.map((group) => (
          <Grid item xs={12} md={4} key={group.category}>
            <Paper sx={{ p: 3, textAlign: "center" }} elevation={3}>
              <Typography variant="h6" gutterBottom>
                {group.category}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1 }}>
                {group.items.map((skill) => (
                  <Chip key={skill} label={skill} color="primary" variant="outlined" />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
