import React, { useState } from 'react';
import './styles/App/App.css';

// Styled Component imports
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './components/theme'
import { GlobalStyles } from './components/global'

function App() {
  const [theme, setTheme] = useState('light')
  // the function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark')
      // otherwise, it should be light
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        {/* pass the toggle functionality to the button */}
        <button onClick={toggleTheme}>Toggle theme</button>
        <h1>it's a light theme</h1>
        <footer>
        </footer>
      </>
    </ThemeProvider>
  );
}

export default App;
