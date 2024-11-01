import React from "react";

const Weather = ( {cities, handleSelectCity} ) => {
    return (
        <div className="w-full mx-auto flex justify-center items-center">
            <h2 className="my-3 w-full text-2xl text-gray-500">Curent Weather</h2>
            <select 
    onChange={handleSelectCity}
    className="block appearance-none w-full bg-gray-300 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring focus:ring-teal-300">
    {cities.length > 0 && 
    cities.map((city) => 
    <option key={city}>{city}</option>)}
</select>

        </div>
    )
}

export default Weather;