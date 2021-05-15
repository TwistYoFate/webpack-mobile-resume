import React, { useState, useEffect, useRef } from 'react'

import springer from "../../../../assets/images/springer.jpg"
import os_py from "../../../../assets/images/os-py.png"
import crash_py from "../../../../assets/images/crash-py.png"
import codechef from "../../../../assets/images/codechef-certi-1.png"

// import CertiPapers from './CertiPapers/CertiPapers';
import '../../Styles/CertiPapers.scss'

function CertiPapers({navIndex,setNavIndex}) {
    const node = useRef();
    // const [navIndex,setNavIndex] = useState(0);
    //Run once initialization
    useEffect(()=>{
        let frames = node.current.querySelectorAll('.frame');
        let unitShift = window.getComputedStyle(document.querySelector(':root')).getPropertyValue('--width').split('v')[0];
        // setUnitShift(
        console.log(frames,unitShift);
        frames.forEach((frame,index)=>{
            frame.style.left = index * parseInt(unitShift)+"vw";
        })
    },[])

    useEffect(()=>{
        let tabs = node.current.querySelectorAll(".tab");
        tabs.forEach((tab,index)=>{
            if(index==navIndex){
                tab.classList.toggle("tab-active",true);
            }else{
                tab.classList.toggle("tab-active",false);
            }
        });
        const strip = node.current.querySelector("#strip");
        const unitShift = window.getComputedStyle(document.querySelector(':root')).getPropertyValue('--width').split('v')[0];
        strip.style.left = -navIndex * parseInt(unitShift) + 'vw';
    },[navIndex])
    
        // let frames = node.current.querySelectorAll('.frame')
        // console.log(frames);
        // frames.forEach((frame,index)=>{
        //     frame.style.left=index*uniShift+"px";
        // })


    function leftClick(e){
        e.preventDefault();
        const strip = node.current.querySelector("#strip");
        const unitShift = window.getComputedStyle(document.querySelector(':root')).getPropertyValue('--width').split('v')[0]; 
        let current = null;
        strip.style.left===""?current=0:current=strip.style.left.split('v')[0];
        if(current>=0){
            current = -(strip.childElementCount)*unitShift;
            setNavIndex(strip.childElementCount-1);
        }
        else{
            setNavIndex(navIndex-1);
        }
        console.log(current)
        strip.style.left = parseInt(current) + parseInt(unitShift) + 'vw';
        
    }

    function rightClick(e){
        e.preventDefault();
        const strip = node.current.querySelector("#strip");
        const unitShift = window.getComputedStyle(document.querySelector(':root')).getPropertyValue('--width').split('v')[0]; 
        let current = null;
            strip.style.left===""?current=0:current=parseInt(strip.style.left.split('v')[0]);
            console.log((strip.childElementCount-1)*unitShift)
            if(current<= -(strip.childElementCount-1)*unitShift){
                current = unitShift;
                setNavIndex(0);
            }
            else{
                setNavIndex(navIndex+1);
            }
            console.log(current)
            strip.style.left = parseInt(current) - parseInt(unitShift) + 'vw';
            
    }


    return (
        <section ref={node} className="CertiPapers">
            <div className="carousel grid">
                <div className="grid-item" id="title-certipapers">
                    <h2>Certificates and Published Papers</h2>
                </div>
                <div className="grid-item" id="carousel-lane">
                    <button id="left-button" onClick={(e)=>{leftClick(e)}}> <p>(</p> </button>
                    <div className="track">
                        <div id="strip">

                            <div className="frame">
                               <Frame_content display={springer} />       
                            </div>

                            <div className="frame">
                               <Frame_content display={os_py} />       
                            </div>

                            <div className="frame">
                               <Frame_content display={crash_py} />       
                            </div>

                            <div className="frame">
                               <Frame_content display={codechef} />       
                            </div>
                        
                        </div>
                    </div>
                    <button id="right-button" onClick={(e)=>rightClick(e)}> <p>)</p> </button>
                </div>

                <div className="grid-item">
                    <div className="nav">
                        <div onClick={(e)=>{setNavIndex(0)}}className="tab tab-active"></div>
                        <div onClick={(e)=>{setNavIndex(1)}}className="tab"></div>
                        <div onClick={(e)=>{setNavIndex(2)}}className="tab"></div>
                        <div onClick={(e)=>{setNavIndex(3)}}className="tab"></div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CertiPapers

function Frame_content({display}){
    return(
        <div className="Frame-content">
            <div id="left-col"></div>
            <div id="mid-col">
                <img className="img-item" src={display} />
            </div>
            <div id="right-col"></div>
        </div>
    )
}