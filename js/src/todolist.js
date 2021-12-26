// todolist.js

// DOM
const todolistPart = document.querySelector(".todolist_part");
const todolistForm = todolistPart.querySelector("form");
const todolistInput = todolistForm.querySelector("input");
const todosUl = document.querySelector(".todos");


// const todoLiBtns = document.querySelector(".todo_btn_wrapper");
// const deleteTodoBtn = document.querySelector(".delete_todo_btn");
// const checkTodoBtn = document.querySelector(".check_todo_btn");


// functions
function setTodo(event) {
  event.preventDefault();

  const newTodo = todolistInput.value;
  todolistInput.value = "";

  paintTodo(newTodo);
}

function paintTodo(newTodo) {
  const todoLi = document.createElement("li");
  todosUl.appendChild(todoLi);

  const todoLiP = document.createElement("p");
  todoLi.appendChild(todoLiP);
  todoLiP.textContent = `${newTodo}`;

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
}


function checkTodo(e) {
  e.preventDefault();
  
  const parentTodoLi = e.target.parentElement;
  const checkTodoBtnImg = parentTodoLi.querySelector(".check_todo_btn > img");

  checkTodoBtnImg.src = "../multi/img/todo_checked.png";
}




// const todoLiBtns = document.querySelector(".todo_btn_wrapper");
// const deleteTodoBtn = document.querySelector(".delete_todo_btn");
// const checkTodoBtn = document.querySelector(".check_todo_btn");

// event 
todolistForm.addEventListener("submit", setTodo);
// deleteTodoBtn.addEventListener("click", deleteTodo);
// checkTodoBtn.addEventListener("click", checkTodo);


