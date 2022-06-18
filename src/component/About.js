import React,{useState} from 'react'


export default function About() {
    const[btnText,setBtnText]=useState('Enable Dark mood')
 
    const [myStyle, setStyle]=useState({
        color:'white',
        backgroundColor:'black',
    })
    const changeMood=()=>{
        if(myStyle.color ==='white')
        {
            setStyle({
                color:'black',
                backgroundColor:'white'
            }
            )
            setBtnText('Enable Dark mood')
        }
       
        else{
            setStyle({
                color:'white',
                backgroundColor:'black'
            }
            )
            setBtnText('Enable light mood')
        }
    }
    return (
    <div className="container my-3" style={myStyle}>
        <h1>About Us</h1>
<div className="alert alert-primary" role="alert" style={myStyle}>
  This is a primary alert—check it out!
</div>
<div className="alert alert-secondary" role="alert" style={myStyle}>
  This is a secondary alert—check it out!
</div>
<div className="alert alert-success" role="alert" style={myStyle}>
  This is a success alert—check it out!
</div>
<div className="alert alert-danger" role="alert" style={myStyle}>
  This is a danger alert—check it out!
</div>
<div className="alert alert-warning" role="alert" style={myStyle}>
  This is a warning alert—check it out!
</div>
<div className="alert alert-info" role="alert" style={myStyle}>
  This is a info alert—check it out!
</div>
<div className="alert alert-light" role="alert"style={myStyle}>
  This is a light alert—check it out!
</div>
<div className="alert alert-dark" role="alert"style={myStyle}>
  This is a dark alert—check it out!
</div>
<div className="btn btn-primary" onClick={changeMood}>{btnText}</div>    
</div>
  )
}
