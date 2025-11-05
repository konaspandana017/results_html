import React from "react";
import { Box, Typography, Button, Stack, Avatar } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: 3,
      }}
    >
      <Avatar
        alt="Spandana Kona"
        src="https://via.placeholder.com/150"
        sx={{ width: 150, height: 150 }}
      />
      <Typography variant="h3" fontWeight={700}>
        Spandana Kona
      </Typography>
      <Typography variant="h5" color="text.secondary">
        Computer Science Student
      </Typography>
      <Typography variant="body1" maxWidth="600px">
        I’m passionate about learning modern web technologies and building creative projects.
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          component={RouterLink}
          to="/contact"
        >
          Contact Me
        </Button>
      </Stack>
    </Box>
  );
}
