// login.js


// DOM 
const logInH3 = document.querySelector("h3");
const loginPart = document.querySelector(".login_part");
const loginForm = document.querySelector(".login_part form");
const loginInput = loginPart.querySelector("input");


// function 
function LogIn () {
  localStorage.setItem(loginInput, loginInput.value);

  
  // if () {}
  loginPart.style.display = "none";

  logInH3.innerHTML = `Hello, <br /> ${loginInput.value}!`;
  logInH3.style.paddingTop = "150px";
}



// event 
loginForm.addEventListener("submit", LogIn);
