import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Carousel from '../components/Carousel';

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#F0FEF4",
          minHeight: "400px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
          alignItems: "center",
          padding: { xs: "24px 16px", md: "40px 24px" },
          gap: "24px",
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" }, // Center on mobile, left on desktop
            maxWidth: { md: "50%" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#202020",
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" }, // Smaller font on mobile
            }}
          >
            Empowering Peace: Responsible Arms Management
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/about"
            sx={{
              backgroundColor: "#F72828",
              color: "white",
              "&:hover": {
                backgroundColor: "#d62020",
              },
            }}
          >
            Learn More About Us
          </Button>
        </Box>

        {/* Carousel Section */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { md: "50%" },
            height: "300px", // Adjust height as needed
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          <Carousel />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
