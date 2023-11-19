document.getElementById("login").addEventListener("click", loginFunction);
document.getElementById("register").addEventListener("click", registerFunction);

function loginFunction(event) {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    console.log(username);

    fetch("../PHP/user_database.php", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username: username, password: password, action: "login" })
    }).then(request => request.json()).then(resource => {
        if(resource.message === "Login successful!"){
            window.location.href = "../homepage.html"
        }else{
            console.log("login failed");
        }
    });
    
}

function registerFunction(event) {
    let username = document.getElementById("registerUsername").value;
    let password = document.getElementById("registerPassword").value;

    fetch("../PHP/user_database.php", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username: username, password: password, action: "register" })
    });
}
