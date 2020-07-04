const makeTodoList = () => {
	const todoListForm = document.querySelector('.todo-list-form');
	const inputTodoItem = todoListForm.querySelector('.input-todo-item');
	const TodoList = document.querySelector('.todo-list');

	const TODOS_LS = 'todos';
	let TODOS = [];

	const saveTodos = () => {
		localStorage.setItem(TODOS_LS, JSON.stringify(TODOS));
	};

	const deleteTodoItem = (e) => {
		const ItemWillBeDeleted = e.target.parentElement;
		TodoList.removeChild(ItemWillBeDeleted);
		const filteredTodos = TODOS.filter((todo) => {
			return todo.id !== parseInt(ItemWillBeDeleted.id);
		});
		TODOS = filteredTodos;
		saveTodos();
	};

	const pushTodoItem = (todo) => {
		const toDoItem = {
			todo: todo,
			id: TODOS.length + 1,
		};
		TODOS.push(toDoItem);
		saveTodos();
	};

	const addDeleteFeature = (button) => {
		button.addEventListener('click', deleteTodoItem);
	};

	const makeTodoItem = (text) => {
		const itemTemplate = document.querySelector('.todo-item-template');
		const clone = document.importNode(itemTemplate.content, true);
		const TodoListItem = clone.querySelector('li.todo-item');
		const spanItemText = clone.querySelector('span');
		const deleteItemButton = clone.querySelector('button');
		TodoListItem.id = TODOS.length + 1;
		spanItemText.textContent = text;
		deleteItemButton.textContent = '🗑';
		addDeleteFeature(deleteItemButton);
		TodoList.appendChild(clone);
		pushTodoItem(text);
	};

	const loadTodos = () => {
		const loadedTodos = localStorage.getItem(TODOS_LS);
		if (loadedTodos) {
			const parsedTodos = JSON.parse(loadedTodos);
			parsedTodos.forEach((todoItem) => {
				makeTodoItem(todoItem.todo);
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const currentTodo = inputTodoItem.value;
		makeTodoItem(currentTodo);
		inputTodoItem.value = '';
	};

	const init = () => {
		loadTodos();
		todoListForm.addEventListener('submit', handleSubmit);
	};

	init();
};

export default makeTodoList;
