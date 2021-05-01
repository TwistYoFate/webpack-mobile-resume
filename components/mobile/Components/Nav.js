import '../Styles/Nav.scss'
import React, { useState } from 'react'



function Nav({currentSection,setCurrentSection}) {
    const [yscroll, setYscroll] = useState(0)

    /* Open the sidenav */
    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
        console.log(document.getElementById("mySidenav").style.width)
        document.getElementById("ham").style.opacity=0;
    }
  
    /* Close/hide the sidenav */
    function closeNav() {
        document.getElementById("mySidenav"). style.width = "0";
        console.log(document.getElementById("mySidenav").style.width)
        document.getElementById("ham").style.opacity="100%";
    }

    // Show hamburger after Intro section

    function myScrollFunc() {
        if (yscroll >= 300) {
            document.getElementById("ham").style.opacity = "100%";
        } else {
            document.getElementById("ham").style.opacity = "0";
        }
    };

    window.addEventListener("scroll", ()=>{setYscroll(window.scrollY);console.log(window.scrollY);myScrollFunc()});

    return (
        <div id="nav">
            <div id="ham" onClick={openNav}>&#61;</div>
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <div>
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
                                (<div button key={text} onClick={() => { closeNav();setCurrentSection(text) }} className="item" style={{ color: "white" }}>
                                    {text}
                                </div>)
                                :
                                (<div button key={text} onClick={() => { closeNav();setCurrentSection(text) }} className="item">
                                    {text}
                                </div>)

                        ))

                    }
                </div>
            </div>
        </div>      
    )
}

export default Nav
