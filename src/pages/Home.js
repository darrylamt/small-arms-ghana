import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to the Small Arms Commission Ghana
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Committed to reducing the proliferation of small arms and promoting peace and security in Ghana.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/about"
          sx={{ mt: 2 }}
        >
          Learn More About Us
        </Button>
      </Box>
    </Container>
  );
}

export default Home;