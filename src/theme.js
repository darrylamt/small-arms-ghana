import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F72828', // Pomegranate red from the style guide
    },
    secondary: {
      main: '#FOFEF4', // Hint of Green from the style guide
    },
    text: {
      primary: '#202020', // Darkest neutral for text
      secondary: '#505050', // Medium neutral for secondary text
    },
    background: {
      default: '#FOFEF4', // Hint of Green as the default background
      paper: '#FFFFFF', // White for paper elements like cards
    },
  },
  typography: {
    fontFamily: '"Epilogue", "Rubik", Arial, sans-serif',
    h1: {
      fontFamily: '"Epilogue", Arial, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Epilogue", Arial, sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Epilogue", Arial, sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Epilogue", Arial, sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Rubik", Arial, sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Rubik", Arial, sans-serif',
      fontWeight: 400,
    },
  },
});

export default theme;