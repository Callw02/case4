"use strict"

//När man klickar på sign in så kommer man till sidan där man loggar in.
let SignIn = document.getElementById("SignIn");
SignIn.addEventListener("click", function (event) {
    window.location.href = "./login.html";
})

//När man klickar på sign up så kommer man till sidan där man registrerar sig. 
let SignUp = document.getElementById("SignUp");
SignUp.addEventListener("click", function (event) {
    window.location.href = "./register.html";
})
