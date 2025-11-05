import React from "react";
import { Box, Grid, Typography, Avatar, Chip, Stack, Paper } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight={700} textAlign="center" gutterBottom>
        About Me
      </Typography>

      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 2 }}
      >
        {/* Photo */}
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <Avatar
            alt="Spandana Kona"
            src="https://via.placeholder.com/200"
            sx={{ width: 200, height: 200, mx: "auto", mb: 2 }}
          />
        </Grid>

        {/* Bio + Facts */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="body1" paragraph>
              I’m a Computer Science student at <strong>KL University</strong>, interested in
              learning <strong>Generative AI</strong> and other emerging technologies. I enjoy
              exploring how intelligent systems can solve real-world problems.
            </Typography>

            <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mt: 2 }}>
              <Chip label="📍 Vijayawada, India" color="primary" variant="outlined" />
              <Chip label="🕒 Actively learning and open to internships" color="secondary" variant="outlined" />
              <Chip label="💬 English, Telugu" color="success" variant="outlined" />
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
