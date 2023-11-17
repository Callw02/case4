document.getElementById("login").addEventListener("click", loginFunction);
document.getElementById("register").addEventListener("click", registerFunction);

function loginFunction(event){

}

function registerFunction(event){
    console.log(event);
    username = document.getElementById("registerUsername").value;
    password = document.getElementById("registerPassword").value;
    console.log(password);

    fetch("../DATA/users.json").then(r => r.json()).then(re => console.log(re));
    
}