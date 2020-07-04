import makeTodoList from './modules/todo.js';
import makeClock from './modules/clock.js';
import makeGreetingTitle from './modules/greeting.js';
import changeBackground from './modules/background.js';

const init = () => {
	makeClock();
	makeGreetingTitle();
	makeTodoList();
	changeBackground();
};

init();
