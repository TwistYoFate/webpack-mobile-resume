import React, { useState } from 'react'
import '../Styles/Navbar.scss'

function Navbar({currentSection,setCurrentSection}) {
    const [yscroll, setYscroll] = useState(0)
    window.addEventListener("scroll", ()=>{setYscroll(window.scrollY);console.log(window.scrollY)});
    return (
            <div id="nav">
            <div id="nav-list">
                    {[
                        'Work Experience',
                        'Skills',
                        'Projects',
                        'Position of Responsibility',
                        'Education',
                        'Certificates/Papers'
                    ]
                        .map((text, index) => (

                            currentSection === text
                                ?
                                (<div button key={text} onClick={() => { setCurrentSection(text) }} className="nav-item active" >
                                    {text}
                                </div>)
                                :
                                (<div button key={text} onClick={() => { setCurrentSection(text) }} className="nav-item">
                                    {text}
                                </div>)

                        ))

                    }
            </div>
            </div>
    )
}

export default Navbar
