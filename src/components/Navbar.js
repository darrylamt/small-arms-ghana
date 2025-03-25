import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import logo from '../assets/logo.jpg'; // Import the logo

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <img
          src={logo}
          alt="Small Arms Commission Logo"
          style={{ height: '100px', marginRight: '5px' }} // Adjust size and spacing
        />
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'white', fontWeight: 'bold' }}>
          Small Arms Commission Ghana
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/" sx={{ color: 'white' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about" sx={{ color: 'white' }}>
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/publications" sx={{ color: 'white' }}>
            Publications
          </Button>
          <Button color="inherit" component={Link} to="/news" sx={{ color: 'white' }}>
            News
          </Button>
          <Button color="inherit" component={Link} to="/blog" sx={{ color: 'white' }}>
            Blog
          </Button>
          <Button color="inherit" component={Link} to="/resources" sx={{ color: 'white' }}>
            Resources
          </Button>
          <Button color="inherit" component={Link} to="/contact" sx={{ color: 'white' }}>
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;