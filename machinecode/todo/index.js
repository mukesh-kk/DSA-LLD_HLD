// Select elements
const input = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-btn');
const todoList = document.querySelector('.todo-list');

// Add event listener to the Add button
addButton.addEventListener('click', addTodo);

// Function to add a new TODO
function addTodo() {
  const task = input.value.trim();
  
  if (task === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const li = document.createElement('li');
  li.className = 'todo-item';
  li.innerHTML = `
    <span class="task-text">${task}</span>
    <div>
      <button class="edit-btn">Edit</button>
      <button class="remove-btn">Delete</button>
    </div>
  `;

  // Append the new item to the list
  todoList.appendChild(li);

  // Clear the input
  input.value = '';

  // Add event listeners for Edit and Delete buttons
  li.querySelector('.edit-btn').addEventListener('click', () => editTask(li));
  li.querySelector('.remove-btn').addEventListener('click', () => deleteTask(li));
}

// Function to edit a task
function editTask(li) {
  const taskText = li.querySelector('.task-text');
  const newTask = prompt('Edit your task:', taskText.textContent);
  if (newTask !== null) {
    taskText.textContent = newTask.trim() || taskText.textContent;
  }
}

// Function to delete a task
function deleteTask(li) {
  if (confirm('Are you sure you want to delete this task?')) {
    li.remove();
  }
}

prompt("Edit",1212)