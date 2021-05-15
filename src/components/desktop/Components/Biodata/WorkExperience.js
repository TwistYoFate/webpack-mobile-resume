import React from 'react'
import '../../Styles/WorkExperience.scss'

function WorkExperience() {
    return (
        <div className="WorkExperience" >
            <div id="left-col"></div>
            <div id="mid-col">
                <div id="heading">
                    <h2>Work Experience</h2>
                </div>
                <div id="content">
                    <div className="subheading">
                        <h3>NEC Corporation (Jan-2020 - Current)</h3>
                    </div>
                    <div className="we_detail">
                        <p>
                        In NEC I have had exposure to Telecom Domain, where I learned a lot about a vast variety of latest and rare technologies and domains like,
                        Networking, Virtualization,Virtual Machines, Hypervisors, Cloud, Containers, Data Center, 
                        Telecommunication.
                        </p>
                    </div>
                </div>
            </div>
            <div id="right-col"></div>
        </div>
    )
}

export default WorkExperience
