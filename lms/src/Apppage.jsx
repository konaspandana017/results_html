import React from "react";
import Homepage from "./Homepage";
import { Box, Typography, Container } from "@mui/material";

function Apppage() {
  return (
    <>
      <Homepage />
<Box
  sx={{
    backgroundColor: "#ffffff", // ✅ Pure white
    minHeight: "100vh",
    py: 4,
  }}
>
  {/* Profile card here */}
</Box>

      
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
            flexDirection: "column",
            gap: 2,
          }}
        >
         
        </Container>
      </Box>
    </>
  );
}

export default Apppage;
