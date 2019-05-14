<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	return;
}

// variables
$userName = isset($_SESSION['user']) ? $_SESSION['user'] : false;
$message = isset($_POST['message']) ? $_POST['message'] : false;
if (!$userName && !$message){
	return;
}
$filePath = "../json/messages.json";

date_default_timezone_set('Europe/Athens');
$currentDate = date('Y-m-d H:i:s' );
$messageDate = preg_split("/[\s,]+/",$currentDate);
$currentDate = strtotime($currentDate);

// json object
$complex = [
	'messageDate' => $messageDate[0],
	'messageTime' => $messageDate[1],
	'messageFrom' => $userName,
	'message' => $message,
	'show' => true
];

$buffer = file_get_contents($filePath);
if (!$buffer){
	echo "false";
}
$data = json_decode($buffer, true);
$data['messages'][] = $complex;
file_put_contents($filePath, json_encode($data), JSON_PRETTY_PRINT);
header('Content-type: application/json');
echo json_encode($complex);
