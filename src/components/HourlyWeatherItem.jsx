import React from "react";
import { weatherCodes } from "../js/constants";

const HourlyWeatherItem = ({hoursWeather}) => {
	const temperature = Math.floor(hoursWeather.temp_c);
	const time = hoursWeather.time.split(" ")[1].substring(0, 5);
	const icon = Object.keys(weatherCodes).find(key => weatherCodes[key].includes(hoursWeather.condition.code));

	return (
		<li className="weather-item gap-1 flex flex-col justify-center">
			<p className="time"> {time} </p>
			<img src={`icons/${icon}.svg`} className="weather-icon w-[28px]" />
			<p className="temperature"> {temperature}°C </p>
		</li>
	);
};

export default HourlyWeatherItem;
