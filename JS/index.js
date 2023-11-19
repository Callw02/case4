document.getElementById("SignIn").addEventListener("click", signInpage);
document.getElementById("SignUp").addEventListener("click", signUppage);

function signInpage(event) {
    document.querySelector("main").innerHTML = `
    <main>
        <h1>Filmfeud</h1>
        <div>
            <div class="box">
                <button id="login">Login</button>
                <input placeholder="Username" id="loginUsername"></input>
                <input placeholder="Password" id="loginPassword"></input>
            </div>
        </div>
    </main>
    `
    document.getElementById("login").addEventListener("click", loginFunction);

}

function signUppage(event) {
    document.querySelector("main").innerHTML = `
    <main>
    <h1>Filmfeud</h1>
    <div>
        <div class="box">
            <button id="register">Register</button>
            <input placeholder="Username" id="registerUsername"></input>
            <input placeholder="Password" id="registerPassword"></input>
        </div>
        <button id="loginShortCut">Go to login</button>
    </div>
</main>
    `
    document.getElementById("register").addEventListener("click", registerFunction);

    //Shortcut from register page to login page. 
    document.getElementById("loginShortCut").addEventListener("click", signInpage);
}

function loginFunction(event) {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    console.log(username);

    fetch("../PHP/user_database.php", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username: username, password: password, action: "login" })
    }).then(request => request.json()).then(resource => {
        if (resource.message === "Login successful!") {
            console.log("sucess");
            RenderStartingpage();
        } else {
            console.log("login failed");
        }
    });

}

function RenderStartingpage() {
    document.querySelector("main").innerHTML = `
    <main>
    <header id="menu">

        <div class="profile">
            <div id="profilePic"></div>
            <p>TheMovieStar</p>
            
        </div>

        <div id="containerLogo">
            <div id="friendRequests"></div>
            <div class="unknown"></div>
            <div class="Logo">
                <img src="https://www.google.com/search?client=firefox-b-d&q=Cute+dog#vhid=pLBKx-usQwRH3M&vssid=l">
            </div>
        </div>
        <input id="searchBar"></input>
        <button id="searchButton">Search</button>

    </header>

    <div id="displayMenu">

        <div id="sectionOneWrapper">
            <div id="profileContainer">
                <div class="profile">
                    <div id="profilePic">
                        <img
                            src="https://www.google.com/search?client=firefox-b-d&q=Cute+dog#vhid=pLBKx-usQwRH3M&vssid=l">
                    </div>
                    <p>TheMovieStar</p>
                    <div id="levelProgressBar">Level</div>
                </div>
            </div>
            <div id="leaderBoard">
                <div class="Leaderboard">Leaderboard 1</div>
                <div class="LeaderBoard">Leaderboard 2</div>
            </div>
        </div>

        <div id="sectionTwoWrapper">
            <div id="Multiplayer">Play with friends</div>
            <div id="Singelplayer">Play alone</div>
            <div id="Challenges">Challenges</div>
        </div>

    </div>
</main>
    `
    document.querySelector("#searchButton").addEventListener("click", searchUsers);
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
