// import logo from './logo.svg';
// import { isClickableInput } from '@testing-library/user-event/dist/utils';
import './App.css';
// import Navbar from './Moduess';
import Navbar from './components/Moduess';
  import Uppercasee from './components/Uppercasee';
  import About from './components/About';
  import React, { useState } from 'react';
  // import Alert from'./components/Alert';
  import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

 


function App() {
  const[smode , setsMode]=useState('light');
      // const[alerts,showalerts]=useState(null);
      // const showalert=(message,type)=>{
      //   showalerts({
      //     msg:message,
      //     typ:type
      //   })
      // }
  const tooglemode=()=>{
    if(smode==='light'){
      setsMode('dark');
      document.body.style.backgroundColor='#042743';
      // showalert("light has been enabled","success")
    }
    else{
      setsMode('light');
      document.body.style.backgroundColor='white';
      // showalert("Dark has been enabled","success")
    }
  }
  return (
    <>
    
    <Router>
        <Navbar title="TextUtils" about="About Us"mode={smode} tooglemode={tooglemode}/>
         {/* <Alert alerts={alerts}/> */}
        <div className="container">
        <Routes>
              <Route exact path="/about"element={<About/>}>
              </Route>
              <Route exact   path="/" element={<Uppercasee headding="Enter your text bellow "mode={smode}/>}>
              </Route>
          </Routes>
        {/* <About/> */}
        {/* <Uppercasee headding="Enter your text bellow "mode={smode}/> */}
        </div>
     </Router>
     </>



    
    
  );
}

export default App;
