import React from 'react'
import '../styles/Toolbar/Toolbar.css'

const toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar__navigation'>
            <div className='toolbar__toggle-button'>
                {/* <DrawerToggleButton click={props.drawerClickHandler} /> */}
            </div>
            <div className='toolbar__logo'><a className='project-title'><h1>Where in the world?</h1></a></div>
            <div className='spacer'/>
            <div className='toggleTheme'>
                {/* this replaces toolbar__navigation-items */}
                {/* I should put my theme toggle component here */}

            </div>
        </nav>
    </header>
)