<?php
ini_set("display_errors", 1);

function friendRequest($received_data){
    $action = $received_data["action"];
    $username = $received_data["username"];
    $userRequest = $received_data["userToSearchFor"];
    
    $filename = __DIR__."/../DATA/users.json";
    $users = json_decode(file_get_contents($filename), true);
    
    if($action === "searchForUser"){
        foreach($users as &$user){
            if($user["username"] === $userRequest){
                $user["friendRequests"][] = $username;
            }
        }
        file_put_contents($filename, json_encode($users, JSON_PRETTY_PRINT));
        $message = ["message" => "Success!"];
        sendJSON($message, 200);
    }
    
}


?>