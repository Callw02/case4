"use strict"


function RenderStartingpage() {
    document.querySelector("main").innerHTML = `
    <main>
    <header id="menu">

        <div class="profile">
            <div id="profilePic"></div>
            <p>TheMovieStar</p>
        </div>

        <div id="containerLogo">
            <div class="friendRequests"></div>
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
}