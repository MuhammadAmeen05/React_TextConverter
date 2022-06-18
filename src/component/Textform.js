
import React,{ useState } from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
     //   console.log("for chaning into upper case "+text)
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showalert('converted into upper case','success')
    }
    const handleLOClick=()=>{
        //   console.log("for chaning into upper case "+text)
           let newtext=text.toLowerCase();
           setText(newtext);
           props.showalert('converted into Lower case','success')
       }
       
    
    const handleOnChange=(event)=>{
      //  console.log("On change")
        setText(event.target.value)
        
    }
    const[text,setText]=useState('Enter text here');
  //  setText("New Enter value")

  return (
    <>
     <div className='container' style={{color:props.mood==='dark'?'white':'black'}} >
     <h1>{props.heading}</h1>
     <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mood==='dark'?'grey':'white',color:props.mood==='dark'?'white':'black'}} id="myText" rows="6"></textarea>
    <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert UpperCase</button>
    <button className="btn btn-danger mx-3" onClick={handleLOClick}>Convert LowerCase</button>
    
    </div>
  </div>
  <div className="container" style={{color:props.mood==='dark'?'white':'black'}}>
<h1>Text Summary</h1>
<p>{text.split(" ").length-1} words and {text.length} characters</p>
<p>{0.08*text.split(" ").length} Minutes reading</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter the text to preview"}</p>
  </div>
  </>  
  )
}
