import React,{useState} from 'react'
import '../Styles/Contact.scss'
import mail from '../../../assets/images/mail.png'
import linkedin from '../../../assets/images/linkedin.png'

function Contact() {
    const [info, setInfo] = useState(0);

    function copyToClipboard(e){
        e.preventDefault();
        navigator.clipboard.writeText(info).then(function() {
            console.log('Async: Copying to clipboard was successful!');
          }, function(err) {
            console.error('Async: Could not copy text: ', err);
          });
          setInfo("Copied!")
        setTimeout(() => {
            setInfo(0);
        }, 500);
    }

    return (
        <>
        <div className="contact">
            <div className="detail">
                <h2>Get in touch</h2>
                <img id="mail" title="Mail me" src={mail} onClick={(e)=>{e.preventDefault();window.open("https://mail.google.com/mail/?view=cm&fs=1&to=daybond007@gmail.com")}} onMouseEnter={()=>{setInfo("daybond007@gmail.com")}} />
                <img id="linkedin" title="Visit LinkedIn Profile" src={linkedin} onClick={(e)=>{e.preventDefault();window.open("https://www.linkedin.com/in/deepanshu-yadav-b89311128/")}} onMouseEnter={()=>{setInfo("https://www.linkedin.com/in/deepanshu-yadav-b89311128/")}} />
            </div>
            {
                info?<div className="show" onClick={(e)=>{copyToClipboard(e)}}>
                    {info}&nbsp;<i className="fa fa-copy" style={{color:"#0B3150"}}></i>
                </div>:null
            }
            
        </div>
        
        <div id="footer">I rest my case here &#128513;</div>
        </>
    )
}

export default Contact
