const newTask = document.getElementById('new-task');
const addBtn = document.getElementById('add-btn');
const pendingList = document.getElementById('pending-tasks');
const completedList = document.getElementById('completed-tasks');

let tasks = [];

function addTask() {
	if (newTask.value.trim() !== '') {
		const task = {
			id: Date.now(),
			name: newTask.value.trim(),
			completed: false,
			createdAt: new Date()
		};

		tasks.push(task);
		newTask.value = '';

		renderTasks();
	}
}

function renderTasks() {
	pendingList.innerHTML = '';
	completedList.innerHTML = '';

	tasks.forEach(task => {
		const li = document.createElement('li');
		li.textContent = task.name;

		if (task.completed) {
			li.classList.add('completed');
			completedList.appendChild(li);
		} else {
			const deleteBtn = document.createElement('button');
			deleteBtn.textContent = 'Delete';
			deleteBtn.classList.add('delete-btn');
			deleteBtn.addEventListener('click', () => deleteTask(task.id));
	
			const editBtn = document.createElement('button');
			editBtn.textContent = 'Edit';
			editBtn.classList.add('edit-btn');
			editBtn.addEventListener('click', () => editTask(task.id));
	
			const dateSpan = document.createElement('span');
			dateSpan.textContent = formatDate(task.createdAt);
			dateSpan.classList.add('date');
	
			li.appendChild(dateSpan);
			li.appendChild(editBtn);
			li.appendChild(deleteBtn);
			pendingList.appendChild(li);
		}
	});
}

function deleteTask(id) {
tasks = tasks.filter(task => task.id !== id);
renderTasks();
}

function editTask(id) {
const task = tasks.find(task => task.id === id);
const newName = prompt('Enter new task name:', task.name);
if (newName !== null && newName.trim() !== '') {
	task.name = newName.trim();
	renderTasks();
}
}

function completeTask(id) {
const task = tasks.find(task => task.id === id);
task.completed = true;
renderTasks();
}

function formatDate(date) {
return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
}

addBtn.addEventListener('click', addTask);

newTask.addEventListener('keydown', event => {
if (event.key === 'Enter') {
addTask();
}
});

renderTasks();