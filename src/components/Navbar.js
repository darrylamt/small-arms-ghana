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
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Small Arms Commission Logo"
            style={{ height: "80px", marginRight: "8px" }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "white", fontWeight: "bold" }}
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
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem component={Link} to="/">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem component={Link} to="/about">
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem component={Link} to="/publications">
                <ListItemText primary="Publications" />
              </ListItem>
              <ListItem component={Link} to="/news">
                <ListItemText primary="News" />
              </ListItem>
              <ListItem component={Link} to="/blog">
                <ListItemText primary="Blog" />
              </ListItem>
              <ListItem component={Link} to="/resources">
                <ListItemText primary="Resources" />
              </ListItem>
              <ListItem component={Link} to="/contact">
                <ListItemText primary="Contact Us" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
