<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	return;
}

// variables
$postUser = isset($_POST['user']) ? $_POST['user'] : 'false';
$postPassword = isset($_POST['password']) ? $_POST['password'] : 'false';
$_SESSION['user'] = $postUser;
if (!$postUser && !$postPassword){
	return;
}
$filePath = "../json/$postUser.json";

// json object
$object = (object)[
	'user' => $postUser,
	'password' => $postPassword,
	'messages' => []
];

$buffer = file_get_contents($filePath);
if (!$buffer) {
	file_put_contents($filePath, json_encode($object), JSON_PRETTY_PRINT);
	header('Location: ../../public/chatWindow.php');
	return;
}
$data = json_decode($buffer, true);
if ($data['password'] === $postPassword) {
	$_SESSION['messages'] = $data;
	header('Location: ../../public/chatWindow.php');
	return;
} else {
	$_SESSION['passError'] = 'showError';
	header('Location: ../../public/index.php');
	return;
}
