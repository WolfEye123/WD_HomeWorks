<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	return;
}

// variables
$userName = isset($_POST['user']) ? $_POST['user'] : false;
$userPassword = isset($_POST['password']) ? $_POST['password'] : false;
$_SESSION['user'] = $userName;
if (!$userName && !$userPassword) {
	return;
}
$userFilePath = "../json/users.json";

// json object
$object = [
	'userName' => $userName,
	'userPassword' => $userPassword
];

$userFile = file_get_contents($userFilePath);
if (!$userFile) {
	return;
}
$userFound = false;
$userFile = json_decode($userFile, true);

foreach ($userFile as $user) {
	if ($user['userName'] !== $userName) {
		continue;
	}
	if ($user['userPassword'] === $userPassword) {
		header('Location: ../../public/chatWindow.php');
		return;
	} else {
		$_SESSION['passError'] = 'showError';
		header('Location: ../../public/index.php');
		return;
	}
}

$userFile[] = $object;
file_put_contents($userFilePath, json_encode($userFile), JSON_PRETTY_PRINT);
header('Location: ../../public/chatWindow.php');
return;



