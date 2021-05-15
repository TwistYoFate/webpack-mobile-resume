import React,{useState,useEffect} from 'react'
import reactDOM from 'react-dom'
import App_mobile from './components/App.mobile'
import App_desktop from './components/App.desktop'
import Loading from './components/Loading'


function App() {
    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)
    const [isMobile,setIsMobile]=useState(false);
    // const [windowWidth,setWindowWidth]=useState(window.innerWidth);
    const [isLoading,setIsLoading]=useState(true);
    setTimeout(()=>{
        setIsLoading(false);
    },3000);
    return (
        <>
        {
            isLoading?<Loading />:(isMobileDevice?<App_mobile />:<App_desktop />)
        }
        </>
    )
}
reactDOM.render(<App />, document.getElementById("root"));




//HOT Module Reload for Fast Development
if (module.hot) {
    module.hot.accept()
}
