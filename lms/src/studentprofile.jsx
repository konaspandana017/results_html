import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";

// Lavender color palette
const lavenderLight = "#E6E6FA"; // Light Lavender
const lavenderDark = "#5D3A99"; // Dark Lavender
const lavenderMedium = "#8A6BBE"; // Medium Lavender

const BasicCard = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fff",  // Clean white background outside card
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Card
        sx={{
          maxWidth: 480,
          width: "100%",
          p: 4,
          borderRadius: 5,
          boxShadow: `0 10px 20px rgba(93, 58, 153, 0.3)`,
          backgroundColor: lavenderLight, // Soft lavender card background
          border: `2px solid ${lavenderDark}`,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          <Avatar
            alt="Student Profile"
            src="/profile.png"
            sx={{
              width: 110,
              height: 110,
              mr: 4,
              border: `3px solid ${lavenderMedium}`,
              boxShadow: `0 0 12px ${lavenderMedium}`,
            }}
          />
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "900",
                color: lavenderDark,
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              Spandana
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: lavenderMedium,
                fontWeight: 600,
                letterSpacing: 2,
                mt: 0.5,
                textTransform: "uppercase",
                fontStyle: "italic",
              }}
            >
              Business Analyst
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ borderColor: lavenderMedium, mb: 4 }} />

        <Box sx={{ mb: 4, lineHeight: 1.7 }}>
          {[
            { label: "Email", value: "spandana@gmail.com" },
            { label: "Phone", value: "+91 6935111489" },
            { label: "Address", value: "Banglore,India " },
            { label: "Date of Joining", value: "July 2025" },
          ].map(({ label, value }) => (
            <Typography
              key={label}
              variant="body1"
              sx={{
                color: lavenderDark,
                fontWeight: "600",
                mb: 1,
                "& strong": {
                  color: lavenderMedium,
                },
              }}
            >
              <strong>{label}:</strong> {value}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: lavenderMedium,
              color: lavenderMedium,
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: 1,
              "&:hover": {
                backgroundColor: lavenderLight,
                borderColor: lavenderDark,
                color: lavenderDark,
              },
              px: 3,
              py: 1.5,
              borderRadius: 3,
            }}
          >
            Edit Profile
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: lavenderDark,
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: 1,
              px: 3,
              py: 1.5,
              borderRadius: 3,
              boxShadow: `0 4px 10px ${lavenderDark}80`,
              "&:hover": {
                backgroundColor: lavenderMedium,
              },
            }}
          >
            Share
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default BasicCard;
