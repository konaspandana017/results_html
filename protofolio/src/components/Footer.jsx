import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = "October 2025";

  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        py: 3,
        textAlign: "center",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Stack direction="row" justifyContent="center" spacing={3} sx={{ mb: 1 }}>
        <Link href="/" underline="hover" color="inherit">
          Home
        </Link>
        <Link href="/projects" underline="hover" color="inherit">
          Projects
        </Link>
        <Link href="/contact" underline="hover" color="inherit">
          Contact
        </Link>
      </Stack>

      <Typography variant="body2" color="text.secondary">
        © {currentYear} Spandana Kona — All rights reserved.
      </Typography>

      <Typography variant="caption" color="text.secondary" display="block">
        Last updated: {lastUpdated}
      </Typography>
    </Box>
  );
}
