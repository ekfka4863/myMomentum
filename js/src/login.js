// login.js


// DOM 
const mainConRightSide = document.querySelector(".main_con_right_side");
const logInH3 = document.querySelector("h3");
const loginPart = document.querySelector(".login_part");
const loginForm = document.querySelector(".login_part form");
const loginInput = loginPart.querySelector("input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


// function 
function submitLogIn (event) {
  event.preventDefault();
  loginPart.classList.add(HIDDEN_CLASSNAME);

  const userName = loginInput.value;
  // console.log(userName);   // e.g. ekfka4863

  localStorage.setItem(USERNAME_KEY, userName);
  // cf. localStorage.getItem("userName");
  // cf. localStorage.removeItem("userName");  

  showGreeting(userName);
}
  
function showGreeting(userName) {
  loginPart.style.display = "none";

  logInH3.innerHTML = `Hello, <br /> ${userName}!`;

  logInH3.style.paddingTop = "150px";
}

const savedUsername = localStorage.getItem(USERNAME_KEY);



// log in overall flow
if (localStorage.getItem(USERNAME_KEY) === null) {
  // show loginForm 
  loginPart.style.display = "block";

  // event 
  loginForm.addEventListener("submit", submitLogIn);
} else {
  showGreeting(savedUsername);
}

