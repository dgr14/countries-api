import React, { useState } from 'react';

// Styled Component imports
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './components/theme'
import { GlobalStyles } from './components/global'
import styled from 'styled-components'

import Toolbar from './components/Toolbar/Toolbar'

const ProjectContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`

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
        <ProjectContainer>
          {/* pass the toggle functionality to the button */}
          <Toolbar theme={theme} toggler={toggleTheme} />
          
          <main>
            {/* this is where main code will go, nav bar and footer will be below */}
          </main>

          <footer>

          </footer>
        </ProjectContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
