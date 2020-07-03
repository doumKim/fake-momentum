(() => {
	const TodoForm = document.querySelector('.todo-form');
	const inputName = TodoForm.querySelector('.input-user-name');
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
		TodoForm.classList.remove(UNVISIBLE_CN);
		TodoForm.addEventListener('submit', handleSubmit);
	};

	const makeGreetingText = (text) => {
		TodoForm.classList.add(UNVISIBLE_CN);
		greetingText.classList.remove(UNVISIBLE_CN);
		greetingText.textContent = `Hello ${text}`;
	};

	const loadUserName = () => {
		const curretnUser = localStorage.getItem(USER_LS);
		!curretnUser ? getUserName() : makeGreetingText(curretnUser);
	};

	const init = () => {
		loadUserName();
	};

	init();
})();
