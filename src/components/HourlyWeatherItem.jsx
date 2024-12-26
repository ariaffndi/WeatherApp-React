import React from "react";
import weatherIcon from "../assets/icons/clouds.svg";

const HourlyWeatherItem = () => {
	return (
		<li className="weather-item gap-1 flex flex-col justify-center">
			<p className="time"> 00:00 </p>
			<img src={weatherIcon} className="weather-icon w-[28px]" />
			<p className="temperature"> 20°C </p>
		</li>
	);
};

export default HourlyWeatherItem;
