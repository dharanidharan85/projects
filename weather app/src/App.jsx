import './App.css'
import searchicon from './assets/search.png'
import clearicon from './assets/clearicon.png'
import snowicon from './assets/snowicon.png'
import cloudicon1 from './assets/fewcloud02d.png'
import cloudicon2 from './assets/fewcloud02n.png'
import scatteredcloud2 from './assets/scatteredcloud03n.png'
import scatteredcloud1 from './assets/scatteredcloud03d.png'

import rainicon from './assets/rainicon.png'
import drizzleicon from './assets/drizzleicon.png'
import humidityicon from './assets/humidityicon.png'
import windspeed from './assets/windspeed.png'
import { useEffect, useState } from 'react'

const WeatherDetails = ({ icon, temp, place, country, lat, lon, humidity, Wind }) => {
  return (
    <>
      <div className="image">
        <img src={icon} alt="image" />
      </div>
      <div className="temp">{temp}°C</div>
      <div className="place">{place}</div>
      <div className="country">{country}</div>


      <div className='cord'>
        <div>
          <span className="lat">latitude</span>
          <span>{lat}</span>
        </div>
        <div>
          <span className="log">longitude</span>
          <span>{lon}</span>
        </div>
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humidityicon} alt="humidity" className='icon' />
          <div className="data">
            <div className="percent">{humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windspeed} alt="humidity" className='icon' />
          <div className="data">
            <div className="percent">{Wind}km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  );
};






function App() {


  
  const[inputcity,setinputcity]=useState('chennai')
  const [icon, seticon] = useState('snowicon');
  const [temp, settemp] = useState(0);
  const [place, setplace] = useState('')
  const [country, setcountry] = useState('')
  const [lat, setlat] = useState(0)
  const [lon, setlon] = useState(0)
  const [humidity, sethumidity] = useState(0)
  const [Wind, setwind] = useState(0)
  const [citynotfound,setcitynotfound]=useState(false);
  const [loading,setloading]=useState(false);
  const[error,seterror]=useState(null)

  const weatherIconMap={
    "01d":clearicon,
    "01n":clearicon,
    "02d":cloudicon1,
    "02n":cloudicon2,
    "03d":scatteredcloud1,
    "03n":scatteredcloud2,
    "04d":drizzleicon,
    "04n":drizzleicon,
    "09d":rainicon,
    "09n":rainicon,
    "10d":rainicon,
    "10n":rainicon,
    "13d":snowicon,
    "13n":snowicon,
  }


  const search=async()=>{
    setloading(true);
    let apikey ='fbdf0dde40705db5a1689c9393544977';
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${inputcity}&appid=${apikey}&units=Metric`;
    
    try {
     let res=await fetch(url);
    let data=await res.json();
    if(data.cod==='404'){
      console.log('city not found');
      setcitynotfound(true);
      setloading(false); 
      return;        
      }0

      sethumidity(data.main.humidity);
      setwind(data.wind.speed);
      settemp(Math.floor(data.main.temp));
      setplace(data.name);
      setcountry(data.sys.country);
      setlat(data.coord.lat);
      setlon(data.coord.lon);
      const weatherIconcode=data.weather[0].icon;
      seticon(weatherIconMap[weatherIconcode] || clearicon)
      setcitynotfound(false);




    } catch (error) {
  
      console.error("An error occurred:", error.message);
      seterror("An error occurred while fetching weather data.")
    }finally{
         setloading(false);
    }
  }
 
  const handleinputdata=(e)=>{
       setinputcity(e.target.value);
       console.log(e.target.value);
       }
  const handlepress=(e)=>{
    if(e.key==="Enter"){
      search();
    }

  }
useEffect(()=>{
  search()

},[])


  // https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=fbdf0dde40705db5a1689c9393544977&units=Metric



  return (
    <>
      <div className='container'>
        <div className='input-container'>
          <input type="text" className='cityinput' placeholder='Search City' onChange={handleinputdata} value={inputcity } onKeyDown={handlepress} />
          <div className="search-icon" onClick={()=>search()}>
            <img src={searchicon} alt="img" />
          </div>
        </div>
        
        {loading && <div className="loading-message">Loading...</div>}
        {error && <div className="error-message">{error}</div>}
        {citynotfound && <div className="city-not-found">City not found</div>}
        
        {!loading && !citynotfound && <WeatherDetails icon={icon} temp={temp} place={place} country={country} 
        lon={lon} lat={lat} humidity={humidity} Wind={Wind} />}

        <p className='copyright'>
          Designed by <span>Dharanidharan</span>
        </p>
      </div>

    </>
  )
}

export default App
