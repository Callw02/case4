<?php 

function displayFriends($users){
    foreach ($users as $user) {
        if($username === $user["username"]){
            $message = ["friendRequests" => $user["friendRequests"]];
            sendJSON($message, 200);
        }
    }
}

?>