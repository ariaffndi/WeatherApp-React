import React from "react";

const SearchSection = ({ getWeatherData, searchInputRef }) => {
	const API_KEY = import.meta.env.VITE_API_KEY;

	const handleSearch = (e) => {
		e.preventDefault();
		const searchValue = e.target.search.value;
		const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchValue}&days=2`;
		getWeatherData(API_URL);
	};

	const handleLocationSearch = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${position.coords.latitude},${position.coords.longitude}&days=2`;
			getWeatherData(API_URL);
		});
	};

	return (
		<div className="search-section w-full flex p-4 gap-2">
			<form
				action="#"
				className="search-form w-full flex h-[50px] relative"
				onSubmit={handleSearch}
			>
				<span className="search-icon absolute top-50% translate-y-3 left-2">
					<i class="fa-solid fa-magnifying-glass"></i>
				</span>
				<input
					type="search"
					name="search"
					placeholder="Enter a city Name" ref={searchInputRef}
					className="search-input flex-grow h-full outline-none border-purple-300 border-[0.5px] rounded-md px-8 bg-white/10 focus:border-purple-400 relative z-10"
				/>
			</form>
			<button
				className="search-button w-[54px] h-[50px]  border-purple-300 border-[0.5px] rounded-md bg-white/10 hover:border-purple-400 hover:text-purple-200 ease-in-out duration-200 text-xl z-10"
				onClick={handleLocationSearch}
			>
				<i class="fa-solid fa-location-crosshairs"></i>
			</button>
		</div>
	);
};

export default SearchSection;
