import React from 'react'
import reactDOM from 'react-dom'
import App_mobile from './components/App.mobile'



function App(){
    // const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)
    return(
        <>
            <App_mobile/>        
        </>
    )
}
reactDOM.render(<App />,document.getElementById("root"));




//HOT Module Reload for Fast Development
if(module.hot){
    module.hot.accept()
}
