import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import logo from "../assets/logo.jpg"; // Import the logo
import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  return (
    <AppBar
      position="static"
      sx={{
        padding: 0,
        margin: 0,
        width: "100%",
        boxSizing: "border-box",
        "& .MuiToolbar-root": { padding: 0, margin: 0 },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          padding: 0,
          margin: 0,
          minWidth: 0,
          width: "100%",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", margin: 0, padding: 0 }}
        >
          <img
            src={logo}
            alt="Small Arms Commission Logo"
            style={{
              height: "80px",
              marginRight: "8px",
              marginLeft: 0,
              padding: 0,
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "white",
              fontWeight: "bold",
              display: { xs: "none", sm: "block" },
            }}
          >
            Small Arms Commission Ghana
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ color: "white" }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{ color: "white" }}
          >
            About Us
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/publications"
            sx={{ color: "white" }}
          >
            Publications
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/news"
            sx={{ color: "white" }}
          >
            News
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/blog"
            sx={{ color: "white" }}
          >
            Blog
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/resources"
            sx={{ color: "white" }}
          >
            Resources
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contact"
            sx={{ color: "white" }}
          >
            Contact Us
          </Button>
        </Box>
        <IconButton
          color="inherit"
          edge="end"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              width: 250,
              backgroundColor: "#303030", // Dark background to match TopBar
              height: "100%",
              color: "white",
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <Box sx={{ p: 2, borderBottom: "1px solid #505050" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Menu
              </Typography>
            </Box>
            <List>
              <ListItem
                component={Link}
                to="/"
                sx={{
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "#F72828", // Red on hover
                    color: "white",
                  },
                }}
              >
                <ListItemText primary="Home" sx={{ color: "white" }} />
              </ListItem>
              <ListItem
                component={Link}
                to="/about"
                sx={{
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "#F72828",
                    color: "white",
                  },
                }}
              >
                <ListItemText primary="About Us" sx={{ color: "white" }} />
              </ListItem>
              <ListItem
                component={Link}
                to="/publications"
                sx={{
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "#F72828",
                    color: "white",
                  },
                }}
              >
                <ListItemText primary="Publications" sx={{ color: "white" }} />
              </ListItem>
              <ListItem
                component={Link}
                to="/news"
                sx={{
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "#F72828",
                    color: "white",
                  },
                }}
              >
                <ListItemText primary="News" sx={{ color: "white" }} />
              </ListItem>
              <ListItem
                component={Link}
                to="/blog"
                sx={{
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "#F72828",
                    color: "white",
                  },
                }}
              >
                <ListItemText primary="Blog" sx={{ color: "white" }} />
              </ListItem>
              <ListItem
                component={Link}
                to="/resources"
                sx={{
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "#F72828",
                    color: "white",
                  },
                }}
              >
                <ListItemText primary="Resources" sx={{ color: "white" }} />
              </ListItem>
              <ListItem
                component={Link}
                to="/contact"
                sx={{
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "#F72828",
                    color: "white",
                  },
                }}
              >
                <ListItemText primary="Contact Us" sx={{ color: "white" }} />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
