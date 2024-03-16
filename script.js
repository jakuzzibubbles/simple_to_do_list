// Function to add a task
function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText !== '') {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;
    li.onclick = () => li.classList.toggle('completed');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.onclick = () => li.remove();
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    input.value = '';
  }
}
