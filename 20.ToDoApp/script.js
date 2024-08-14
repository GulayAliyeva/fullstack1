document.getElementById('addButton').addEventListener('click', addTodo);
document.getElementById('clearAllButton').addEventListener('click', clearAllTodos);

function addTodo() {
  const input = document.getElementById('todoInput');
  const errorMessage = document.getElementById('error-message');
  const todoList = document.getElementById('todo-list');

  if (input.value.trim() === '') {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.textContent = input.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      if (confirm('Are you sure you want to delete?')) {
        todoList.removeChild(li);
      }
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);
    input.value = '';
  }
}

function clearAllTodos() {
  const todoList = document.getElementById('todo-list');
  if (todoList.children.length === 0) {
    alert('There are no to-do items to clear.');
  } else {
    while (todoList.firstChild) {
      todoList.removeChild(todoList.firstChild);
    }
  }
}
