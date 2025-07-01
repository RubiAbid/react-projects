import React,{useState,useEffect} from "react"
import "./App.css"

function App(){
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [city, setCity] = useState("Karachi");


function fetchingWeather(city){
    setLoading(true)
    setError("")
      
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3eb2c6b8ce9c69d82c07cc82751482c9&units=metric`)
    .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      

      .then((data)=>{
        setWeather(data)
        setLoading(false);
      })




    .catch((error)=>{
      setError(error.message)
 setLoading(false);
    });
  }

  useEffect(()=>{
    fetchingWeather(city);
  },[])
  return(
    <div classname="body">
      <h1>Weather App</h1>

      <div className="inputbtn">
  <input
    type="text"
    value={city}
    onChange={(e) => setCity(e.target.value)}
  />

  <button
    onClick={() => {
      fetchingWeather(city);
    }}
  >
    Search
  </button>
</div>


{error && <p>{error}</p>}
{loading && <p>loading...</p>}

  {weather &&
  <div>
    <h1>Data</h1>
  <h2>{weather.name}</h2>
  <p>Temperature: {weather.main.temp}</p>
  <p>Humidity: {weather.main.humidity}</p>
  <p>Wind Speed: {weather.wind.speed}</p>
  <p>Condition:{weather.weather[0].description}</p>
</div>
}


    </div>
  )}




export default App;