import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#F0FEF4", // Hint of Green from the style guide
          height: "400px", // Adjust height as needed
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 16px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#202020", // Darkest neutral for text
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Empowering Peace: Responsible Arms Management
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/about"
          sx={{
            backgroundColor: "#F72828", // Red from the style guide
            color: "white",
            "&:hover": {
              backgroundColor: "#d62020", // Slightly darker red on hover
            },
          }}
        >
          Learn More About Us
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
