import React from 'react'
// import { Redirect } from 'react-router'
import '../Styles/Data.scss'
// import "../../../src/images/springer.jpg"
// import springer from '../../../src/images/springer.jpg'
// import '../../../public/certis/os-py.png'
// import '../../../public/certis/crash-py.png'
// import '../../../public/certis/codechef-certi-1.png'

function Data() {
    return (
        <div id="data">
            <div className="item" id='Work Experience'>
                <h4>Work Experience</h4>
                <h5> NEC Corporation (Jan-2020 - Current)</h5>
                <p>In NEC I have had exposure to Telecom Domain, where I learned a lot about a vast variety of latest and rare technologies and domains like,
                Networking, Virtualization,Virtual Machines, Hypervisors, Cloud, Containers, Data Center,
                Telecommunication.
            </p>
            </div>


            <div className="item" id='Skills'>
                <h4>Skills</h4>
                {/* <h5> NEC Corporation (Jan-2020 - Current)</h5> */}
                <p>&bull; <strong>Languages&nbsp; :&nbsp;&nbsp;</strong>Python, Javascript, C/C++</p>
                <p>&bull;<strong> Front&nbsp;End&nbsp; :&nbsp;&nbsp;</strong>HTML5,&nbsp;CSS3,&nbsp;Material-UI,&nbsp;React&nbsp;with&nbsp;Redux&nbsp;&amp; Redux-SAGA</p>
                <p>&bull; <strong>Back End&nbsp; :&nbsp;&nbsp;</strong>Express/Node.js , Nodemailer, Tinymce-react</p>
                <p>&bull; <strong>Database&nbsp; :&nbsp;&nbsp;</strong>MongoDB, MongoDB Atlas</p>
                <p>&bull; <strong>Designing&nbsp; :&nbsp;&nbsp;</strong>Adobe&nbsp;Photoshop,&nbsp;Adobe&nbsp;Illustrator</p>
                <p>&bull; <strong>Others&nbsp; :&nbsp; </strong>Jira, VMware ESXI 5.5</p>
            </div>


            <div className="item" id='Projects'>
                <h4>Projects</h4>
                <h5>• Slambook - MERN Stack based Blogging Webapp</h5>
                <p>It is a portfolio-cum-blogging-app which I solely created to learn&nbsp;fullstack development and actually understand how things work. Things that I learned and used in this project are :
                    <br /><br />
                    &bull; <strong>Frontend :</strong> React, Redux and Redux-Saga
                    <br />
                    &bull;&nbsp;<strong>Backend&nbsp;:</strong> Express/Node.js,&nbsp;Bcrypt(Hashing), Mongoose(ODM), Nodemailer(Mailing)
                    <br />
                    &bull; <strong>Database :&nbsp;</strong>MongoDB Atlas Cloud
                    <br />
                    &bull;<strong> Authorization :</strong> Json Web Tokens (JWT)
                    <br />
                    &bull; <strong>VersionControl : </strong>Git
                    <br />
                    &bull; <strong>Deployment :</strong> AWS EC2, AWS Route 53, AWS SES
                </p>
            </div>

            <div className="item" id='Position of Responsibility'>
                <h4>Positions of Responsibility</h4>
                {/* <h5>• Slambook - MERN Stack based Blogging Webapp</h5> */}
                <p>•Manager Graphics Design in GENERO2K19 (College Fest)<br/><br/>
                •Organised <span style={{color:"red"}}>TEDxABESEC-2019</span> as Production Head and Designer
                </p>
            </div>

            <div className="item" id='Education'>
                <h4>Education</h4>
                {/* <h5>• Slambook - MERN Stack based Blogging Webapp</h5> */}
                <p>B.Tech in Computer Science and Engineering from ABES Engineering College(AKTU)<br/><strong style={{fontSize:"70px"}}>80.6%</strong><br/><br/><br/>
                High School Certification from The Avadh School(CBSE)<br/><strong style={{fontSize:"70px"}}>80%</strong><br/><br/><br/>
                Senior Secondary Certification from DALIMSS(CBSE)<br/><strong style={{fontSize:"70px"}}>95%</strong><br/><br/><br/>
                </p>
            </div>

            <div className="item" id='Certificates/Papers'>
                <h4>Certificates/Papers</h4>
                <img src="../../../src/images/springer.jpg" height="50%" width="100%"/><br /><br /><br />
                <img src="../../../src/images/os-py.png" height="50%" width="100%"/><br /><br /><br />
                <img src="../../../src/images/crash-py.png" height="50%" width="100%"/><br /><br /><br />
                <img src="../../../src/images/codechef-certi-1.png" height="50%" width="100%"/><br /><br /><br />
            </div>
            
        </div>
    )
}

export default Data
