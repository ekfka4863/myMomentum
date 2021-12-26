// todolist.js

// DOM
const todolistPart = document.querySelector(".todolist_part");
const todolistForm = todolistPart.querySelector("form");
const todolistInput = todolistForm.querySelector("input");
const todosUl = document.querySelector(".todos");


// functions
function setTodo(e) {
  e.preventDefault();

  const todo =todolistInput.value;
  console.log(todo);

  return todo;
}

function makeTodoList(todo) {
  const todoLi = document.createElement("li");
  
  todoLi.textContent = `${todo}`;

  todosUl.appendChild(todoLi);
}



// event 
todolistForm.addEventListener("submit", setTodo);