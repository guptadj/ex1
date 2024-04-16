// import './App.css';
import Alert from './components/Alert';
import Abt from './components/Abt';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [modetype, setmodetype] = useState("Enable Dark Mode")
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const Showalert =(message,type)=>{
    setalert({
        message: message,
        type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toogle = () => {
    if(mode==='light'){
      setmode("dark")
      setmodetype("Enable light Mode")
      document.body.style.backgroundColor= "grey"
      Showalert("Dark mode is Enabled", "success")
    }
    else{
      setmode("light")
      setmodetype("Enable Dark Mode")
      document.body.style.backgroundColor= "white"
      Showalert("light mode is Enabled","success")
    }
  }
const [Theme, setTheme] = useState("light")
  const theme=(event)=>{
    var element = event.target.id;
    console.log(element)

    setTheme(element)

  }





  return (
    <>

        {/* /<Navbar tital="Divyanshu" abttxt="abt_txt" modetype={modetype} mode={mode} toogle={toogle} theme={theme}  /> */}
         {/* <Alert alert={alert}/> */}
        {/* <Abt/> */}
        {/* <Textform Showalert={Showalert} heading="Entre Text to Analyse" mode={mode} Theme={Theme} />  */}
        <BrowserRouter>
        <Navbar tital="Divyanshu" abttxt="abt_txt" modetype={modetype} mode={mode} toogle={toogle} theme={theme}  />
        
        <Alert alert={alert}/>
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route path="/Abt" element={<Abt />} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <Textform
                 Showalert={Showalert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                  Theme={Theme}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
        
  );
}

export default App;
