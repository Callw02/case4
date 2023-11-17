<?php
ini_set("display_errors", 1);

$received_data = json_decode(file_get_contents("php://input"), true);

function sendJSON($message, $http_code = 200)
{
    header("content-type: application/json");
    http_response_code($http_code);
    echo json_encode($message);
    exit();
}


$action = $received_data["action"];
$username = $received_data["username"];
$password = $received_data["password"];

$filename = "../DATA/users.json";

if (file_exists($filename)) {
    $users = json_decode(file_get_contents($filename), true);
} else {
    $users = [];
}

if($action === "register"){
    
    $id = 0;
    if (0 <= count($users)) {
        $new_user = ["username" => $username, "password" => $password, "level" => 1, "popcorn" => 0, "friends" => 0];
        foreach ($users as $single_user) {
            if ($id < $single_user["id"]) {
                $id = $single_user["id"];
            }
        }
    }
    $new_user["id"] = $id + 1;
            $users[] = $new_user;
            file_put_contents($filename, json_encode($users, JSON_PRETTY_PRINT));
            $message = ["message" => $new_user["username"] . " " . "has been registered successfully!"];
            sendJSON($message); 
}

if($action === "login"){
    foreach($users as $user){
        if($username === $user["username"] && $password === $user["password"]){
            $message = ["userid" => $user["id"], "username" => $user["username"], "message" => "Login successful!"];
            sendJSON($message, 200);
        }else{
            $message = ["message" => "User not found"];
            sendJSON($message, 404);
        }
    }
}
?>