const makeGreetingTitle = () => {
	const usernameForm = document.querySelector('.username-form');
	const inputName = usernameForm.querySelector('.input-user-name');
	const greetingText = document.querySelector('.greeting-title');

	const USER_LS = 'currentUser';
	const UNVISIBLE_CN = 'unvisible';

	const saveUserNameToLocal = (username) => {
		localStorage.setItem(USER_LS, username);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const currentName = inputName.value;
		makeGreetingText(currentName);
		saveUserNameToLocal(currentName);
		inputName.value = '';
	};

	const getUserName = () => {
		usernameForm.classList.remove(UNVISIBLE_CN);
		usernameForm.addEventListener('submit', handleSubmit);
	};

	const makeTimeGreetings = () => {
		const now = new Date();
		const hours = parseInt(now.getHours());
		if (hours >= 6 && hours < 11) {
			return 'Good morning!';
		} else if (hours >= 11 && hours < 17) {
			return 'Good afternoon!';
		} else {
			return 'Good evening!';
		}
	};

	const makeGreetingText = (text) => {
		usernameForm.classList.add(UNVISIBLE_CN);
		greetingText.classList.remove(UNVISIBLE_CN);
		greetingText.textContent = `${makeTimeGreetings()} ${text}.`;
	};

	const loadUserName = () => {
		const curretnUser = localStorage.getItem(USER_LS);
		!curretnUser ? getUserName() : makeGreetingText(curretnUser);
	};

	const init = () => {
		loadUserName();
		makeTimeGreetings();
	};

	init();
};

export default makeGreetingTitle;
