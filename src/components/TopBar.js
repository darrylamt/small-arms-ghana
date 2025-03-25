import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Email, Phone, Facebook, Twitter, Instagram } from '@mui/icons-material';

function TopBar() {
  return (
    <Box
      sx={{
        backgroundColor: '#202020', // Dark neutral color from the style guide
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 16px'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Email fontSize="small" />
          <Typography variant="body2">
            <Link href="mailto:info@smallarmsghana.org" color="inherit" underline="hover">
              info@smallarmsghana.org
            </Link>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Phone fontSize="small" />
          <Typography variant="body2">
            <Link href="tel:+233123456789" color="inherit" underline="hover">
              +233 123 456 789
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: '8px' }}>
        <Link href="https://facebook.com" color="inherit" target="_blank">
          <Facebook fontSize="small" />
        </Link>
        <Link href="https://twitter.com" color="inherit" target="_blank">
          <Twitter fontSize="small" />
        </Link>
        <Link href="https://instagram.com" color="inherit" target="_blank">
          <Instagram fontSize="small" />
        </Link>
      </Box>
    </Box>
  );
}

export default TopBar;