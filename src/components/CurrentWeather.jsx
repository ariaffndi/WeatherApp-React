import React from "react";

const CurrentWeather = ({ weatherData }) => {
	return (
		<div className="current-weather p-2 flex-col justify-center text-center">
			<img
				src={`icons/${weatherData.icon}.svg`}
				className="weather-icon w-[140px] h-[140px]"
			/>
			<h2 className="temperature font-bold text-4xl mt-6 flex w-full justify-center">
				{weatherData.temperature}{" "}
				<span className="degree text-2xl font-light"> °C</span>
			</h2>
			<p className="description mt-2 text-2xl font-light">
				{weatherData.condition}
			</p>
		</div>
	);
};

export default CurrentWeather;
