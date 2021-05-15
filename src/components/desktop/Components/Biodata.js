import React, { useState, useEffect, useRef } from 'react'
import Skills from './Biodata/Skills'
import WorkExperience from './Biodata/WorkExperience'
import Projects from './Biodata/Projects';
import POR from './Biodata/POR';
import Education from './Biodata/Education';
// import CertiPapers from './Biodata/CertiPapers';
import '../Styles/Biodata.scss'
import CertiPapers from './Biodata/CertiPapers';

function Biodata({currentSection,setCurrentSection,navIndex,setNavIndex}) {
    useEffect(() => {
        currentSection?document.getElementById(currentSection).scrollIntoView({behaviour:"smooth"}):null;
    },[currentSection])
    return (
        <section className="Biodata">
        <div id="Work Experience"><WorkExperience /></div>
        <div id="Skills"><Skills setCurrentSection={setCurrentSection} setNavIndex={setNavIndex} /></div>
        <div id="Projects"><Projects /></div>
        <div id="Position of Responsibility"><POR /></div>
        <div id="Education"><Education /></div>
        <div id= "Certificates/Papers" ><CertiPapers navIndex={navIndex} setNavIndex={setNavIndex}/></div>
        </section>
    )
}

export default Biodata
