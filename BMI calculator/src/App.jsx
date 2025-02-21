
import { useState } from 'react'
import './App.css'

function App() {
 const [height,setheight]=useState('150');
 const [weight,setweight]=useState('80');
 const[bmi,setbmi]=useState(null);
 const[bmistatus,setbmistatus]=useState('')

 const handleheight=(e)=>{
  setheight(e.target.value)
 };
 const handleweight=(e)=>{
  setweight(e.target.value)
 };

 const calculatebmi=()=>{
  if(height && weight){
    const heightinmeter=height/100;
    const bmivalue = weight/(heightinmeter * heightinmeter);
    setbmi(bmivalue.toFixed(2));
    if(bmivalue<18.5){
      setbmistatus("Underweight")
    }
    else if( bmivalue>=18.5 && bmivalue<24.9 ){
      setbmistatus("Normal Weight")
    }
    else if( bmivalue>=25 && bmivalue<29.9 ){
      setbmistatus("overWeight")
    }
    else{
      setbmistatus("Obese")
    }
  }else{
    setbmi(null);
    setbmistatus('');
  }
 }

  return (
    <>
      <div className="bmi-calculator">
      
        <div className="data">
          <h1>BMI Calculator</h1>
          <div className="input-container">
            <label htmlFor="height">Height(cm):</label>
            <input type="number" name="height" id="height" value={height} onChange={handleheight} />
          </div>
          <div className="input-container">
             <label htmlFor="weight">Weight(kg):</label>
            <input type="number" name="weight" id="weight" value={weight} onChange={handleweight} />
          </div>
          <button onClick={calculatebmi}>Calculate BMI</button>
          {bmi !==null &&  (<div className="result">
            <h3>Results:</h3>
            <p>Your BMI is:{bmi}</p>
            <p>Status: {bmistatus}</p>
          </div>)}
        </div>

      </div>
    </>
  )
}

export default App
