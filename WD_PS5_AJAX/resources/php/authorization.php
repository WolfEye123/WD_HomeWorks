<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	return;
}

// variables
$userName = isset($_POST['user']) ? $_POST['user'] : false;
$userPassword = isset($_POST['password']) ? $_POST['password'] : false;
$_SESSION['user'] = $userName;
if (!$userName && !$userPassword){
	return;
}
$userFilePath = "../json/$userName.json";
//$messagesFilePath = "../json/messages.json";

// json object
$object = [
	'userName' => $userName,
	'userPassword' => $userPassword
];
//$messagesFile = file_get_contents($messagesFilePath);
//if (!$messagesFile){
//	return;
//}
//$messagesFile = json_decode($messagesFile, true);

$userFile = file_get_contents($userFilePath);
if (!$userFile) {
	file_put_contents($userFilePath, json_encode($object), JSON_PRETTY_PRINT);
//	$_SESSION['messages'] = $messagesFile;
	header('Location: ../../public/chatWindow.php');
	return;
}
$userFile = json_decode($userFile, true);

if ($userFile['userPassword'] === $userPassword) {
//	$_SESSION['messages'] = $messagesFile;
	header('Location: ../../public/chatWindow.php');
	return;
} else {
	$_SESSION['passError'] = 'showError';
	header('Location: ../../public/index.php');
	return;
}
