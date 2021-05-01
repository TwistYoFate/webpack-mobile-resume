import React from 'react'

function ResumeSection() {
    return (
        <div>
            {/* //Intro */}
            <div id="brandx"><svg xmlns="http://www.w3.org/2000/svg" width="134" height="187" viewBox="0 0 134 187">
                <g id="brand" transform="translate(-413.013 -392.042)">
                    <text id="DEE" transform="translate(413.013 457.042)" fill="#fae3ad" font-size="69" font-family="Raleway-Bold, Raleway" font-weight="700"><tspan x="0" y="0">DEE</tspan></text>
                    <text id="PAN" transform="translate(413.013 511.042)" fill="#fae3ad" font-size="66" font-family="Raleway-Bold, Raleway" font-weight="700"><tspan x="0" y="0">PAN</tspan></text>
                    <text id="SHU" transform="translate(414.013 564.042)" fill="#fae3ad" font-size="63" font-family="Raleway-Bold, Raleway" font-weight="700"><tspan x="0" y="0">SHU</tspan></text>
                </g>
            </svg>
            </div>
            <div id="poly-headerx">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1257.619 463.024">
                    <path id="poly-header" d="M2242.406,2160l389.344,272.175L1375.944,2621.943V2160Z" transform="translate(-1375.444 -2159.5)" fill="#597588" stroke="#707070" stroke-width="1" />
                </svg>
            </div>
            {/* //Text */}
            <Typography id="intro" variant="body2" display="block" align="left" >
                    Do you want to work with someone who you could trust ? Someone who gives his all when doing something he likes ?
                    Well, you've come to the right page.
                    <br/>
                    <br/>
                    Out of many things that I love doing Solving Problems, Coding and Playing Chess are among the latest.
                    What I believe from my experience, and inputs from my peers is that I am good both Creatively and Technically.
                    So if you want to work with me, do check out my resume below.
                    <br />
                    <br />
                    Also checkout Slambook - A Blogging website by me based on MERN stack by clicking &nbsp; 
                    <Link to="/slambook/home"
                    style={{color:"#0B3150",backgroundColor:"#FAE3AD",padding:"5px 20px 5px 20px",borderRadius:"20px",textDecoration:0}}
                    >
                    here
                    </Link>. 
                    </Typography>
        </div>
    )
}

export default ResumeSection
