import React, { useState } from 'react'
import Cover from './mobile/Components/Cover'
import Nav from './mobile/Components/Nav'
import './App_mobile.scss'


function App_mobile() {
    const [currentSection,setCurrentSection]=useState()
    
    return (
        <>
        <div className="container">
            <Cover currentSection={currentSection}/>
        </div>    
            <Nav currentSection={currentSection} setCurrentSection={setCurrentSection}/>
            {/* <WorkExperience />
            <Skills />
            <Projects />
            <POR />
            <Education />
            <CertiPapers /> */}
        </>
    )
}

export default App_mobile
