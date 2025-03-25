import React from 'react';
import { Container, Typography, Box, Tabs, Tab } from '@mui/material';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

// Subpages for About Us
const WhoWeAre = () => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      Who We Are
    </Typography>
    <Typography variant="body1" paragraph>
      The Small Arms Commission of Ghana is a governmental body established to address the proliferation of small arms and light weapons in the country. We work to promote peace, security, and development by regulating the use and trade of small arms.
    </Typography>
  </Box>
);

const OurMission = () => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      Our Mission
    </Typography>
    <Typography variant="body1" paragraph>
      Our mission is to reduce the proliferation of small arms through education, regulation, and community engagement, ensuring a safer Ghana for all.
    </Typography>
  </Box>
);

const OurVision = () => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      Our Vision
    </Typography>
    <Typography variant="body1" paragraph>
      We envision a Ghana free from the threats of small arms, where peace and security enable sustainable development and prosperity.
    </Typography>
  </Box>
);

const Leadership = () => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      Leadership
    </Typography>
    <Typography variant="body1" paragraph>
      Our leadership team comprises experts in security, policy, and community development, dedicated to achieving our goals.
    </Typography>
  </Box>
);

const Partners = () => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      Partners
    </Typography>
    <Typography variant="body1" paragraph>
      We collaborate with local and international organizations, including the United Nations, to combat the spread of small arms.
    </Typography>
  </Box>
);

function About() {
  const location = useLocation();
  const currentTab = location.pathname.split('/').pop() || 'who-we-are';

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Tabs
        value={currentTab}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 4 }}
      >
        <Tab
          label="Who We Are"
          value="who-we-are"
          component={Link}
          to="/about/who-we-are"
        />
        <Tab
          label="Our Mission"
          value="our-mission"
          component={Link}
          to="/about/our-mission"
        />
        <Tab
          label="Our Vision"
          value="our-vision"
          component={Link}
          to="/about/our-vision"
        />
        <Tab
          label="Leadership"
          value="leadership"
          component={Link}
          to="/about/leadership"
        />
        <Tab
          label="Partners"
          value="partners"
          component={Link}
          to="/about/partners"
        />
      </Tabs>
      <Routes>
        <Route path="who-we-are" element={<WhoWeAre />} />
        <Route path="our-mission" element={<OurMission />} />
        <Route path="our-vision" element={<OurVision />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="partners" element={<Partners />} />
        <Route path="/" element={<WhoWeAre />} /> {/* Default subpage */}
      </Routes>
    </Container>
  );
}

export default About;