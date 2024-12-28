


import { useEffect } from 'react';
import './App.css'
import { useState } from 'react'
import axios from 'axios';


function App() {
    const [amount,setamount]=useState('1');
    const[fromcurrency,setfromcurrency]=useState("USD");
    const[tocurrency,settocurrency]=useState("INR");
    const[updatecurrency,setupdatecurrency]=useState(null);
    const[currencyrate,setcurrencyrate]=useState();

    const handleamount = (e) =>{
      setamount((isNaN(e.target.value))?0:(e.target.value))
    }
    const handlefromcurrency =(e)=>{
      setfromcurrency(e.target.value)
    }
    const handletocurrency = (e) =>{
      settocurrency(e.target.value)
    }

    useEffect(()=>{
      const getexchangerate = async()=>{
        try {

          const url=`https://v6.exchangerate-api.com/v6/8d84e22f345d6bc5727b8a8f/latest/${fromcurrency}`
          let res = await axios.get(url);
          
          setcurrencyrate(res.data.conversion_rates[tocurrency])
          
          
        } catch (error) {
          console.log("The data get some error",error);
          
        }
      };
      getexchangerate()
      
    },[tocurrency,fromcurrency])

    useEffect(()=>{
      if(currencyrate!==null){
        setupdatecurrency((amount * currencyrate).toFixed(2))
        
        
      }
    },[amount,currencyrate])

  return (
    <>
      <div className="currency-converter">
        <div className="box"></div>
      <form>
        <div className="data">
          <h1>Currency Converter</h1>
          <div className="input-container">
            <label htmlFor="amt">Amount:</label>
            <input type="number" id='amt' value={amount} onChange={handleamount} />
          </div>
          <div className="input-container">
            <label htmlFor="fromcurrency">From Currency</label>
            <select id="fromcurrency" value={fromcurrency} onChange={handlefromcurrency} >
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="JPY">JPY - Japan Yen</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CAD">CAD - Canadian Dollars</option>
              <option value="CNY">CNY - Chinese Yen </option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="ZAR">ZAR - South African Rand</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="tocurrency">To Currency</label>
            <select id="tocurrency" value={tocurrency} onChange={handletocurrency} >
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="JPY">JPY - Japan Yen</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CAD">CAD - Canadian Dollars</option>
              <option value="CNY">CNY - Chinese Yen </option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="ZAR">ZAR - South African Rand</option>
            </select>
          </div>
          <div className="result">
           <p> {amount} {fromcurrency} is equal to {updatecurrency} {tocurrency}</p> 
          </div>
        </div>
        </form>
      </div>
    </>
  )
}

export default App
