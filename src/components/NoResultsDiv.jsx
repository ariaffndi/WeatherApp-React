import noResultImg from "/icons/no-result.svg";

const NoResultsDiv = () => {
	return (
		<div className="flex current-weather p-2 flex-col justify-center text-center z-10 items-center mb-20 mt-6">
			<img
				src={noResultImg}
				className="weather-icon w-[140px] h-[140px]"
			/>
			<h2 className="temperature font-bold text-xl mt-6 flex w-full justify-center">
				Something Went Wrong!
			</h2>
			<p className="description mt-2 text-md font-light">
				We're unable to find the city you're looking for. Ensure that you've typed the city name correctly and try again.
			</p>
		</div>
	);
};

export default NoResultsDiv;
