import React, { useEffect, useRef, useState } from 'react'
import '../../Styles/Education.scss'

function Education() {
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
        <section ref={node} className="Education">
            <div id="left-col"></div>
            <div id="mid-col">
                <div id="heading">
                    <h2>Education</h2>
                </div>
                <div class="card-array">
                    <div class="card" >
                        <div class="header" onClick={(e) => { mouseClickHandle(e) }} >
                            B.Tech in Computer Science and Engineering from ABES Engineering College(AKTU)
                    </div>
                        <div class="detail" >
                            <p>
                                80.6%
                        </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="header" onClick={(e) => { mouseClickHandle(e) }}>
                            High School Certification from The Avadh School(CBSE)
                    </div>
                        <div class="detail" >
                            <p>
                                80%
                        </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="header" onClick={(e) => { mouseClickHandle(e) }}>
                            Senior Secondary Certification from DALIMSS(CBSE)
                    </div>
                        <div class="detail" >
                            <p>
                                95%
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="right-col"></div>
        </section>
    )
}

export default Education
