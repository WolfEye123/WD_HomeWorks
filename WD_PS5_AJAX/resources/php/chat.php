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

$date = getdate();
$messageDate = $date['year'] . '-' .
	str_pad($date['mon'], 2, '0', STR_PAD_LEFT) . '-' .
	str_pad($date['mday'], 2, '0', STR_PAD_LEFT);
$messageTime =
	str_pad($date['hours'], 2, '0', STR_PAD_LEFT) . ':' .
	str_pad($date['minutes'], 2, '0', STR_PAD_LEFT) . ':' .
	str_pad($date['seconds'], 2, '0', STR_PAD_LEFT);

// json object
$complex = [
	'messageDate' => $messageDate,
	'messageTime' => $messageTime,
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
echo json_encode($complex);
header('Content-type: application/json');
