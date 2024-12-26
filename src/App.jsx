import "./css/App.css";
import { useState } from "react";
import SearchSection from "./components/SearchSection";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeatherItem from "./components/HourlyWeatherItem";
import { weatherCodes } from "./js/constants";

function App() {

	const [weatherData, setWeatherData] = useState({});
	const getWeatherData = async (API_URL) => {
		try {
			const response = await fetch(API_URL);
			const data = await response.json();

			const temperature = Math.floor(data.current.temp_c);
			const condition = data.current.condition.text;
			const icon = Object.keys(weatherCodes).find(key => weatherCodes[key].includes(data.current.condition.code));

			setWeatherData({ temperature, condition, icon });

		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-purple-300 to-purple-50">
			<div className="weather-app border border-gray-500 rounded-lg shadow-lg overflow-hidden p-2 w-[410px] h-full  flex flex-col bg-gradient-to-t from-red-950 to-purple-950 text-white relative z-0">
				{/* Search Section */}
				<SearchSection getWeatherData={getWeatherData} />

				{/* Weather Section */}
				<div className="weather-section w-full flex flex-col justify-center items-center mt-2 relative z-10">
					<CurrentWeather weatherData={weatherData}/>

					<div className="hourly-forecast mt-4 p-4 border-t-[0.5px] w-full h-[105px] border-purple-200">
						<ul className="weather-list flex gap-10 flex-grow max-w-full overflow-x-hidden hover:overflow-x-scroll">
							<HourlyWeatherItem/>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
