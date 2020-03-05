import React from 'react'
import { func, string } from 'prop-types'

import styled from 'styled-components'

const ToggleBtn = styled.button`
    background-color: red;
    margin-right: 0.5rem;
`

const Toggle = ({ theme, toggler }) => {
    const isLight = theme === 'light';
    
    return (
        <ToggleBtn onClick={toggler} >
            {(theme === 'light') ? "Light Mode" : "Dark Mode"}
        </ToggleBtn>
    )
}

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;