// todolist.js

// DOM
const todolistPart = document.querySelector(".todolist_part");
const todolistForm = todolistPart.querySelector("form");
const todolistInput = todolistForm.querySelector("input");
const todosUl = document.querySelector(".todos");


// store todos in localStorage
// const todos = [];
let todos = [];

const TODOS_KEY = "todos";


// functions
function setTodo(event) {
  event.preventDefault();

  const newTodo = todolistInput.value;

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  // todos.push(newTodo);
  todos.push(newTodoObj);


  // paintTodo(newTodo);
  paintTodo(newTodoObj.text);
  saveTodos();

  todolistInput.value = "";
}

function paintTodo(newTodoObj) {
  const todoLi = document.createElement("li");
  todoLi.classList.add(newTodoObj.id);
  console.log(newTodoObj.id);
  todosUl.appendChild(todoLi);

  const todoLiP = document.createElement("p");
  todoLi.appendChild(todoLiP);
  console.log(newTodoObj.text);
  todoLiP.textContent = `${newTodoObj.text}`;

  const todoLiBtns = document.createElement("div");
  todoLiBtns.classList.add("todo_btn_wrapper");
  todoLi.appendChild(todoLiBtns);

  const deleteTodoBtn = document.createElement("button");
  deleteTodoBtn.classList.add("delete_todo_btn");
  todoLiBtns.appendChild(deleteTodoBtn);
  const checkTodoBtn = document.createElement("button");
  checkTodoBtn.classList.add("check_todo_btn");
  todoLiBtns.appendChild(checkTodoBtn);


  const deleteImg = document.createElement("img");
  deleteImg.src = "../multi/img/todo_delete.png";
  deleteTodoBtn.appendChild(deleteImg);

  const checkImg = document.createElement("img");
  checkImg.src = "../multi/img/todo_check.png";
  checkTodoBtn.appendChild(checkImg);

  
  
  deleteTodoBtn.addEventListener("click", deleteTodo);
  checkTodoBtn.addEventListener("click", checkTodo);
}


function deleteTodo(e) {
  e.preventDefault();

  // console.dir(e.target);
  // console.dir(e.target.parentElement);

  const parentBtn = e.target.parentElement;
  const parentDiv = parentBtn.parentElement;
  const parentTodoLi = parentDiv.parentElement;
  // console.log(parentTodoLi);
  parentTodoLi.remove(); 

  // localStorage에서도 지우기
  todos = JSON.parse(savedTodos).filter((todo) => todo.id !== parseInt(parentTodoLi.className));
  console.log(todos);

  saveTodos();
}


function checkTodo(e) {
  e.preventDefault();
  
  const parentTodoLi = e.target.parentElement;
  const checkTodoBtnImg = parentTodoLi.querySelector(".check_todo_btn > img");

  checkTodoBtnImg.src = "../multi/img/todo_checked.png";
}

// save todos in localStorage
function saveTodos() {
  // localStorage.setItem("todos", todos);
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

// const savedTodos = localStorage.getItem(TODOS_KEY);
let savedTodos = localStorage.getItem(TODOS_KEY);


if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach(paintTodo);
}





// cf.
// const todoLiBtns = document.querySelector(".todo_btn_wrapper");
// const deleteTodoBtn = document.querySelector(".delete_todo_btn");
// const checkTodoBtn = document.querySelector(".check_todo_btn");

// event 
todolistForm.addEventListener("submit", setTodo);
// deleteTodoBtn.addEventListener("click", deleteTodo);
// checkTodoBtn.addEventListener("click", checkTodo);


