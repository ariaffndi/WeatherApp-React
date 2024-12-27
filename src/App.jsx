import "./css/App.css";
import { useState, useRef, useEffect } from "react";
import SearchSection from "./components/SearchSection";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeatherItem from "./components/HourlyWeatherItem";
import NoResultsDiv from "./components/NoResultsDiv";
import { weatherCodes } from "./js/constants";

function App() {
	const API_KEY = import.meta.env.VITE_API_KEY;
	const [weatherData, setWeatherData] = useState({});
	const [hoursForecast, setHoursForecast] = useState([]);
	const [noResults, setNoResults] = useState(false);
	const searchInputRef = useRef(null);

	const filterHoursForecast = (hoursData) => {
		const currentHour = new Date().setMinutes(0, 0, 0);
		const next24Hours = currentHour + 86400000;

		const next24HoursData = hoursData.filter(({ time }) => {
			const forecastTime = new Date(time).getTime();
			return forecastTime >= currentHour && forecastTime <= next24Hours;
		});

		setHoursForecast(next24HoursData);
	};

	const getWeatherData = async (API_URL) => {
		setNoResults(false);
		try {
			const response = await fetch(API_URL);
			if (!response.ok) throw new Error();
			const data = await response.json();

			const temperature = Math.floor(data.current.temp_c);
			const condition = data.current.condition.text;
			const icon = Object.keys(weatherCodes).find((key) =>
				weatherCodes[key].includes(data.current.condition.code)
			);

			setWeatherData({ temperature, condition, icon });

			const hoursData = [
				...data.forecast.forecastday[0].hour,
				...data.forecast.forecastday[1].hour,
			];

			searchInputRef.current.value = data.location.name;
			filterHoursForecast(hoursData);
		} catch (error) {
			setNoResults(true);
		}
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${position.coords.latitude},${position.coords.longitude}&days=2`;
			getWeatherData(API_URL);
		});
	}, []);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-purple-300 to-purple-50">
			<div className="weather-app border border-gray-500 rounded-lg shadow-lg overflow-hidden p-2 w-[410px] h-full  flex flex-col bg-gradient-to-t from-red-950 to-purple-950 text-white relative z-0">
				{/* Search Section */}
				<SearchSection
					getWeatherData={getWeatherData}
					searchInputRef={searchInputRef}
				/>

				{noResults ? (
					<NoResultsDiv />
				) : (
					<div className="weather-section w-full flex flex-col justify-center items-center mt-2 relative z-10">
						<CurrentWeather weatherData={weatherData} />
						<div className="hourly-forecast mt-4 p-4 border-t-[0.5px] w-full h-[105px] border-purple-200">
							<ul className="weather-list flex gap-10 flex-grow max-w-full overflow-x-hidden hover:overflow-x-scroll">
								{hoursForecast.map((hoursWeather) => (
									<HourlyWeatherItem
										key={hoursWeather.time_epoch}
										hoursWeather={hoursWeather}
									/>
								))}
							</ul>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
