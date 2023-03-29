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
			deleteBtn
    }
  })}