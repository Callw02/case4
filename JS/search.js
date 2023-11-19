function searchUsers(event){
    console.log(event);
    let username = localStorage.getItem("username");
    let searchedUser = document.querySelector("#searchBar").value;
    console.log(event);

    fetch("../PHP/friendRequest.php", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username: username, userToSearchFor: searchedUser, action: "searchForUser" })
    }).then(r => r.json()).then(re => console.log(re));
}