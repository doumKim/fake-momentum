const makeWeatherInfo = () => {
	const weatherElement = document.querySelector('.weather-info');

	const COORDS = 'coords';
	const API_KEY = 'dc57458683da09aa465df83be892f603';

	const getWeatherInfo = (lat, lon) => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
		)
			.then((res) => res.json())
			.then((data) => {
				const temperature = data.main.temp - 273.15;
				const countryName = data.sys.country;
				const locationName = data.name;
				weatherElement.textContent = `${temperature.toFixed(
					2,
				)}°C ${locationName} ${countryName}`;
			});
	};

	const saveCoords = (coords) => {
		localStorage.setItem(COORDS, JSON.stringify(coords));
	};

	const getGeoSuccess = (position) => {
		const { latitude, longitude } = position.coords;
		const coordsInfo = {
			latitude,
			longitude,
		};
		saveCoords(coordsInfo);
		getWeatherInfo(latitude, longitude);
	};

	const getGeoFail = () => {
		console.log('Can not access geo info.');
	};

	const askForCoords = () => {
		navigator.geolocation.getCurrentPosition(getGeoSuccess, getGeoFail);
	};

	const loadCoords = () => {
		const loadedCoords = localStorage.getItem(COORDS);
		if (!loadedCoords) {
			askForCoords();
		} else {
			const parseCoords = JSON.parse(loadedCoords);
			getWeatherInfo(parseCoords.latitude, parseCoords.longitude);
		}
	};

	const init = () => {
		loadCoords();
	};
	init();
};

export default makeWeatherInfo;
