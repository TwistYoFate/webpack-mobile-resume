import React from 'react'
import '../../Styles/Projects.scss'

function Projects() {
    return (
        <div className="Projects">
            <div id="left-col"></div>
            <div id="mid-col">
                <div id="heading">
                    <h2>Projects</h2>
                </div>
                <div id="content">
                    <div className="subheading" onClick={(e)=>{e.preventDefault();window.open("http://www.deepanshuyadav.xyz/slambook/home");}}>
                        <h3>• Slambook - MERN Stack based Blogging Webapp</h3>
                    </div>
                    <div className="we_detail">
                        <p>It is a portfolio-cum-blogging-app which I solely created to learn&nbsp;fullstack development and actually understand how things work. Things that I learned and used in this project are :
                          <br /><br />
                          &nbsp; &nbsp; &bull; <strong>Frontend :</strong> React, Redux and Redux-Saga
                          <br />
                          &nbsp; &nbsp; &bull;&nbsp;<strong>Backend&nbsp;:</strong> Express/Node.js,&nbsp;Bcrypt(Hashing), Mongoose(ODM), Nodemailer(Mailing)
                          <br />
                          &nbsp; &nbsp; &bull; <strong>Database :&nbsp;</strong>MongoDB Atlas Cloud
                          <br />
                          &nbsp; &nbsp; &bull;<strong> Authorization :</strong> Json Web Tokens (JWT)
                          <br />
                          &nbsp; &nbsp; &bull; <strong>VersionControl : </strong>Git
                          <br />
                          &nbsp; &nbsp; &bull; <strong>Deployment :</strong> AWS EC2, AWS Route 53, AWS SES
                        </p>
                    </div>
                </div>
            </div>
            <div id="right-col"></div>
        </div>
    )
}

export default Projects
