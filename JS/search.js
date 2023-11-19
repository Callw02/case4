let username = localStorage.getItem("username");

function searchUsers(event){
    console.log(event);
    let searchedUser = document.querySelector("#searchBar").value;
    console.log(event);

    fetch("../PHP/friendRequest.php", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username: username, userToSearchFor: searchedUser, action: "searchForUser" })
    }).then(r => r.json()).then(resource => {
        console.log(resource);
    });
}

function displayFriendRequests(){
    let requestBox = document.querySelector(".friendRequests");

    fetch("../PHP/user_database.php", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username: username, action: "displayFriends"})
    }).then(r => r.json()).then(resource => {
        console.log(resource);
    })
    
}