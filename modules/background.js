const changeBackground = () => {
	const backgroundElement = document.getElementById('background');

	const IMG_AMOUNT = 4;

	const paintImage = (imageNumber) => {
		backgroundElement.style.backgroundImage = `url(./img/bg${imageNumber}.jpg)`;
	};

	const getRandomNumber = (amount) => {
		const randomNumber = Math.floor(Math.random() * amount + 1);
		console.log(randomNumber);
		return randomNumber;
	};

	const backgroundFadeIn = () => {
		setTimeout(() => backgroundElement.classList.add('fade-in'), 300);
	};

	const init = () => {
		paintImage(getRandomNumber(IMG_AMOUNT));
		backgroundFadeIn();
	};

	init();
};

export default changeBackground;
