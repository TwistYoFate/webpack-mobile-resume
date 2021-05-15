import React, { useState } from 'react'
import Cover from './mobile/Components/Cover'
import Nav from './mobile/Components/Nav'
import './App_desktop.scss'
import './DayStyle.scss'
import './App_desktop.scss'

import face from '../assets/svg/face.svg'
import Header from './desktop/Components/Header'
import Navbar from './desktop/Components/Navbar'
import Biodata from './desktop/Components/Biodata'
import Contact from './desktop/Components/Contact'





function App_desktop() {
    const [currentSection,setCurrentSection]=useState()
    const [certipaper_navIndex,setCertipaperNavIndex]=useState(0)
    return (
        <div className="container">
            <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
            <Header />
            <Biodata currentSection={currentSection} setCurrentSection={setCurrentSection} navIndex={certipaper_navIndex} setNavIndex={setCertipaperNavIndex}/>
            <Contact />
        </div>
    )
}

export default App_desktop
