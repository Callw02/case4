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
    }
}
$received_data = json_decode(file_get_contents("php://input"), true);
/*
function sendJSON($message, $http_code = 200)
{
    header("content-type: application/json");
    http_response_code($http_code);
    echo json_encode($message);
    exit();
}
*/


$action = $received_data["action"];
$username = $received_data["username"];

$filename = __DIR__."/../DATA/users.json";
$users = json_decode(file_get_contents($filename), true);

if($action === "searchForUser"){
    $userRequest = $received_data["userToSearchFor"];
    foreach($users as &$user){
        if($user["username"] === $userRequest){
            $user["friendRequests"][] = $username;
        }
        file_put_contents($filename, json_encode($users, JSON_PRETTY_PRINT));
        $message = ["message" => "Success!"];
        sendJSON($message, 200);
    }
    
}

if($action === "accept"){
    $userToRespondTo = $received_data["requestedUser"];
    foreach($users as &$user){
        if($user["username"] === $userToRespondTo){
            $user["friends"][] = $username;
        }
        if($user["username"] === $username){
            $user["friends"][] = $userToRespondTo;
            for($i = 0;$i < count($user["friendRequests"]); $i++){
                if($user["friendRequests"][$i] === $userToRespondTo){
                    unset($user["friendRequests"][$i]);
                }
            }
        }
    }
    
    file_put_contents($filename, json_encode($users, JSON_PRETTY_PRINT));
    $message = ["message" => "Success!"];
    sendJSON($message, 200);
}


?>