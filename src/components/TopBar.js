import React from "react";
import { Box, Typography, Link } from "@mui/material";
import {
  Email,
  Phone,
  Facebook,
  Twitter,
  Instagram,
} from "@mui/icons-material";

function TopBar() {
  return (
    <Box
      sx={{
        backgroundColor: "#303030",
        color: "white",
        display: { xs: "block", sm: "flex" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", sm: "center" },
        padding: { xs: "8px 16px", sm: "10px 24px" },
        borderBottom: "1px solid #505050",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          alignItems: "center",
          gap: { xs: "8px", sm: "16px" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Email fontSize="small" />
          <Typography variant="body2">
            <Link
              href="mailto:info@smallarmsghana.org"
              color="inherit"
              underline="hover"
            >
              info@smallarmsghana.org
            </Link>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Phone fontSize="small" />
          <Typography
            variant="body2"
            sx={{
              animation: "flash 1.5s infinite",
              "@keyframes flash": {
                "0%": { color: "white" },
                "50%": { color: "#F72828" }, // Red from the style guide
                "100%": { color: "white" },
              },
            }}
          >
            <Link href="tel:+233123456789" color="inherit" underline="hover">
              +233 123 456 789
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "8px", mt: { xs: "8px", sm: "0" } }}>
        <Link href="https://facebook.com" color="inherit" target="_blank">
          <Facebook
            fontSize="small"
            sx={{
              transition: "transform 0.3s ease, color 0.3s ease",
              "&:hover": {
                transform: "scale(1.2)", // Scale up by 20% on hover
                color: "#F72828", // Red from the style guide
              },
            }}
          />
        </Link>
        <Link href="https://twitter.com" color="inherit" target="_blank">
          <Twitter
            fontSize="small"
            sx={{
              transition: "transform 0.3s ease, color 0.3s ease",
              "&:hover": {
                transform: "scale(1.2)",
                color: "#F72828",
              },
            }}
          />
        </Link>
        <Link href="https://instagram.com" color="inherit" target="_blank">
          <Instagram
            fontSize="small"
            sx={{
              transition: "transform 0.3s ease, color 0.3s ease",
              "&:hover": {
                transform: "scale(1.2)",
                color: "#F72828",
              },
            }}
          />
        </Link>
      </Box>
    </Box>
  );
}

export default TopBar;
