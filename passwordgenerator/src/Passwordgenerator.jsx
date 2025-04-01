import React, { useState } from 'react'

const Passwordgenerator = () => {

  const [length,setLength]=useState(8);
  const [includeUppercase,setIncludeUppercase]=useState(true);
  const [includeLowercase,setIncludeLowercase]=useState(true);
  const [includenumber,setIncludenumber]=useState(true);
  const [includesymbol,setIncludeSymbol]=useState(true);
  const [password,setpassword]=useState("");

  const generatePassword =()=>{
    let charset="";
    if(includeUppercase)charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz"; 
    if (includenumber) charset += "0123456789";
    if (includesymbol) charset += "!@#$%^&*()_+"; 
    let generatePassword="";
    console.log(charset); 
    for(let i=0;i<length;i++){
      const randomIndex=Math.floor(Math.random()*charset.length)
      generatePassword += charset[randomIndex]
    }
    setpassword(generatePassword)
  }

  const copytoclip=()=>{
    navigator.clipboard.writeText(password);
    alert("Text Copied");
  }

    
    

  return (
    <div className='password-generator'>
        <h2>Strong Password Generator</h2>
        <div className='input-group'>
            <label htmlFor='num'>Password Length:</label>
            <input type="number" id='num' value={length} onChange={(e)=>setLength(parseInt(e.target.value))}  />
        </div>
        <div className="checkbox-group">  
            <input type="checkbox" id='upper' checked={includeUppercase} onChange={(e)=>{setIncludeUppercase(e.target.checked)}} />
            <label htmlFor="upper">Include Uppercase</label>
         </div>
         <div className="checkbox-group">
            <input type="checkbox" id='Lower' checked={includeLowercase} onChange={(e)=>{setIncludeLowercase(e.target.checked)}}/>
            <label htmlFor="Lower">Include Lowercase</label>
         </div>
         <div className="checkbox-group">
            <input type="checkbox" id='numbers' checked={includenumber} onChange={(e)=>{setIncludenumber(e.target.checked)}}/>
            <label htmlFor="numbers">Include numbers</label>
         </div>
         <div className="checkbox-group">
            <input type="checkbox" id='symbol' checked={includesymbol} onChange={(e)=>{setIncludeSymbol(e.target.checked);}}/>
            <label htmlFor="symbol">Include Symbol</label>
         </div>
         <button className='generate-btn' onClick={generatePassword}>Generate Password</button>
        <div className="generated-password">
            <input type="text" readOnly value={password}/>
            <button className='copy-btn' onClick={copytoclip}>Copy</button>
        </div>
    </div>
  )
}

export default Passwordgenerator