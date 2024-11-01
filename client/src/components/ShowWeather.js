import React from "react";

const ShowWeather = ({ data }) => {
    return (
        <div className="flex flex-col items-center p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{data.name}</h2>
            <div className="mb-4">
                <img 
                    src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                    alt="Weather Icon"
                    className="w-20 h-20"
                />
            </div>
            <div className="flex flex-col items-center">
                <span className="text-lg font-medium text-gray-700">{data.weather[0].main}</span>
                <span className="text-xl font-bold text-teal-600">
                    {Math.floor(data.main.temp - 273.15)}&deg;C
                </span>
            </div>
        </div>
    );
};

export default ShowWeather;
