// todolist.js


// DOM
const todolistPart = document.querySelector(".todolist_part");
const todolistForm = todolistPart.querySelector("form");
const todolistInput = todolistForm.querySelector("input");
const todosUl = document.querySelector(".todos");

const TODOS_KEY = "todos";

// create toDos array to store in localStorage
let toDos = [];




// functions

// save todos in localStorage 
// (cf. 단, 그냥 todos.push(newTodo)는 array가 아니라서 JSON.stringfy랑 JSON.parse로 진짜 배열로 변환해줘야 함)
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteTodo(e) {
  // console.log(e);
  // console.log(e.path);
  // console.log(e.path[3]);   // e.g. <li id="1640583520238"><p>123 123 12 213</p><div class="todo_btn_wrapper"><button class="delete_todo_btn"><img src="../multi/img/todo_delete.png"></button><button class="check_todo_btn"><img src="../multi/img/todo_check.png"></button></div></li>

  // const toBeDeletedTodoLi = e.path[3];
  // toBeDeletedTodoLi.remove();

  // console.dir(e.target);
  // console.log(e.target.parentElement.parentElement.parentElement);
  const toBeDeletedTodoLi = e.target.parentElement.parentElement.parentElement;  // e.g. <li id="1640583520238"></li>
  toBeDeletedTodoLi.remove();

  // console.log(toDos);   // e.g. length가 9였다면 ...
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(toBeDeletedTodoLi.id));
  // console.log(toDos);  // 여기서는 length가 8이 된다. 즉, 정상 작동 OK

  saveToDos();
  // console.log(localStorage.getItem(TODOS_KEY));   // 정상 작동 OK
}


function paintTodo(newTodoObj) {

  // create elements
  const todoLi = document.createElement("li");
  const todoLiP = document.createElement("p");
  const todoLiBtns = document.createElement("div");
  const deleteTodoBtn = document.createElement("button");
  const checkTodoBtn = document.createElement("button");
  const deleteImg = document.createElement("img");
  const checkImg = document.createElement("img");

  // append elements
  todosUl.appendChild(todoLi);
  todoLi.appendChild(todoLiP);
  todoLi.appendChild(todoLiBtns);
  todoLiBtns.appendChild(deleteTodoBtn);
  todoLiBtns.appendChild(checkTodoBtn);
  deleteTodoBtn.appendChild(deleteImg);
  checkTodoBtn.appendChild(checkImg);

  // add id
  // console.log(todoLi);    // <li><p></p><div><button><img></button><button><img></button></div></li>
  // console.log(newTodo);   // undefined
  todoLi.id = newTodoObj.id;
  // console.log( todoLi.id, newTodo.id);  // -> 둘이 동일 
  // todoLi.setAttribute("id", newTodoObj.id);

  // add class
  todoLiBtns.classList.add("todo_btn_wrapper");
  deleteTodoBtn.classList.add("delete_todo_btn");
  checkTodoBtn.classList.add("check_todo_btn");

  // textContent
  todoLiP.textContent = newTodoObj.text;
  // todoLiP.textContent = `${newTodoObj.text}`;

  // set src attribute of img tags
  deleteImg.src = "../multi/img/todo_delete.png";
  checkImg.src = "../multi/img/todo_check.png";


  // btn event
  deleteTodoBtn.addEventListener("click", deleteTodo);
  checkTodoBtn.addEventListener("click", checkTodo);
}


function setTodo(e) {
  e.preventDefault();

  const newTodo = todolistInput.value;
  // console.log(newTodo);

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    // todoDone: false     
  };
  // console.log("newTodoObj: ", newTodoObj);          // e.g. newTodoObj:{text: '리액트 강의 모두 듣기', id: 1640582581402}
  
  todolistInput.value = "";  

  // toDos.push(newTodo);
  toDos.push(newTodoObj);
  
  // paintTodo(newTodo);
  paintTodo(newTodoObj);

  saveToDos();
  // console.log(localStorage.getItem(TODOS_KEY));   // 정상 작동 OK
}


// event 
todolistForm.addEventListener("submit", setTodo);



function checkTodo(e) {
  e.preventDefault();

  const parentTodoLi = e.target.parentElement;
  const checkTodoBtnImg = parentTodoLi.querySelector(".check_todo_btn > img");

  // when clicked add "todo_done" class
  // parentTodoLi.classList.toggle("todo_done");
  // console.log(parentTodoLi.parentElement);
  parentTodoLi.parentElement.parentElement.classList.toggle("todo_done");  // li 태그에 .todo_done 넣어주기... 

  if (parentTodoLi.parentElement.parentElement.classList.contains("todo_done")) {
    checkTodoBtnImg.src = "../multi/img/todo_checked.png";
  } else {
    checkTodoBtnImg.src = "../multi/img/todo_check.png";
  }

}



const savedTodos = localStorage.getItem(TODOS_KEY);   
// console.log(savedTodos);
// console.log(typeof savedTodos);   // string -> JSON.stringify ... 여전히 string -> JSON.parse 적용한 뒤 ... object 


if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  // console.log(parsedToDos);   // e.g.  (4) [{…}, {…}, {…}, {…}]

  toDos = parsedToDos;
  // console.log(toDos);      
    // e.g.  (4) [{…}, {…}, {…}, {…}]
    parsedToDos.forEach(paintTodo);

} else {
  localStorage(TODOS_KEY, JSON.stringify([]));
}



