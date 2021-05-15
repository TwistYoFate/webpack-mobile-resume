import React from 'react'
import '../../Styles/Template.scss'

function Template() {
    return (
        <div className="Template">
            <div id="left-col"></div>
            <div id="mid-col">
            <div id="heading">
                <h2>Heading</h2>
            </div>
            <div>
                Content
            </div>
            </div>
            <div id="right-col"></div>
        </div>
    )
}

export default Template
