import React, { useEffect, useRef, useState } from 'react'
import '../../Styles/Skills.scss'

function Skills({setCurrentSection,setNavIndex}) {
    const node = useRef();

    function mouseClickHandle(e) {
        e.preventDefault();
        let ele = null;
        if(e.target.classList.contains("header")){
            e.target.classList.toggle("active");
            ele = e.target.nextSibling;
        }
        else{
            ele = e.target.parentElement.nextSibling;
            e.target.parentElement.classList.toggle("active");
        }
        if (ele.style.height.split("p")[0] === "0" || (!ele.style.height)) {
            ele.style.height = ele.scrollHeight + "px";
            ele.classList.toggle('detail-open', true);
        }
        else {
            ele.style.height = "0px";
            ele.classList.toggle('detail-open', false);
        }
    }

    // function mouseEnterHandle(e){
    //     e.preventDefault();
    //     let cards = node.current.querySelectorAll('.card');
    //     for(let i=0;i<cards.length;i++){
    //         e.target.classList.toggle("active",true);
    //         const ele = e.target.nextSibling;
    //         ele.style.height = ele.scrollHeight+"px";
    //         ele.classList.toggle('detail-open',true);
    //     }
    // }

    // function mouseLeaveHandle(e){
    //     e.preventDefault();
    //     console.log(e.target)
    //     let cards = node.current.querySelectorAll('.card');
    //     for(let i=0;i<cards.length;i++){
    //         e.target.classList.toggle("active",false);
    //         const ele = e.target.nextSibling;
    //         ele.style.height = 0;
    //         ele.classList.toggle('detail-open',false);
    //     }
    // }

    return (
        <section ref={node} className="Skills">
            <div id="left-col"></div>
            <div id="mid-col">
                <div id="heading">
                    <h2>Skills</h2>
                </div>
                <div class="card-array">
                    <div class="card" >
                        <div class="header" onClick={(e) => { mouseClickHandle(e) }}>
                            <strong>Languages</strong>&nbsp;:&nbsp;C/C++ , Python, Javascript
                        </div>
                        <div class="detail" >
                            <p>
                                <strong>Based on:</strong><br />
                                C/C++ - Used for Competitive Coding / Data Structures and Algorithms <br />
                                Python - Certification Course from Google on Coursera (PFA) <br />
                                Javascript - Used for creating this portfolio and Slambook(Blogging App) using MERN stack<br />
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="header" onClick={(e) => { mouseClickHandle(e) }} >
                            <strong>Data Structures and Algorithm</strong>
                        </div>
                        <div class="detail" >
                            <p>
                                <strong>Based on:</strong><br />
                            Have done <span onClick={()=>{setCurrentSection("Certificates/Papers");setNavIndex(3);}}>Codechef Certification on Basic Datastructures and Algorithms</span> <br/> 
                            Handles:
                            &nbsp;&nbsp;<a href="https://leetcode.com/firefrost/" target="_blank" style={{textDecoration:"none",cursor:"pointer"}}>Leetcode</a>
                            {/* &nbsp;&nbsp;Codeforces */}
                            &nbsp;&nbsp;<a href="https://www.codechef.com/users/acevenom" target="_blank" style={{textDecoration:"none",cursor:"pointer"}}>Codechef</a>
                            &nbsp;&nbsp;<a href="https://auth.geeksforgeeks.org/user/firefrost/profile" target="_blank" style={{textDecoration:"none",cursor:"pointer"}}>GeeksForGeeks</a>
                            &nbsp;&nbsp;<a href="https://www.hackerrank.com/FireFrost" target="_blank" style={{textDecoration:"none",cursor:"pointer"}}>HackerRank</a>
                            &nbsp;&nbsp;<a href="https://www.hackerearth.com/@deepanshu157" target="_blank" style={{textDecoration:"none",cursor:"pointer"}}>HackerEarth</a>
                        </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="header" onClick={(e) => { mouseClickHandle(e) }} >
                            <strong>Designing</strong>&nbsp;:&nbsp;Adobe Illustrator, Adobe Photoshop, Adobe XD
                        </div>
                        <div class="detail" >
                            <p>
                                <strong>Based on:</strong><br />
                            Adobe Illustrator & Adobe Photoshop - Used for designing freelance logos, and banners, posters, flexes, i-cards, coupons in College Fest and <span style={{ color: "red" }}>TEDxABESEC-2K19</span><br />
                            Adobe XD - Used to design this website
                        </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="header" onClick={(e) => { mouseClickHandle(e) }} >
                            <strong>Front-End</strong>&nbsp;:&nbsp;React, Redux, Redux-Saga, Webpack-5, HTML5, CSS, SCSS
                        </div>
                        <div class="detail" >
                            <p>
                                <strong>Based on:</strong><br />
                            Used all of these to create this portfolio and Slambook(Blogging App)
                        </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="header" onClick={(e) => { mouseClickHandle(e) }} >
                            <strong>Back-End</strong>&nbsp;:&nbsp;Express.js, Node.js, Nodemailer, Mongoose
                        </div>
                        <div class="detail" >
                            <p>
                                <strong>Based on:</strong><br />
                            Used all of these to create Slambook(Blogging App)
                        </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="header" onClick={(e) => { mouseClickHandle(e) }} >
                            <strong>Authorization</strong>&nbsp;:&nbsp;JSON Web Tokens
                        </div>
                        <div class="detail" >
                            <p>
                                <strong>Based on:</strong><br />
                            Implemented it in Slambook(Blogging App) for Authorization
                        </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="header" onClick={(e) => { mouseClickHandle(e) }} >
                            <strong>Databases</strong>&nbsp;:&nbsp;MongoDB, MongoDB Atlas
                        </div>
                        <div class="detail" >
                            <p>
                                <strong>Based on:</strong><br />
                            Used it as database with the help of mongoose in Slambook(Blogging App)
                        </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="header" onClick={(e) => { mouseClickHandle(e) }} >
                            <strong>Cloud</strong>&nbsp;:&nbsp;AWS
                        </div>
                        <div class="detail" >
                            <p>
                                <strong>Based on:</strong><br />
                            Deployed Slambook on AWS.<br/>
                            AWS EC2 - Used as the server machine<br/>
                            AWS Route 53 - Used it for routing and mapping my Domain name to Slambook server<br/>
                            AWS SES - Used it for automated mailing services used for Password Resetting in Slambook
                        </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="header" onClick={(e) => { mouseClickHandle(e) }} >
                            <strong>Version Control</strong>&nbsp;:&nbsp;Git, Github
                        </div>
                        <div class="detail" >
                            <p>
                                {/* <strong>Based on:</strong><br /> */}
                                <a href="https://github.com/TwistYoFate" target="_blank" style={{textDecoration:"none",cursor:"pointer"}}>Github Link</a>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="right-col"></div>
        </section>
    )
}

export default Skills
