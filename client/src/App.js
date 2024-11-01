import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddCity from './components/AddCity';
import Weather from './components/Weather';
import ShowWeather from './components/ShowWeather';

function App() {
  const [city, setCity] = useState('');
  const [ cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity(city)
  }

  const addCity = async (city) => {
   await axios.post(`/api/cities`, { city });
   getCities();
   setCity('');
  };

  const getCities = async () => {
    try {
      const { data } = await axios(`/api/cities`);
      const cities = data.cities.map((city) => city.city_name);
      setCities(cities);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };
  useEffect(() => {
    getCities();
  },[]);

  const getWeather = async ( city ) => {
    const { data } =  await axios(`/api/weather/${city}`)
    setWeather(data);
  }

  return (
    <div className="container text-center mx-auto my-20 text-gray-800">
        <h1 className="my-3 text-gray-500 text-3xl">Awesome Weather Dashboard</h1>
        <p>The current weather for your favorite cities!</p>
        <AddCity
          handleSubmit = {handleSubmit}
          handleInputChange ={(e) => setCity(e.target.value)}
          newCity = {city} 
        
        />
        <Weather cities = {cities} handleSelectCity = {(e) => getWeather(e.target.value)}/>
        {weather && <ShowWeather data= {weather}/>}
    </div>
  );
}

export default App;
