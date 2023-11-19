
document.getElementById("register").addEventListener("click", registerFunction);

function registerFunction(event) {
    let username = document.getElementById("registerUsername").value;
    let password = document.getElementById("registerPassword").value;

    fetch("../PHP/user_database.php", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username: username, password: password, action: "register" })
    });
}
