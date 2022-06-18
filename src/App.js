
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform'
import React,{useState} from 'react'
import Alert from './component/Alert';
function App() {
  const[mode,setmode]=useState('dark');
  const[alert,setalert]=useState(null);
  const showalert=(message, type)=>{
    setalert({
     msg:message,
     type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const tooglemode=()=>{
 if(mode==='light'){
  setmode('dark')
  document.body.style.backgroundColor='gray'
  showalert('Dark mood has been enable ','success')
 } 
 else{
  setmode('light')
  document.body.style.backgroundColor='white'
  showalert('light mood has been enable ','success')
 }
}
  return (
   
    <> 
  <Navbar tittle="TextConverter" AboutText="Services" mood={mode} tooglemode={tooglemode}/>
  <Alert Alert={alert}/>
  <div className="container my-3">
 <Textform  showalert={showalert}heading="Enter the text to analyize"  mood={mode}/>
  </div>
    </>
    );
}

export default App;
