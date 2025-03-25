import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import theme from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/publications" element={<h2>Publications</h2>} />
            <Route path="/news" element={<h2>News</h2>} />
            <Route path="/blog" element={<h2>Blog</h2>} />
            <Route path="/resources" element={<h2>Resources</h2>} />
            <Route path="/contact" element={<h2>Contact Us</h2>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;