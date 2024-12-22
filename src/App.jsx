import { useState } from "react";
import "./css/App.css";
import weatherIcon from "./assets/icons/clouds.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-purple-300 to-purple-50">
			<div className="weather-app border border-gray-500 rounded-lg shadow-lg overflow-hidden p-2 w-[410px] h-full  flex flex-col bg-gradient-to-t from-red-950 to-purple-950 text-white relative z-0">
				{/* Search Section */}
				<div className="search-section w-full flex p-4 gap-2">
					<form
						action="#"
						className="search-form w-full flex h-[50px] relative"
					>
						<span className="search-icon absolute top-50% translate-y-3 left-2">
							<i class="fa-solid fa-magnifying-glass"></i>
						</span>
						<input
							type="search"
							name="search"
							placeholder="Enter a city Name"
							className="search-input flex-grow h-full outline-none border-purple-300 border-[0.5px] rounded-md px-8 bg-white/10 focus:border-purple-400 relative z-10"
						/>
					</form>
					<button className="search-button w-[54px] h-[50px]  border-purple-300 border-[0.5px] rounded-md bg-white/10 hover:border-purple-400 hover:text-purple-200 ease-in-out duration-200 text-xl">
						<i class="fa-solid fa-location-crosshairs"></i>
					</button>
				</div>

				{/* Weather Section */}
				<div className="weather-section w-full flex flex-col justify-center items-center mt-2 relative z-10">
					<div className="current-weather p-2 flex-col justify-center text-center">
						<img
							src={weatherIcon}
							className="weather-icon w-[140px] h-[140px]"
						/>
						<h2 className="temperature font-bold text-4xl mt-6 flex w-full justify-center">
							20 <span className="degree text-2xl font-light"> °C</span>
						</h2>
						<p className="description mt-2 text-2xl font-light">
							Partly Cloudy
						</p>
					</div>

					<div className="hourly-forecast mt-4 p-4 border-t-[0.5px] w-full h-[105px] border-purple-200">
						<ul className="weather-list flex gap-10 flex-grow max-w-full overflow-x-hidden hover:overflow-x-scroll">
							<li className="weather-item gap-1 flex flex-col justify-center">
								<p className="time"> 00:00 </p>
								<img src={weatherIcon} className="weather-icon w-[28px]" />
								<p className="temperature"> 20°C </p>
							</li>
							<li className="weather-item gap-1 flex flex-col justify-center">
								<p className="time"> 00:00 </p>
								<img src={weatherIcon} className="weather-icon w-[28px]" />
								<p className="temperature"> 20°C </p>
							</li>
							<li className="weather-item gap-1 flex flex-col justify-center">
								<p className="time"> 00:00 </p>
								<img src={weatherIcon} className="weather-icon w-[28px]" />
								<p className="temperature"> 20°C </p>
							</li>
							<li className="weather-item gap-1 flex flex-col justify-center">
								<p className="time"> 00:00 </p>
								<img src={weatherIcon} className="weather-icon w-[28px]" />
								<p className="temperature"> 20°C </p>
							</li>
							<li className="weather-item gap-1 flex flex-col justify-center">
								<p className="time"> 00:00 </p>
								<img src={weatherIcon} className="weather-icon w-[28px]" />
								<p className="temperature"> 20°C </p>
							</li>
							<li className="weather-item gap-1 flex flex-col justify-center">
								<p className="time"> 00:00 </p>
								<img src={weatherIcon} className="weather-icon w-[28px]" />
								<p className="temperature"> 20°C </p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
