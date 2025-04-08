// Select elements
const input = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-btn');
const todoList = document.querySelector('.todo-list');

let editingTask = null; // Tracks the task being edited

// Add event listener to the Add button
addButton.addEventListener('click', handleAddOrUpdate);

// Function to handle Add or Update actions
function handleAddOrUpdate() {
  const taskText = input.value.trim();
  
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  if (editingTask) {
    // Update the existing task
    editingTask.querySelector('.task-text').textContent = taskText;
    editingTask = null; // Reset the editing state
    addButton.textContent = 'Add'; // Change button text back to 'Add'
  } else {
    // Add a new task
    addTodo(taskText);
  }

  // Clear the input field
  input.value = '';
}

// Function to add a new TODO
function addTodo(taskText) {
  const li = document.createElement('li');
  li.className = 'todo-item';
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div>
      <button class="edit-btn">Edit</button>
      <button class="remove-btn">Delete</button>
    </div>
  `;

  // Append the new item to the list
  todoList.appendChild(li);

  // Add event listeners for Edit and Delete buttons
  li.querySelector('.edit-btn').addEventListener('click', () => editTask(li));
  li.querySelector('.remove-btn').addEventListener('click', () => deleteTask(li));
}

// Function to edit a task
function editTask(li) {
  editingTask = li; // Set the current task being edited
  input.value = li.querySelector('.task-text').textContent; // Populate input with task text
  addButton.textContent = 'Update'; // Change button text to 'Update'
}

// Function to delete a task
function deleteTask(li) {
  if (confirm('Are you sure you want to delete this task?')) {
    li.remove();

    // Reset editing state if the task being edited is deleted
    if (editingTask === li) {
      editingTask = null;
      input.value = '';
      addButton.textContent = 'Add';
    }
  }
}

class Singleton{
  constructor(){
      if(Singleton.instance){
          return Singleton.instance
      }
      Singleton.instance=this
  }
  run(){
      console.log('run')
  }
  
}

x=new Singleton()
console.log(x==Singleton.instance)
