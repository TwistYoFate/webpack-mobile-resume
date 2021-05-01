import React, { useState } from 'react'
import Cover from './mobile/Components/Cover'
import Nav from './mobile/Components/Nav'


function App_mobile() {
    const [currentSection,setCurrentSection]=useState()
    
    return (
        <div>
            <Cover currentSection={currentSection}/>
            <Nav currentSection={currentSection} setCurrentSection={setCurrentSection}/>
            {/* <WorkExperience />
            <Skills />
            <Projects />
            <POR />
            <Education />
            <CertiPapers /> */}
        </div>
    )
}

export default App_mobile
