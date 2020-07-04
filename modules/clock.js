const makeClock = () => {
	const clockContainer = document.querySelector('.js-clock');
	const clockTitle = clockContainer.querySelector('h1.clock-title');

	const getTime = () => {
		const nowDate = new Date();
		const hours = nowDate.getHours();
		const minutes = nowDate.getMinutes();
		const seconds = nowDate.getSeconds();
		return { minutes, hours, seconds };
	};

	const makeClockTitle = () => {
		const fetchToClockTitle = () => {
			const timeInfo = getTime();
			const { minutes, hours, seconds } = timeInfo;
			clockTitle.textContent = `${hours < 10 ? `0${hours}` : `${hours}`}:${
				minutes < 10 ? `0${minutes}` : `${minutes}`
			}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
		};
		fetchToClockTitle();
		const autoClockMove = setInterval(fetchToClockTitle, 1000);
	};

	const init = () => {
		makeClockTitle();
	};

	init();
};

export default makeClock;
