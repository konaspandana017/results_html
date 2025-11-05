import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  Stack,
  IconButton,
} from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

export default function Contact() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box
      id="contact"
      sx={{
        mt: 6,
        mb: 8,
        textAlign: "center",
        maxWidth: 600,
        mx: "auto",
      }}
    >
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Contact Me
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        I’m open to learning opportunities, internships, and collaborations.
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField label="Your Name" fullWidth required />
          <TextField label="Your Email" type="email" fullWidth required />
          <TextField
            label="Message"
            multiline
            rows={4}
            fullWidth
            required
          />
          <Button type="submit" variant="contained" size="large">
            Send Message
          </Button>
        </Stack>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Or connect with me:
        </Typography>
        <IconButton href="https://github.com" target="_blank" color="inherit">
          <GitHub />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank" color="inherit">
          <LinkedIn />
        </IconButton>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Button
          variant="outlined"
          href="/SpandanaKona_CV.pdf"
          download
        >
          Download CV
        </Button>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" onClose={handleClose}>
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}
